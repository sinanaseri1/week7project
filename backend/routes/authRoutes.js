const express = require('express');
const router = express.Router();
const { register, login, getProfile } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Public
router.post('/register', register);
router.post('/login', login);

// Protected
router.get('/profile', authMiddleware, getProfile);

module.exports = router;
