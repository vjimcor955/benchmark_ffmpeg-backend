// UploadedResult model (intermediate table between UploadedVideo and ResultVideo)

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UploadedResult = sequelize.define('uploadedResult', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uploadedVideo_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'uploadedVideo',
      key: 'id'
    }
  },
  resultVideo_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'resultVideo',
      key: 'id'
    }
  }
}, {
  tableName: 'uploadedResult'
});

module.exports = UploadedResult;