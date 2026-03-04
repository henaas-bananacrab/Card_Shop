const express = require('express');

const { allUsers, singleUser, createUser, updateUserInfo, deleteUserInfo } = require('../controller/userController');
const { authenticateToken, authorizeRoles } = require('../middleware/authMiddleware');

const router = express.Router();

//GET | www.localhost:3000/api/v1.0.0/users
router.get('/users', authenticateToken, authorizeRoles('Administrator'), allUsers);

//GET | www.localhost:3000/api/v1.0.0/users/:Username
router.get('/users/:Username', authenticateToken, singleUser);

//POST | www.localhost:3000/api/v1.0.0/users
router.post('/users', authenticateToken, authorizeRoles('Administrator'), createUser);

//PUT | www.localhost:3000/api/v1.0.0/users/:id
router.put('/users/:id', authenticateToken, updateUserInfo);

//DELETE | www.localhost:3000/api/v1.0.0/users/:id
router.delete('/users/:id', authenticateToken, deleteUserInfo);

module.exports = router;