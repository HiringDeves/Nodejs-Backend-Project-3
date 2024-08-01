const Product = require("../models/product.js");

const productController = {
  create: async (req, res) => {
    try {
      const { title, description, price } = req.body;

      const product = await Product.create({
        title,
        description,
        price,
      });

      res.status(201).json({ success: true, data: product });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getAll: async (req, res) => {
    try {
      const product = await Product.findAll();
      res.status(200).json({ success: true, data: product });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getById: async (req, res) => {
    try {
      const { productId } = req.params;
      console.log(productId);
      const product = await Product.findByPk(productId);
      res.status(200).json({ success: true, data: product });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  update: async (req, res) => {
    try {
      const { name, description } = req.body;
      const { productId } = req.params;
      console.log(req.body)
      console.log(productId)

      const [updated] = await Product.update(
        { name, description },
        { where: { id: productId } }
      );
  

      if (updated) {
        const updatedProduct = await Product.findOne({
          where: { id: productId },
        });
        res.status(200).json({ success: true, data: updatedProduct });
      } else {
        res.status(404).json({ success: false, message: "Unable to update" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  delete: async (req, res) => {
    try {
      const { productId } = req.params;
      await Product.destroy({ where: { id: productId } });
      res.status(200).json({ success: true, message: "Product deleted" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = productController;
