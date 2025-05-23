const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Check seat availability between source and destination
const getSeatAvailability = async (req, res) => {
  try {
    const { sourceId, destinationId, date } = req.query;

    if (!sourceId || !destinationId) {
      return res.status(400).json({ error: true, message: 'Please provide source and destination stations' });
    }

    const journeyDate = date ? new Date(date) : new Date();
    
    // Find all train routes between source and destination
    const routes = await prisma.trainRoute.findMany({
      where: {
        sourceStationId: parseInt(sourceId),
        destStationId: parseInt(destinationId)
      },
      include: {
        train: true,
        sourceStation: true,
        destStation: true
      }
    });

    if (routes.length === 0) {
      return res.status(404).json({ error: true, message: 'No trains found between these stations' });
    }

    // Get availability for each train
    const availability = await Promise.all(routes.map(async (route) => {
      // Count total seats
      const totalSeats = await prisma.seat.count({
        where: { trainId: route.trainId }
      });

      // Count booked seats on this route for the given date
      const bookedSeats = await prisma.booking.count({
        where: {
          trainId: route.trainId,
          sourceId: parseInt(sourceId),
          destinationId: parseInt(destinationId),
          journeyDate: {
            gte: new Date(journeyDate.setHours(0, 0, 0, 0)),
            lt: new Date(journeyDate.setHours(23, 59, 59, 999))
          }
        }
      });

      // Get available seats
      const availableSeats = await prisma.seat.findMany({
        where: {
          trainId: route.trainId,
          isAvailable: true,
          bookings: {
            none: {
              journeyDate: {
                gte: new Date(journeyDate.setHours(0, 0, 0, 0)),
                lt: new Date(journeyDate.setHours(23, 59, 59, 999))
              },
              OR: [
                {
                  sourceId: parseInt(sourceId),
                  destinationId: parseInt(destinationId)
                },
                {
                  AND: [
                    {
                      sourceId: { lt: parseInt(destinationId) }
                    },
                    {
                      destinationId: { gt: parseInt(sourceId) }
                    }
                  ]
                }
              ]
            }
          }
        }
      });

      return {
        train: route.train,
        sourceStation: route.sourceStation,
        destStation: route.destStation,
        departureTime: route.departureTime,
        arrivalTime: route.arrivalTime,
        totalSeats,
        bookedSeats,
        availableSeats: availableSeats.length,
        availableSeatNumbers: availableSeats.map(seat => seat.seatNumber)
      };
    }));

    res.status(200).json({
      success: true,
      data: availability
    });
  } catch (error) {
    console.error('Get seat availability error:', error);
    res.status(500).json({ error: true, message: 'Server error while checking seat availability' });
  }
};

// Book a seat
const bookSeat = async (req, res) => {
  try {
    const { trainId, seatId, sourceId, destinationId, journeyDate } = req.body;
    const userId = req.user.id;

    // Validation
    if (!trainId || !seatId || !sourceId || !destinationId || !journeyDate) {
      return res.status(400).json({ error: true, message: 'Please provide all required fields' });
    }

    // Start a transaction to handle race conditions
    const booking = await prisma.$transaction(async (prisma) => {
      // Lock the seat for update to prevent race conditions
      const seat = await prisma.seat.findUnique({
        where: { id: parseInt(seatId) },
        select: { id: true, trainId: true, isAvailable: true }
      });

      if (!seat) {
        throw new Error('Seat not found');
      }

      if (!seat.isAvailable) {
        throw new Error('Seat is not available');
      }

      // Check if seat is already booked for this journey date and route
      const existingBooking = await prisma.booking.findFirst({
        where: {
          seatId: parseInt(seatId),
          journeyDate: new Date(journeyDate),
          OR: [
            {
              sourceId: parseInt(sourceId),
              destinationId: parseInt(destinationId)
            },
            {
              AND: [
                {
                  sourceId: { lt: parseInt(destinationId) }
                },
                {
                  destinationId: { gt: parseInt(sourceId) }
                }
              ]
            }
          ]
        }
      });

      if (existingBooking) {
        throw new Error('Seat is already booked for this journey');
      }

      // Create booking
      return await prisma.booking.create({
        data: {
          userId,
          trainId: parseInt(trainId),
          seatId: parseInt(seatId),
          sourceId: parseInt(sourceId),
          destinationId: parseInt(destinationId),
          journeyDate: new Date(journeyDate)
        },
        include: {
          user: {
            select: {
              id: true,
              username: true,
              email: true
            }
          },
          train: true,
          seat: true
        }
      });
    });

    res.status(201).json({
      success: true,
      message: 'Seat booked successfully',
      booking
    });
  } catch (error) {
    console.error('Book seat error:', error);
    res.status(400).json({ error: true, message: error.message || 'Server error while booking seat' });
  }
};

// Get user bookings
const getUserBookings = async (req, res) => {
  try {
    const userId = req.user.id;

    const bookings = await prisma.booking.findMany({
      where: { userId },
      include: {
        train: true,
        seat: true,
        user: {
          select: {
            id: true,
            username: true,
            email: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.status(200).json({
      success: true,
      data: bookings
    });
  } catch (error) {
    console.error('Get bookings error:', error);
    res.status(500).json({ error: true, message: 'Server error while fetching bookings' });
  }
};

// Get booking details by ID
const getBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const booking = await prisma.booking.findFirst({
      where: {
        id: parseInt(id),
        userId
      },
      include: {
        train: true,
        seat: true,
        user: {
          select: {
            id: true,
            username: true,
            email: true
          }
        }
      }
    });

    if (!booking) {
      return res.status(404).json({ error: true, message: 'Booking not found' });
    }

    res.status(200).json({
      success: true,
      data: booking
    });
  } catch (error) {
    console.error('Get booking error:', error);
    res.status(500).json({ error: true, message: 'Server error while fetching booking' });
  }
};

module.exports = {
  getSeatAvailability,
  bookSeat,
  getUserBookings,
  getBookingById
};