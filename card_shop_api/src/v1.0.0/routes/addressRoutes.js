const express = require('express');

const { allAddresses } = require('../controller/addressController');

const router = express.Router();

//GET | www.localhost:3000/api/v1.0.0/addresses
router.get('/addresses', allAddresses);

module.exports = router;