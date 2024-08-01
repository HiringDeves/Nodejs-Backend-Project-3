const Category = require("../models/category.js");
const categoryProduct = require("../models/productCategory.js")

const categoryController = {
  create: async (req, res) => {
    try {
      const { name, description} = req.body;
      
      const category = await Category.create({
        name, 
        description
      })

      res.status(201).json({ success: true, data: category});
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getAll: async (req, res) => {
    try {
      const category = await Category.findAll();
      res.status(200).json({ success: true, data: category });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },


getById: async (req, res) => {
    try {
      const {categoryId} = req.params;
      const category = await Category.findByPk(categoryId);
      res.status(200).json({ success: true, data: category });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  update: async (req, res) => {
    try {
      const {categoryId} = req.params;
      const category = await Category.findOneAndUpdate({categoryId},{new: true});
      res.status(200).json({ success: true, data: category });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  delete: async (req, res) => {
    try {
      const {categoryId} = req.params;
      const category = await Category.destroy({ where: { id: categoryId } });
      res.status(200).json({ success: true, message: "Category deleted" });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
}


module.exports = categoryController;