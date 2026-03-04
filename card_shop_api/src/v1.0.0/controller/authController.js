const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key';
const { addCustomer, fetchSingleCustomer } = require('../database/db');

// registration controller
const registration = async (req, res) => {
    const { Username, First_name, Last_name, Email, password, Roles, Street_Address, Postal_code } = req.body;
    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await addCustomer(Username, First_name, Last_name, Email, hashedPassword, Roles, Street_Address, Postal_code);

        res.status(201).json({success: true, data: newUser});
    } catch (error) {
        res.status(500).json({success: false, message: 'Error creating customer'});
        console.log(error);
    }
}

// login controller
const login = async (req, res) => {
    const { Username, password } = req.body;
    try {
        const user = await fetchSingleCustomer(Username, password);
        console.log('password: ', password)
        console.log('user.password: ', user.password)

        // Check if user exists and password is correct
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({success: false, message: 'Invalid username or password'});
        }

        // Generate JWT token
        const token = jwt.sign({ Username: user.Username, Roles: user.Roles }, SECRET_KEY, { expiresIn: '1h'});
        res.status(200).json({success: true, token});
    } catch (error) {
        res.status(500).json({success: false, message: 'Error logging in'});
        console.log(error);
    }
}

module.exports = {
    registration,
    login
}