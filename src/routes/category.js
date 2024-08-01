const express = require('express');
const router = express.Router();
const categoryController = require("../controllers/product.js");


router.post('/create', categoryController.create);
router.get('/getAll', categoryController.getAll);
router.get('/getById/:categoryId', categoryController.getById);
router.put('/update/:categoryId', categoryController.update);
router.delete('/delete/:categoryId', categoryController.delete);


module.exports = router;