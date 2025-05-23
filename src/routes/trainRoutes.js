const express = require('express');
const { 
  addTrain, 
  getAllTrains, 
  getTrainById, 
  addTrainRoute, 
  updateTrainSeats,
  getSeatAvailability
} = require('../controllers/trainController');
const { protect, adminOnly, validateApiKey } = require('../middleware/authMiddleware');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.get('/', getAllTrains);
router.get('/:id', getTrainById);
router.get('/availability', getSeatAvailability);

// Admin routes (protected by API key and admin check)
router.post('/', validateApiKey, protect, adminOnly, addTrain);
router.post('/routes', validateApiKey, protect, adminOnly, addTrainRoute);
router.put('/:id/seats', validateApiKey, protect, adminOnly, updateTrainSeats);

// Admin routes with token authentication and role authorization
router.post('/', validateApiKey, authenticateToken, authorizeRoles('ADMIN'), addTrain);
router.get('/', authenticateToken, getAllTrains);

module.exports = router;