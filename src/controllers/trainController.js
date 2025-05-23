const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Add new train (admin only)
exports.addTrain = async (req, res) => {
  try {
    const { 
      trainNumber, 
      name, 
      source, 
      destination, 
      departureTime,
      arrivalTime,
      totalSeats 
    } = req.body;

    // Validation
    if (!trainNumber || !name || !source || !destination || !departureTime || !arrivalTime || !totalSeats) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    // Check if train exists
    const existingTrain = await prisma.train.findUnique({
      where: { trainNumber }
    });

    if (existingTrain) {
      return res.status(400).json({ message: 'Train with this number already exists' });
    }

    // Create train
    const train = await prisma.train.create({
      data: {
        trainNumber,
        name,
        source,
        destination,
        departureTime: new Date(departureTime),
        arrivalTime: new Date(arrivalTime),
        totalSeats: parseInt(totalSeats)
      }
    });

    res.status(201).json({ message: 'Train added successfully', train });
  } catch (error) {
    console.error('Add train error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all trains
exports.getTrains = async (req, res) => {
  try {
    const trains = await prisma.train.findMany();
    res.json(trains);
  } catch (error) {
    console.error('Get trains error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get seat availability
exports.getSeatAvailability = async (req, res) => {
  try {
    const { source, destination } = req.query;

    if (!source || !destination) {
      return res.status(400).json({ message: 'Please provide source and destination' });
    }

    const trains = await prisma.train.findMany({
      where: {
        source: { contains: source, mode: 'insensitive' },
        destination: { contains: destination, mode: 'insensitive' },
      },
    });

    const availabilityPromises = trains.map(async (train) => {
      const bookedSeats = await prisma.booking.count({
        where: {
          trainId: train.id,
          status: 'CONFIRMED',
        },
      });

      const availableSeats = train.totalSeats - bookedSeats;

      return {
        ...train,
        availableSeats,
      };
    });

    const trainsWithAvailability = await Promise.all(availabilityPromises);
    res.json(trainsWithAvailability);
  } catch (error) {
    console.error('Get seat availability error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};