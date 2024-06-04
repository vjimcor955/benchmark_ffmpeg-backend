// Main file (configure express and sart the server)

require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models');
const mainRouter = require('./routes'); // Import the main router
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', mainRouter); // Use the main router

sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
    return sequelize.sync();
  })
  .then(() => {
    console.log('All models were synchronized successfully.');
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
