const express = require('express');
const { 
  addStation, 
  getAllStations, 
  getStationById 
} = require('../controllers/stationController');
const { protect, adminOnly, validateApiKey } = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.get('/', getAllStations);
router.get('/:id', getStationById);

// Admin routes (protected by API key and admin check)
router.post('/', validateApiKey, protect, adminOnly, addStation);

module.exports = router;