// Index with all the routes

const express = require('express');
const userRoutes = require('./userRoutes');
const uploadedVideoRoutes = require('./uploadedVideoRoutes');
const resultVideoRoutes = require('./resultVideoRoutes');

const router = express.Router();

// Use individual route modules
router.use('/user', userRoutes);

router.use('/upload', uploadedVideoRoutes);

router.use('/result', resultVideoRoutes);

module.exports = router;
