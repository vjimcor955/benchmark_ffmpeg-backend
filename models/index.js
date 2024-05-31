// Models index associations

const sequelize = require('../config/database');
const User = require('./User');
const AuthToken = require('./AuthToken');
const UploadedVideo = require('./UploadedVideo');
const ResultVideo = require('./ResultVideo');

// Define relationships

// One to One relationship between User and AuthToken
User.hasOne(AuthToken, { foreignKey: 'user_id' });
AuthToken.belongsTo(User, { foreignKey: 'user_id' });

// One to Many relationship between User and UploadedVideo
User.hasMany(UploadedVideo, { foreignKey: 'user_id' });
UploadedVideo.belongsTo(User, { foreignKey: 'user_id' });

// Many to Many relationship between UploadedVideo and ResultVideo
UploadedVideo.belongsToMany(ResultVideo, { through: 'uploadedResult', foreignKey: 'uploadedVideo_id' });
ResultVideo.belongsToMany(UploadedVideo, { through: 'uploadedResult', foreignKey: 'resultVideo_id' });

module.exports = {
  User,
  AuthToken,
  UploadedVideo,
  ResultVideo,
  sequelize
};
