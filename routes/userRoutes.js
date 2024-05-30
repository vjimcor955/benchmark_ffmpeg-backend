// User router

const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

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

router.post('/register', authController.createUser);
router.post('/login', authController.authUser);

router.get('/', protect, userController.getAllUsers);
router.get('/:id', protect, userController.getUserById);
router.delete('/:id', protect, userController.deleteUser);

module.exports = router;
