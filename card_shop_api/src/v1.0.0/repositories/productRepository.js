const mysql = require('mysql2/promise');
const dbInfo = require('../database/db');

async function fetchCards() {
    try {
        const [result] = await dbInfo.execute('SELECT * FROM `card`');

        return result;
    } catch (error) {
        console.error('Error connecting to database:', error);
        throw error;
    }
}

async function fetchCardsByType(Type_name) {
    try {
        const [result] = await dbInfo.execute(
            'SELECT c.*, r.Rarity_name, t.Type_name FROM `card` c JOIN `rarity` r ON c.Rarity_Rarity_id = r.Rarity_id JOIN `type` t ON c.Type_Type_id = t.Type_id WHERE t.Type_name = ?',
            [Type_name]
        );

        return result;
    } catch (error) {
        console.error('Error connecting to database:', error);
        throw error;
    }
}

async function fetchCardByName(Name) {
    try {
        const [result] = await dbInfo.execute(
            'SELECT c.*, r.Rarity_name, t.Type_name FROM `card` c JOIN `rarity` r ON c.Rarity_Rarity_id = r.Rarity_id JOIN `type` t ON c.Type_Type_id = t.Type_id WHERE c.Name = ?',
            [Name]
        );

        return result;
    } catch (error) {
        console.error('Error connecting to database:', error);
        throw error;
    }
}

async function fetchStockSummary() {
    try {
        const [result] = await dbInfo.execute(
            'SELECT SUM(Quantity) AS Total_Stock, SUM(Price * Quantity) AS Total_Value FROM `card`'
        );

        return result[0];
    } catch (error) {
        console.error('Error connecting to database:', error);
        throw error;
    }
}

async function addCard(Name, Quantity, Price, Type_Type_id, Rarity_Rarity_id) {
    try {
        const [result] = await dbInfo.execute(
            'INSERT INTO `card` (Card_id, Name, Quantity, Price, Type_Type_id, Rarity_Rarity_id) VALUES (?, ?, ?, ?, ?, ?)',
            [null, Name, Quantity, Price, Type_Type_id, Rarity_Rarity_id]
        );

        return result;
    } catch (error) {
        console.error('Error connecting to database:', error);
        throw error;
    }
}

async function updateCard(Card_id, Quantity, Price) {
    try {
        const [result] = await dbInfo.execute(
            'UPDATE `card` SET Quantity = ?, Price = ? WHERE Card_id = ?',
            [Quantity, Price, Card_id]
        );

        return result;
    } catch (error) {
        console.error('Error connecting to database:', error);
        throw error;
    }
}

async function deleteCard(Card_id) {
    try {
        const [result] = await dbInfo.execute(
            'DELETE FROM `card` WHERE Card_id = ?',
            [Card_id]
        );

        return result;
    } catch (error) {
        console.error('Error connecting to database:', error);
        throw error;
    }
}


module.exports = {
    fetchCards,
    fetchCardsByType,
    fetchCardByName,
    fetchStockSummary,
    addCard,
    updateCard,
    deleteCard,
};
