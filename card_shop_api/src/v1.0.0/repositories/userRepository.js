const mysql = require('mysql2/promise');
const dbInfo = require('../database/db');

async function fetchCustomers() {
    try {
        const [result] = await dbInfo.execute('SELECT * FROM `customer`');

        return result;
    } catch (error) {
        console.error('Error connecting to database:', error);
        throw error;
    }
}

async function fetchSingleCustomer(Username) {
    try {
        const [result] = await dbInfo.execute('SELECT * FROM `customer` WHERE Username = ?', [Username]);

        if (!result[0]) {
            return null;
        }

        const user = result[0];

        const [addressResult] = await dbInfo.execute(
            'SELECT a.* FROM `address` a JOIN `customer` c ON a.Address_id = c.Address_Address_id WHERE c.Username = ?',
            [Username]
        );

        if (addressResult[0]) {
            user.address = addressResult[0];
        }

        return user;
    } catch (error) {
        console.error('Error connecting to database:', error);
        throw error;
    }
}

async function addCustomer(Username, First_name, Last_name, Email, password, Roles, Street_Address, Postal_code) {
    try {
        const [addressResult] = await dbInfo.execute(
            'INSERT INTO `address` (Address_id, Street_Address, Postal_code) VALUES (?, ?, ?)',
            [null, Street_Address, Postal_code]
        );

        const addressId = addressResult.insertId;

        const [result] = await dbInfo.execute(
            'INSERT INTO `customer` (Username, First_name, Last_name, Email, password, Roles, Address_Address_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [Username, First_name, Last_name, Email, password, Roles, addressId]
        );

        return result;
    } catch (error) {
        console.error('Error connecting to database:', error);
        throw error;
    }
}

async function updateCustomer(Customer_id, Username, First_name, Last_name, Email, password, Roles, Address_Address_id) {
    try {
        const [result] = await dbInfo.execute(
            'UPDATE `customer` SET Username = ?, First_name = ?, Last_name = ?, Email = ?, password = ?, Roles = ?, Address_Address_id = ? WHERE Customer_id = ?',
            [Username, First_name, Last_name, Email, password, Roles, Address_Address_id, Customer_id]
        );

        return result;
    } catch (error) {
        console.error('Error connecting to database:', error);
        throw error;
    }
}

async function deleteCustomer(Customer_id) {
    try {
        const [result] = await dbInfo.execute(
            'DELETE FROM `customer` WHERE Customer_id = ?',
            [Customer_id]
        );

        return result;
    } catch (error) {
        console.error('Error connecting to database:', error);
        throw error;
    }
}

module.exports = {
    fetchCustomers,
    fetchSingleCustomer,
    addCustomer,
    updateCustomer,
    deleteCustomer
}
