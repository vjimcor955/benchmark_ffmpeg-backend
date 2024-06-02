// Uploaded Video Model

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UploadedVideo = sequelize.define('uploadedVideo', {
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
    type: DataTypes.INTEGER,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'user',
      key: 'id'
    }
  }
}, {
  tableName: 'uploadedVideo'
});

module.exports = UploadedVideo;
