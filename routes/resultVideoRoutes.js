// Result Video Routes

const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const resultVideoController = require('../controllers/resultVideoController');

// Protect routes
const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findByPk(decoded.id);
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

// Routes
const router = express.Router();

router.post('/video', protect, resultVideoController.uploadResult);

router.get('/', protect, resultVideoController.getAllResultVideos);
router.get('/:id', protect, resultVideoController.getResultVideoById);
router.delete('/:id', protect, resultVideoController.deleteResultVideo);

module.exports = router;