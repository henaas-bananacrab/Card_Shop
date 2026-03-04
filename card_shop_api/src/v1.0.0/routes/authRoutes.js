const express = require('express');

const { registration, login } = require('../controller/authController');

const router = express.Router();

// POST | www.localhost:3000/api/v1.0.0/auth/register
router.post('/auth/register', registration);

// POST | www.localhost:3000/api/v1.0.0/auth/login
router.post('/auth/login', login);

module.exports = router;