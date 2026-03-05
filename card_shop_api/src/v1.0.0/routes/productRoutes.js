const express = require('express');

const { allProducts, productsByType, singleProduct, stockSummary, createProduct, updateProduct, deleteProduct, searchProducts } = require('../controller/productController');
const { authenticateToken, authorizeRoles } = require('../middleware/authMiddleware');

const router = express.Router();

//GET | www.localhost:3000/api/v1.0.0/products/search?name=cardName&minPrice=10&maxPrice=100
router.get('/products/search', searchProducts);

//GET | www.localhost:3000/api/v1.0.0/products
router.get('/products', allProducts);

// move stock route before any wildcard segments so it isn’t captured as a name/type
//GET | www.localhost:3000/api/v1.0.0/products/stock
router.get('/products/stock', authenticateToken, authorizeRoles(['administrator']), stockSummary);

//GET | www.localhost:3000/api/v1.0.0/products/type/:Type_name
router.get('/products/type/:Type_name', productsByType);

//GET | www.localhost:3000/api/v1.0.0/products/:Name   (exact card lookup by name)
router.get('/products/:Name', singleProduct);

//POST | www.localhost:3000/api/v1.0.0/products
router.post('/products', authenticateToken, authorizeRoles(['administrator']), createProduct);

//PUT | www.localhost:3000/api/v1.0.0/products/:Card_id  (use numeric id)
router.put('/products/:Card_id', authenticateToken, authorizeRoles(['administrator']), updateProduct);

//DELETE | www.localhost:3000/api/v1.0.0/products/:Card_id
router.delete('/products/:Card_id', authenticateToken, authorizeRoles(['administrator']), deleteProduct);

module.exports = router;