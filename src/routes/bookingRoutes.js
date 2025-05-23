const express = require('express');
const { 
  getSeatAvailability, 
  bookSeat, 
  getUserBookings, 
  getBookingById 
} = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.get('/availability', getSeatAvailability);

// Protected routes (require authentication)
router.post('/', protect, bookSeat);
router.get('/', protect, getUserBookings);
router.get('/:id', protect, getBookingById);

// User booking routes - all require authentication
router.post('/', authenticateToken, bookingController.bookSeat);
router.get('/:bookingId', authenticateToken, bookingController.getBookingDetails);
router.get('/', authenticateToken, bookingController.getUserBookings);

module.exports = router;