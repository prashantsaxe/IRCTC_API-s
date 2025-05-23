const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Add new station (admin only)
const addStation = async (req, res) => {
  try {
    const { name, location } = req.body;

    // Validation
    if (!name || !location) {
      return res.status(400).json({ error: true, message: 'Please provide all required fields' });
    }

    // Check if station exists
    const stationExists = await prisma.station.findUnique({
      where: { name }
    });

    if (stationExists) {
      return res.status(400).json({ error: true, message: 'Station with this name already exists' });
    }

    // Create station
    const station = await prisma.station.create({
      data: {
        name,
        location
      }
    });

    res.status(201).json({
      success: true,
      message: 'Station added successfully',
      station
    });
  } catch (error) {
    console.error('Add station error:', error);
    res.status(500).json({ error: true, message: 'Server error while adding station' });
  }
};

// Get all stations
const getAllStations = async (req, res) => {
  try {
    const stations = await prisma.station.findMany();

    res.status(200).json({ success: true, data: stations });
  } catch (error) {
    console.error('Get stations error:', error);
    res.status(500).json({ error: true, message: 'Server error while fetching stations' });
  }
};

// Get station by ID
const getStationById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const station = await prisma.station.findUnique({
      where: { id: parseInt(id) },
      include: {
        sourceRoutes: {
          include: {
            train: true,
            destStation: true
          }
        },
        destRoutes: {
          include: {
            train: true,
            sourceStation: true
          }
        }
      }
    });

    if (!station) {
      return res.status(404).json({ error: true, message: 'Station not found' });
    }

    res.status(200).json({ success: true, data: station });
  } catch (error) {
    console.error('Get station error:', error);
    res.status(500).json({ error: true, message: 'Server error while fetching station' });
  }
};

module.exports = {
  addStation,
  getAllStations,
  getStationById
};