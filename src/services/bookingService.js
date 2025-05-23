const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createBooking = async (bookingData) => {
    try {
        const booking = await prisma.booking.create({
            data: bookingData,
        });
        return booking;
    } catch (error) {
        throw new Error('Error creating booking: ' + error.message);
    }
};

const getBookingById = async (id) => {
    try {
        const booking = await prisma.booking.findUnique({
            where: { id: Number(id) },
        });
        return booking;
    } catch (error) {
        throw new Error('Error retrieving booking: ' + error.message);
    }
};

const getAllBookings = async () => {
    try {
        const bookings = await prisma.booking.findMany();
        return bookings;
    } catch (error) {
        throw new Error('Error retrieving bookings: ' + error.message);
    }
};

const updateBooking = async (id, bookingData) => {
    try {
        const updatedBooking = await prisma.booking.update({
            where: { id: Number(id) },
            data: bookingData,
        });
        return updatedBooking;
    } catch (error) {
        throw new Error('Error updating booking: ' + error.message);
    }
};

const deleteBooking = async (id) => {
    try {
        await prisma.booking.delete({
            where: { id: Number(id) },
        });
        return { message: 'Booking deleted successfully' };
    } catch (error) {
        throw new Error('Error deleting booking: ' + error.message);
    }
};

module.exports = {
    createBooking,
    getBookingById,
    getAllBookings,
    updateBooking,
    deleteBooking,
};