const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getUserById = async (id) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: Number(id) },
        });
        return user;
    } catch (error) {
        throw new Error('Error retrieving user: ' + error.message);
    }
};

const createUser = async (data) => {
    try {
        const newUser = await prisma.user.create({
            data,
        });
        return newUser;
    } catch (error) {
        throw new Error('Error creating user: ' + error.message);
    }
};

const updateUser = async (id, data) => {
    try {
        const updatedUser = await prisma.user.update({
            where: { id: Number(id) },
            data,
        });
        return updatedUser;
    } catch (error) {
        throw new Error('Error updating user: ' + error.message);
    }
};

const deleteUser = async (id) => {
    try {
        await prisma.user.delete({
            where: { id: Number(id) },
        });
    } catch (error) {
        throw new Error('Error deleting user: ' + error.message);
    }
};

module.exports = {
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};