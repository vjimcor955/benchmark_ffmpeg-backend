// User Controller

const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    console.log(req.body)
    const { name, user, email, password } = req.body;
    const newUser = await User.create({ name, user, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
