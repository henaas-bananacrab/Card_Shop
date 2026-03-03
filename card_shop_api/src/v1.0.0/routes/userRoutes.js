const express = require('express');

const { allAccounts, singleAccount, createAccount, updateAccountInfo, deleteAccountInfo } = require('../controller/userController');

const router = express.Router();

//GET | www.localhost:3000/api/v1.0.0/accounts
router.get('/accounts', allAccounts);

//GET | www.localhost:3000/api/v1.0.0/accounts/:Username
router.get('/accounts/:Username', singleAccount);

//POST | www.localhost:3000/api/v1.0.0/accounts
router.post('/accounts', createAccount);

//PUT | www.localhost:3000/api/v1.0.0/accounts/:Username
router.put('/accounts/:Username', updateAccountInfo);

//DELETE | www.localhost:3000/api/v1.0.0/accounts/:Username
router.delete('/accounts/:Username', deleteAccountInfo);

module.exports = router;