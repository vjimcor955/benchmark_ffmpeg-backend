// Result Video Model

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ResultVideo = sequelize.define('resultVideo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  // video: {
  //   type: DataTypes.BLOB('long'),
  //   allowNull: false
  // },
  path: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  uploadedVideo_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'uploadedVideo',
      key: 'id'
    }
  },
  uploadedVideo_user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'uploadedVideo',
      key: 'user_id'
    }
  }
}, {
  tableName: 'resultVideo'
});

module.exports = ResultVideo;