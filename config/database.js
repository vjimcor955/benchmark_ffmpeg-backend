// database connection configuration

const { Sequelize } = require('sequelize');

const databaseUrl = process.env.DATABASE_URL || '';

const sequelize = new Sequelize(databaseUrl, {
  dialect: 'mysql',
  protocol: 'mysql',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // This is important if you are connecting to a Heroku database
    }
  },
  logging: false // Disable logging if not needed
});

module.exports = sequelize;
