const express = require('express');
const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

const PORT = process.env.PORT || 3000;
const prisma = new PrismaClient();

app.use(express.json());

app.listen(PORT, async () => {
    try {
        await prisma.$connect();
        console.log('Database connected successfully');
        console.log(`Server is running on http://localhost:${PORT}`);
    } catch (err) {
        console.error('Database connection error:', err);
    }
});