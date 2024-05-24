// Models index

const sequelize = require('../config/database');
const User = require('./User');
const AuthToken = require('./AuthToken');
const UploadedVideo = require('./UploadedVideo');
const ResultVideo = require('./ResultVideo');

// Define associations
User.hasMany(UploadedVideo, { foreignKey: 'user_id' });
UploadedVideo.belongsTo(User, { foreignKey: 'user_id' });

User.hasOne(AuthToken, { foreignKey: 'user_id' });
AuthToken.belongsTo(User, { foreignKey: 'user_id' });

UploadedVideo.hasMany(ResultVideo, { foreignKey: 'uploadedVideo_id' });
ResultVideo.belongsTo(UploadedVideo, { foreignKey: 'uploadedVideo_id' });
UploadedVideo.hasMany(ResultVideo, { foreignKey: 'uploadedVideo_user_id' });
ResultVideo.belongsTo(UploadedVideo, { foreignKey: 'uploadedVideo_user_id' });

module.exports = {
  User,
  AuthToken,
  UploadedVideo,
  ResultVideo,
  sequelize
};
