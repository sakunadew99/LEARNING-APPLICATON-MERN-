const express = require('express');
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require('../controllers/authController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/profile')
    .get(protect, getUserProfile)   // Existing route to get user profile
    .put(protect, updateUserProfile); // New route to update user profile

module.exports = router;
