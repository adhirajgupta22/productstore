const express = require('express');
const {createProduct, updateProduct, deleteProduct,getProducts} = require('../controllers/product.controller');

const router = express.Router();
// Controller functions (you need to implement these)
// Routes
router.get("/",getProducts);
router.post("/",createProduct);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct);

module.exports = router;