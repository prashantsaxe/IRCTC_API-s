const { body, validationResult } = require('express-validator');

const validateTrain = [
    body('trainNumber').isString().withMessage('Train number must be a string'),
    body('trainName').isString().withMessage('Train name must be a string'),
    body('source').isString().withMessage('Source must be a string'),
    body('destination').isString().withMessage('Destination must be a string'),
    body('departureTime').isISO8601().withMessage('Departure time must be a valid date'),
    body('arrivalTime').isISO8601().withMessage('Arrival time must be a valid date'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateBooking = [
    body('userId').isString().withMessage('User ID must be a string'),
    body('trainId').isString().withMessage('Train ID must be a string'),
    body('numberOfSeats').isInt({ gt: 0 }).withMessage('Number of seats must be a positive integer'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateUser = [
    body('username').isString().withMessage('Username must be a string'),
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    validateTrain,
    validateBooking,
    validateUser,
};