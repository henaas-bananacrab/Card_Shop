const express = require('express');

const { allTypes } = require('../controller/typeController');

const router = express.Router();

//GET | www.localhost:3000/api/v1.0.0/types
router.get('/types', allTypes);

module.exports = router;