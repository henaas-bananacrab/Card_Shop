const mysql = require('mysql2/promise');


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
        const [result] = await connection.execute('SELECT * FROM `customer`');

        // Close connection
        await connection.end();

        return result;
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}

async function fetchSingleCustomer(First_name) {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'jfkU_.,%¤#h734y38n(/T/JYGYTh',
            database: 'card_shop_db'
        });
        console.log('Connected to database');

        // Execute query to fetch a single customer by first name
        const [result] = await connection.execute('SELECT * FROM `customer` WHERE First_name = ?', [First_name]);

        // Close connection
        await connection.end();

        return result;
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}

async function addCustomer(First_name, Last_name, Email, password, Roles, Address_Address_id) {
    try {
        const connecting = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'jfkU_.,%¤#h734y38n(/T/JYGYTh',
            database: 'card_shop_db'
        });
        console.log('Connected to database');
        
        // Execute query to insert a new customer
        const [result] = await connecting.execute(
            'INSERT INTO `customer` (Customer_id, First_name, Last_name, Email, password, Roles, Address_Address_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [null, First_name, Last_name, Email, password, Roles, Address_Address_id]
        );

        // Close connection
        await connecting.end();

        return result;
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}

async function updateCustomer(Customer_id, First_name, Last_name, Email, password, Roles, Address_Address_id) {
    try {
        const connecting = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'jfkU_.,%¤#h734y38n(/T/JYGYTh',
            database: 'card_shop_db'
        });
        console.log('Connected to database');

        // Execute query to update an existing customer
        const [result] = await connecting.execute(
            'UPDATE `customer` SET First_name = ?, Last_name = ?, Email = ?, password = ?, Roles = ?, Address_Address_id = ? WHERE Customer_id = ?',
            [First_name, Last_name, Email, password, Roles, Address_Address_id, Customer_id]
        );

        // Close connection
        await connecting.end();

        return result;
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}
module.exports = {fetchCustomers, fetchSingleCustomer, addCustomer, updateCustomer};