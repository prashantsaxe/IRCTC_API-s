const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Add new train (admin only)
const addTrain = async (req, res) => {
  try {
    const { 
      trainNumber, 
      name, 
      source, 
      destination, 
      schedule,
      totalSeats 
    } = req.body;

    // Validation
    if (!trainNumber || !name || !source || !destination || !schedule) {
      return res.status(400).json({ error: true, message: 'Please provide all required fields' });
    }

    // Check if train exists
    const trainExists = await prisma.train.findUnique({
      where: { trainNumber }
    });

    if (trainExists) {
      return res.status(400).json({ error: true, message: 'Train with this number already exists' });
    }

    // Create train
    const train = await prisma.train.create({
      data: {
        trainNumber,
        name,
        source,
        destination,
        schedule: new Date(schedule),
        totalSeats: totalSeats || 100
      }
    });

    // Create seats for the train
    const seatsToCreate = [];
    for (let i = 1; i <= train.totalSeats; i++) {
      seatsToCreate.push({
        trainId: train.id,
        seatNumber: i,
        isAvailable: true
      });
    }

    await prisma.seat.createMany({
      data: seatsToCreate
    });

    res.status(201).json({
      success: true,
      message: 'Train added successfully',
      train
    });
  } catch (error) {
    console.error('Add train error:', error);
    res.status(500).json({ error: true, message: 'Server error while adding train' });
  }
};

// Get all trains
const getAllTrains = async (req, res) => {
  try {
    const trains = await prisma.train.findMany({
      include: {
        trainRoutes: {
          include: {
            sourceStation: true,
            destStation: true
          }
        }
      }
    });

    res.status(200).json({ success: true, data: trains });
  } catch (error) {
    console.error('Get trains error:', error);
    res.status(500).json({ error: true, message: 'Server error while fetching trains' });
  }
};

// Get train by ID
const getTrainById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const train = await prisma.train.findUnique({
      where: { id: parseInt(id) },
      include: {
        trainRoutes: {
          include: {
            sourceStation: true,
            destStation: true
          }
        },
        seats: {
          where: { isAvailable: true }
        }
      }
    });

    if (!train) {
      return res.status(404).json({ error: true, message: 'Train not found' });
    }

    res.status(200).json({ success: true, data: train });
  } catch (error) {
    console.error('Get train error:', error);
    res.status(500).json({ error: true, message: 'Server error while fetching train' });
  }
};

// Add train route
const addTrainRoute = async (req, res) => {
  try {
    const { 
      trainId, 
      sourceStationId, 
      destStationId, 
      departureTime,
      arrivalTime,
      distance
    } = req.body;

    // Validation
    if (!trainId || !sourceStationId || !destStationId || !departureTime || !arrivalTime || !distance) {
      return res.status(400).json({ error: true, message: 'Please provide all required fields' });
    }

    // Check if train exists
    const train = await prisma.train.findUnique({
      where: { id: parseInt(trainId) }
    });

    if (!train) {
      return res.status(404).json({ error: true, message: 'Train not found' });
    }

    // Check if stations exist
    const sourceStation = await prisma.station.findUnique({
      where: { id: parseInt(sourceStationId) }
    });

    const destStation = await prisma.station.findUnique({
      where: { id: parseInt(destStationId) }
    });

    if (!sourceStation || !destStation) {
      return res.status(404).json({ error: true, message: 'One or both stations not found' });
    }

    // Create train route
    const trainRoute = await prisma.trainRoute.create({
      data: {
        trainId: parseInt(trainId),
        sourceStationId: parseInt(sourceStationId),
        destStationId: parseInt(destStationId),
        departureTime: new Date(departureTime),
        arrivalTime: new Date(arrivalTime),
        distance: parseFloat(distance)
      },
      include: {
        sourceStation: true,
        destStation: true,
        train: true
      }
    });

    res.status(201).json({
      success: true,
      message: 'Train route added successfully',
      trainRoute
    });
  } catch (error) {
    console.error('Add train route error:', error);
    res.status(500).json({ error: true, message: 'Server error while adding train route' });
  }
};

// Update train total seats (admin only)
const updateTrainSeats = async (req, res) => {
  try {
    const { id } = req.params;
    const { totalSeats } = req.body;

    // Validation
    if (!totalSeats || totalSeats <= 0) {
      return res.status(400).json({ error: true, message: 'Please provide valid total seats' });
    }

    // Check if train exists
    const train = await prisma.train.findUnique({
      where: { id: parseInt(id) }
    });

    if (!train) {
      return res.status(404).json({ error: true, message: 'Train not found' });
    }

    // Get current seat count
    const currentSeatsCount = await prisma.seat.count({
      where: { trainId: parseInt(id) }
    });

    // Update train
    const updatedTrain = await prisma.train.update({
      where: { id: parseInt(id) },
      data: { totalSeats }
    });

    // If increasing seats, add new seats
    if (totalSeats > currentSeatsCount) {
      const seatsToCreate = [];
      for (let i = currentSeatsCount + 1; i <= totalSeats; i++) {
        seatsToCreate.push({
          trainId: parseInt(id),
          seatNumber: i,
          isAvailable: true
        });
      }

      if (seatsToCreate.length > 0) {
        await prisma.seat.createMany({
          data: seatsToCreate
        });
      }
    }

    res.status(200).json({
      success: true,
      message: 'Train seats updated successfully',
      train: updatedTrain
    });
  } catch (error) {
    console.error('Update train seats error:', error);
    res.status(500).json({ error: true, message: 'Server error while updating train seats' });
  }
};

module.exports = {
  addTrain,
  getAllTrains,
  getTrainById,
  addTrainRoute,
  updateTrainSeats
};