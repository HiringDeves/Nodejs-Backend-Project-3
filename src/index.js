const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mysql = require("mysql2");

const db = require("./config/sequalize.js");


dotenv.config({ path: __dirname + "/config/config.env" });

app.use(express.json());

app.use('/api/v1', require('./routes/route.js'));

db.sync()
  .then(() => {
    console.log('Database synchronized successfully.');
    app.listen(process.env.PORT, () => {
        console.log(`Server running on ${process.env.PORT}`);
      });
  })
  .catch(err => {
    console.error('Unable to synchronize the database:', err);
  });