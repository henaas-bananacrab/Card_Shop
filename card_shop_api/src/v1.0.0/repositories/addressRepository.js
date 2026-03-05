const mysql = require('mysql2/promise');
const dbInfo = require('../database/db');

async function fetchAddresses() {
    try {
        // Execute query to fetch all addresses
        const [result] = await dbInfo.execute('SELECT * FROM `address`');

        // Close connection
        await dbInfo.end();
        return result;
    } catch (error) {
        console.error('Error connecting to database:', error);
        throw error;
    }
}

module.exports = {
    fetchAddresses
};