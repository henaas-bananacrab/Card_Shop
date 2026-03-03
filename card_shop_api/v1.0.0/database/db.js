const mysql = require('mysql2/promise');

// Customer functions
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

async function addCustomer(Username, First_name, Last_name, Email, password, Roles, Address_Address_id) {
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
            'INSERT INTO `customer` (Customer_id, Username, First_name, Last_name, Email, password, Roles, Address_Address_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [null, Username, First_name, Last_name, Email, password, Roles, Address_Address_id]
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
            'UPDATE `customer` SET Username = ?, First_name = ?, Last_name = ?, Email = ?, password = ?, Roles = ?, Address_Address_id = ? WHERE Customer_id = ?',
            [Username, First_name, Last_name, Email, password, Roles, Address_Address_id, Customer_id]
        );

        // Close connection
        await connecting.end();

        return result;
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}

async function deleteCustomer(Customer_id) {
    try {
        const connecting = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'jfkU_.,%¤#h734y38n(/T/JYGYTh',
            database: 'card_shop_db'
        });
        console.log('Connected to database');

        // Execute query to delete a customer
        const [result] = await connecting.execute(
            'DELETE FROM `customer` WHERE Customer_id = ?',
            [Customer_id]
        );

        // Close connection
        await connecting.end();

        return result;
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}

// Card functions
async function fetchCards() {
    try {
        const connecting = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'jfkU_.,%¤#h734y38n(/T/JYGYTh',
            database: 'card_shop_db'
        })
        console.log('Connected to database');

        // Execute query to fetch all cards
        const [result] = await connecting.execute('SELECT * FROM `card`');

        // Close connection
        await connecting.end();

        return result;
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}

async function fetchSingleCard(Name) {
    try {
        const connecting = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'jfkU_.,%¤#h734y38n(/T/JYGYTh',
            database: 'card_shop_db'
        })
        console.log('Connected to database');

        // Execute query to fetch a single card by name, including the Rarity_name and the Type_name
        const [result] = await connecting.execute(
            'SELECT c.*, r.Rarity_name, t.Type_name FROM `card` c JOIN `rarity` r ON c.Rarity_Rarity_id = r.Rarity_id JOIN `type` t ON c.Type_Type_id = t.Type_id WHERE c.Name = ?',
            [Name]
        );

        // Close connection
        await connecting.end();

        return result;
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}

async function addCard(Name, Quantity, Price, Type_Type_id, Rarity_Rarity_id) {
    try {
        const connecting = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'jfkU_.,%¤#h734y38n(/T/JYGYTh',
            database: 'card_shop_db'
        });
        console.log('Connected to database');

        // Execute query to insert a new card
        const [result] = await connecting.execute(
            'INSERT INTO `card` (Card_id, Name, Quantity, Price, Type_Type_id, Rarity_Rarity_id) VALUES (?, ?, ?, ?, ?, ?)',
            [null, Name, Quantity, Price, Type_Type_id, Rarity_Rarity_id]
        );

        // Close Connection
        await connecting.end();

        return result;
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}

async function updateCard(Card_id, Quantity, Price) {
    try {
        const connecting = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'jfkU_.,%¤#h734y38n(/T/JYGYTh',
            database: 'card_shop_db'
        });
        console.log('Connected to database');

        // Execute query to update an existing card
        const [result] = await connecting.execute(
            'UPDATE `card` SET Quantity = ?, Price = ? WHERE Card_id = ?',
            [Quantity, Price, Card_id]
        );

        // Close connection
        await connecting.end();

        return result;
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}

async function deleteCard(Card_id) {
    try {
        const connecting = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'jfkU_.,%¤#h734y38n(/T/JYGYTh',
            database: 'card_shop_db'
        });
        console.log('Connected to database');

        // Execute query to delete a card
        const [result] = await connecting.execute(
            'DELETE FROM `card` WHERE Card_id = ?',
            [Card_id]
        );
        
        // Close connection
        await connecting.end();

        return result;
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}

// Address
async function fetchAddresses() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'jfkU_.,%¤#h734y38n(/T/JYGYTh',
            database: 'card_shop_db'
        });
        console.log('Connected to database');

        // Execute query to fetch all addresses
        const [result] = await connection.execute('SELECT * FROM `address`');

        // Close connection
        await connection.end();

        return result;
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}

async function addAddress(Street_Address, Postal_code) {
    try {
        const connecting = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'jfkU_.,%¤#h734y38n(/T/JYGYTh',
            database: 'card_shop_db'
        });
        console.log('Connected to database');
        
        // Execute query to insert a new address
        const [result] = await connecting.execute(
            'INSERT INTO `address` (Address_id, Street_Address, Postal_code) VALUES (?, ?, ?)',
            [null, Street_Address, Postal_code]
        );

        // Close connection
        await connecting.end();

        return result;
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}
module.exports = {
    fetchCustomers,
    fetchSingleCustomer,
    addCustomer,
    updateCustomer,
    deleteCustomer,
    fetchCards,
    fetchSingleCard,
    addCard,
    updateCard,
    deleteCard,
    fetchAddresses,
    addAddress
}