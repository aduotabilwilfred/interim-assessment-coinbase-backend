const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// Protect the profile route with auth middleware
router.get('/', auth, userController.getProfile);

module.exports = router;
