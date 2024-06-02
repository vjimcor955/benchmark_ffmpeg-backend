// Index with all the routes

const express = require('express');
const userRoutes = require('./userRoutes');
const uploadedVideoRoutes = require('./uploadedVideoRoutes');
// const resultVideoRoutes = require('./resultVideoRoutes');

const router = express.Router();

// Use individual route modules
router.use('/user', userRoutes);

router.use('/uploadVideo', uploadedVideoRoutes);

// router.use('/resultVideo', resultVideoRoutes);

module.exports = router;
