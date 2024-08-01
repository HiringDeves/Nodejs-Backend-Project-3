const { DataTypes } = require('sequelize');
const sequelize = require("../config/sequalize")
const product = require("../models/product");
const category = require("../models/category")

const ProductCategoryRelation = sequelize.define('ProductCategoryRelation', {
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'product', // Name of the Products table
      key: 'id'
    },
    allowNull: false
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'category', // Name of the Categories table
      key: 'id'
    },
allowNull: false
  }
}, {
  tableName: 'ProductCategoryRelation',
  timestamps: false 
});

module.exports = ProductCategoryRelation;