const express = require('express');
const userController = require('../controllers/userController');
const { validateUser } = require('../middleware/validator');
const { authenticate, protect } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.post('/register', userController.register);
router.post('/login', userController.login);

// Protected routes
router.post('/logout', protect, userController.logoutUser);

// Route to get user profile
router.get('/profile', authenticate, userController.getUserProfile);

// Route to update user information
router.put('/profile', authenticate, validateUser, userController.updateUserProfile);

// Route to delete user account
router.delete('/profile', authenticate, userController.deleteUserAccount);

module.exports = router;