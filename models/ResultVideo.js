// Result Video Model

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ResultVideo = sequelize.define('resultVideo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  size: {
    type: DataTypes.STRING,
    allowNull: false
  },
  codec: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'resultVideo'
});

module.exports = ResultVideo;