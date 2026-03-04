const express = require('express');

const { allRarities } = require('../controller/rarityController');

const router = express.Router();

//GET | www.localhost:3000/api/v1.0.0/rarities
router.get('/rarities', allRarities);

module.exports = router;