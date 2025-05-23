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
  const { trainId } = req.body;
  
  if (!trainId) {
      return res.status(400).json({ message: 'Please provide trainId' });
  }

  // Use a transaction to handle race conditions
  try {
      const result = await prisma.$transaction(async (tx) => {
          // Lock the train record for the duration of the transaction
          const train = await tx.train.findUnique({
              where: { id: trainId },
          });

          if (!train) {
              throw new Error('Train not found');
          }

          // Get the count of existing bookings
          const bookedSeatsCount = await tx.booking.count({
              where: {
                  trainId,
                  status: 'CONFIRMED',
              },
          });

          // Check if seats are available
          if (bookedSeatsCount >= train.totalSeats) {
              throw new Error('No seats available');
          }

          // Find the next available seat number
          const bookings = await tx.booking.findMany({
              where: {
                  trainId,
                  status: 'CONFIRMED',
              },
              orderBy: {
                  seatNumber: 'asc',
              },
          });

          let seatNumber = 1;
          for (const booking of bookings) {
              if (booking.seatNumber === seatNumber) {
                  seatNumber++;
              } else {
                  break;
              }
          }

          // Create the booking
          const booking = await tx.booking.create({
              data: {
                  userId: req.user.id,
                  trainId,
                  seatNumber,
                  status: 'CONFIRMED',
              },
              include: {
                  train: true,
              },
          });

          return booking;
      });

      res.status(201).json({
          message: 'Booking successful',
          booking: result,
      });
  } catch (error) {
      if (error.message === 'No seats available') {
          return res.status(400).json({ message: 'No seats available for this train' });
      } else if (error.message === 'Train not found') {
          return res.status(404).json({ message: 'Train not found' });
      }
      res.status(500).json({ message: 'Server error', error: error.message });
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