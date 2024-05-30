// User model

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcryptjs');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  user: {
    type: DataTypes.STRING(16),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(62),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(80),
    allowNull: false
  }
}, {
  tableName: 'user',
  hooks: {
    beforeCreate: async (user) => {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
      console.log('Hashed Password Length:', user.password.length); // Log length
    }
  }
});

User.prototype.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = User;
