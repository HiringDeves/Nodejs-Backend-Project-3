const express = require('express');
const router = express.Router();
const productController = require("../controllers/product.js");


router.post('/create', productController.create);
router.get('/getAll', productController.getAll);
router.get('/getById/:productId', productController.getById);
router.put('/update/:productId', productController.update);
router.delete('/delete/:productId', productController.delete);


module.exports = router;