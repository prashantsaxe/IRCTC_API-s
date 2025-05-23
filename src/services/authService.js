const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

const registerUser = async (userData) => {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = await prisma.user.create({
        data: {
            ...userData,
            password: hashedPassword,
        },
    });
    return user;
};

const loginUser = async (email, password) => {
    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid password');
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });

    return { user, token };
};

const getUserById = async (userId) => {
    return await prisma.user.findUnique({
        where: { id: userId },
    });
};

module.exports = {
    registerUser,
    loginUser,
    getUserById,
};