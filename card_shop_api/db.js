const mysql = require('mysql2/promise');

// Create a connection 'pool' to the MySQL database
async function fetchCustomers() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'jfkU_.,%¤#h734y38n(/T/JYGYTh',
            database: 'card_shop_db'
        });
        console.log('Connected to database');

        // Execute query to fetch all customers
        const [rows, fields] = await connection.execute('SELECT * FROM `customers`');

        // Close connection
        await connection.end();

        return rows;
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}

module.exports = fetchCustomers;