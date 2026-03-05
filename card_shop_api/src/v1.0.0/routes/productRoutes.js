const express = require('express');

const { allProducts, productsByType, singleProduct, stockSummary, createProduct, updateProduct, deleteProduct, searchProducts } = require('../controller/productController');
const { authenticateToken, authorizeRoles } = require('../middleware/authMiddleware');

const router = express.Router();

//GET | www.localhost:3000/api/v1.0.0/products/search?name=cardName&minPrice=10&maxPrice=100
router.get('/products/search', searchProducts);

//GET | www.localhost:3000/api/v1.0.0/products
router.get('/products', allProducts);

//GET | www.localhost:3000/api/v1.0.0/products/stock
router.get('/products/stock', authenticateToken, authorizeRoles('Administrator'), stockSummary);

//GET | www.localhost:3000/api/v1.0.0/products/type/:Type_name
router.get('/products/type/:Type_name', productsByType);

//GET | www.localhost:3000/api/v1.0.0/products/:Name
router.get('/products/:Name', singleProduct);

//POST | www.localhost:3000/api/v1.0.0/products
router.post('/products', authenticateToken, authorizeRoles('Administrator'), createProduct);

//PUT | www.localhost:3000/api/v1.0.0/products/:Card_id
router.put('/products/:Card_id', authenticateToken, authorizeRoles('Administrator'), updateProduct);

//DELETE | www.localhost:3000/api/v1.0.0/products/:Card_id
router.delete('/products/:Card_id', authenticateToken, authorizeRoles('Administrator'), deleteProduct);

module.exports = router;