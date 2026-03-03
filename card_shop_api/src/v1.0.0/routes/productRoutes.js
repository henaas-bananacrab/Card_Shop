const express = require('express');

const { allProducts, productsByType, singleProduct, createProduct, updateProduct, deleteProduct } = require('../controller/productController');

const router = express.Router();

//GET | www.localhost:3000/api/v1.0.0/products
router.get('/products', allProducts);

//GET | www.localhost:3000/api/v1.0.0/products/:Type
router.get('/products/:Type', productsByType);

//GET | www.localhost:3000/api/v1.0.0/products/:Name
router.get('/products/:Name', singleProduct);

//POST | www.localhost:3000/api/v1.0.0/products
router.post('/products', createProduct);

//PUT | www.localhost:3000/api/v1.0.0/products/:Name
router.put('/products/:Name', updateProduct);

//DELETE | www.localhost:3000/api/v1.0.0/products/:Name
router.delete('/products/:Name', deleteProduct);

module.exports = router;