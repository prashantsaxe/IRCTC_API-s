const express = require('express');
const { 
  addTrain, 
  getAllTrains, 
  getTrainById, 
  addTrainRoute, 
  updateTrainSeats 
} = require('../controllers/trainController');
const { protect, adminOnly, validateApiKey } = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.get('/', getAllTrains);
router.get('/:id', getTrainById);

// Admin routes (protected by API key and admin check)
router.post('/', validateApiKey, protect, adminOnly, addTrain);
router.post('/routes', validateApiKey, protect, adminOnly, addTrainRoute);
router.put('/:id/seats', validateApiKey, protect, adminOnly, updateTrainSeats);

module.exports = router;