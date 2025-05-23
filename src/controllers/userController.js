const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// Register user
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validation
    if (!username || !email || !password) {
      return res.status(400).json({ error: true, message: 'Please provide all required fields' });
    }

    // Check if user exists
    const userExists = await prisma.user.findFirst({
      where: {
        OR: [
          { username },
          { email }
        ]
      }
    });

    if (userExists) {
      return res.status(400).json({ error: true, message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        username: true,
        email: true,
        role: true
      }
    });

    if (user) {
      res.status(201).json({
        success: true,
        message: 'User registered successfully',
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role
        }
      });
    } else {
      res.status(400).json({ error: true, message: 'Invalid user data' });
    }
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ error: true, message: 'Server error during registration' });
  }
};

// Login user
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validation
    if (!username || !password) {
      return res.status(400).json({ error: true, message: 'Please provide username and password' });
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { username }
    });

    // Check user and password
    if (user && await bcrypt.compare(password, user.password)) {
      // Generate token
      const token = generateToken(user.id);
      
      // Update user with token
      await prisma.user.update({
        where: { id: user.id },
        data: { token }
      });

      res.status(200).json({
        success: true,
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        token
      });
    } else {
      res.status(401).json({ error: true, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: true, message: 'Server error during login' });
  }
};

// Logout user
const logoutUser = async (req, res) => {
  try {
    await prisma.user.update({
      where: { id: req.user.id },
      data: { token: null }
    });

    res.status(200).json({ success: true, message: 'Logged out successfully' });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ error: true, message: 'Server error during logout' });
  }
};

module.exports = { registerUser, loginUser, logoutUser };