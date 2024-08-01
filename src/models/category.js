const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequalize.js");

const Category = sequelize.define("category", {
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
});


module.exports = Category;