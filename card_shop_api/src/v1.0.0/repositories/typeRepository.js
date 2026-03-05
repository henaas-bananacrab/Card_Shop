const mysql = require('mysql2/promise');
const dbInfo = require('../database/db');


async function fetchTypes() {
    try {
        const [result] = await dbInfo.execute('SELECT * FROM `type`');
        await dbInfo.end();

        return result;
    } catch (error) {
        console.error('Error connecting to database:', error);
        throw error;
    }
}

module.exports = {fetchTypes};