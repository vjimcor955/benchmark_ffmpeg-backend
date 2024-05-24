// User router (register and login)

const express = require('express');
const { createUser, getAllUsers } = require('../controllers/userController');

const router = express.Router();

router.post('/', createUser);
router.get('/', getAllUsers);

module.exports = router;
