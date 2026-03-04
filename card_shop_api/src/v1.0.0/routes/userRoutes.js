const express = require('express');

const { allUsers, singleUser, createUser, updateUserInfo, deleteUserInfo } = require('../controller/userController');

const router = express.Router();

//GET | www.localhost:3000/api/v1.0.0/accounts
router.get('/accounts', allUsers);

//GET | www.localhost:3000/api/v1.0.0/accounts/:Username
router.get('/accounts/:Username', singleUser);

//POST | www.localhost:3000/api/v1.0.0/accounts
router.post('/accounts', createUser);

//PUT | www.localhost:3000/api/v1.0.0/accounts/:id
router.put('/accounts/:id', updateUserInfo);

//DELETE | www.localhost:3000/api/v1.0.0/accounts/:id
router.delete('/accounts/:id', deleteUserInfo);

module.exports = router;