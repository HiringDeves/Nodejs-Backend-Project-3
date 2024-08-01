const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequalize.js");

const Product = sequelize.define("product", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
  },
});


module.exports = Product;
