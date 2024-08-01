const { Sequelize } = require('sequelize');
const dotenv = require("dotenv")
dotenv.config({ path: __dirname + "/config.env" });


const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
  });
  
  sequelize.authenticate()
    .then(() => {
      console.log('Connection to the database has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
  
  module.exports = sequelize;