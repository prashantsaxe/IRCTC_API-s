const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createTrain = async (trainData) => {
    try {
        const train = await prisma.train.create({
            data: trainData,
        });
        return train;
    } catch (error) {
        throw new Error('Error creating train: ' + error.message);
    }
};

const getAllTrains = async () => {
    try {
        const trains = await prisma.train.findMany();
        return trains;
    } catch (error) {
        throw new Error('Error retrieving trains: ' + error.message);
    }
};

const getTrainById = async (id) => {
    try {
        const train = await prisma.train.findUnique({
            where: { id: Number(id) },
        });
        return train;
    } catch (error) {
        throw new Error('Error retrieving train: ' + error.message);
    }
};

const updateTrain = async (id, trainData) => {
    try {
        const train = await prisma.train.update({
            where: { id: Number(id) },
            data: trainData,
        });
        return train;
    } catch (error) {
        throw new Error('Error updating train: ' + error.message);
    }
};

const deleteTrain = async (id) => {
    try {
        await prisma.train.delete({
            where: { id: Number(id) },
        });
    } catch (error) {
        throw new Error('Error deleting train: ' + error.message);
    }
};

module.exports = {
    createTrain,
    getAllTrains,
    getTrainById,
    updateTrain,
    deleteTrain,
};