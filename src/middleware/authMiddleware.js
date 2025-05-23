const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Middleware to protect routes - requires user authentication
const protect = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
      
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Find the user without the password
      const user = await prisma.user.findUnique({
        where: { id: decoded.id },
        select: {
          id: true,
          username: true,
          email: true,
          role: true,
          token: true
        }
      });

      if (!user || user.token !== token) {
        throw new Error('Invalid token');
      }

      req.user = user;
      next();
    } else {
      throw new Error('Not authorized, token required');
    }
  } catch (error) {
    res.status(401).json({ error: true, message: error.message || 'Not authorized' });
  }
};

// Middleware to check if user is admin
const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === 'ADMIN') {
    next();
  } else {
    res.status(403).json({ error: true, message: 'Not authorized as admin' });
  }
};

// Middleware to check API key for admin routes
const validateApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  
  if (!apiKey || apiKey !== process.env.ADMIN_API_KEY) {
    return res.status(401).json({ error: true, message: 'Invalid API key' });
  }
  
  next();
};

module.exports = { protect, adminOnly, validateApiKey };
