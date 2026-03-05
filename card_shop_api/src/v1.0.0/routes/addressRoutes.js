const express = require('express');

const { allAddresses } = require('../controller/addressController');
const { authenticateToken, authorizeRoles } = require('../middleware/authMiddleware');

const router = express.Router();

//GET | www.localhost:3000/api/v1.0.0/addresses
router.get('/addresses', authenticateToken, authorizeRoles(['administrator']), allAddresses);

module.exports = router;