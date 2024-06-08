// database connection configuration

const { Sequelize } = require('sequelize');

// Use the DATABASE_URL if available (Heroku style), otherwise use individual environment variables
const connectionString = process.env.DATABASE_URL || {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: 3306,
};

const sequelize = new Sequelize(connectionString, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = sequelize;
