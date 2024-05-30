// Authentication controller (register and login)

const AuthToken = require('../models/AuthToken');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { name, user, email, password } = req.body;

    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ message: 'Email already in use.' });
    }

    const newUser = await User.create({ name, user, email, password });
    const newToken = await AuthToken.create({ token: generateToken(newUser.id), user_id: newUser.id });

    res.status(201).json({
      id: newUser.id,
      name: newUser.name,
      username: newUser.user,
      email: newUser.email,
      password: newUser.password,
      token: newToken.token
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Authenticate user and get token
exports.authUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });
  const token = await AuthToken.findOne({ where: { user_id: user.id } });

  if (user && (await user.comparePassword(password))) {
    res.json({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      token: token.token
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
};