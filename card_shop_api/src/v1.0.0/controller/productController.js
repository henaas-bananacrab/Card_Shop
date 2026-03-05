const { fetchCards, fetchCardsByType, fetchCardByName, fetchStockSummary, addCard, updateCard, deleteCard, searchCards } = require('../repositories/productRepository');

const allProducts = async (req, res) => {
    try {
        const cards = await fetchCards();

        res.status(200).json({success: true, data: cards});
    } catch (error) {
        res.status(500).json({success: false, message: 'Error fetching cards'});
        console.log(error);
    }
}

const productsByType = async (req, res) => {
    try {
        const { Type_name } = await req.params;
        const cards = await fetchCardsByType(Type_name);

        if (cards.length === 0) {
            res.status(404).json({success: false, message: 'Cards not found'});
        } else {
            res.status(200).json({success: true, data: cards});
        }
    } catch (error) {
        res.status(500).json({success: false, message: 'Error fetching cards'});
        console.log(error);
    }
}


const singleProduct = async (req, res) => {
    try {
        const { Name } = await req.params;
        const card = await fetchCardByName(Name);

        if (card.length === 0) {
            res.status(404).json({success: false, message: 'Card not found'});
        } else {
            res.status(200).json({success: true, data: card});
        }
    } catch (error) {
        res.status(500).json({success: false, message: 'Error fetching card'});
        console.log(error);
    }
}

const stockSummary = async (req, res) => {
    try {
        const summary = await fetchStockSummary();

        res.status(200).json({success: true, data: summary});
    } catch (error) {
        res.status(500).json({success: false, message: 'Error fetching stock summary'});
        console.log(error);
    }
}

const createProduct = async (req, res) => {
    try {
        const { Name, Quantity, Price, Type_Type_id, Rarity_Rarity_id } = await req.body;
        const newCard = await addCard(Name, Quantity, Price, Type_Type_id, Rarity_Rarity_id);

        res.status(201).json({success: true, data: newCard});
    } catch (error) {
        res.status(500).json({success: false, message: 'Error creating card'});
        console.log(error);
    }
}

const updateProduct = async (req, res) => {
    try {
        const { Card_id } = await req.params;
        const { Quantity, Price } = await req.body;
        const updatedCard = await updateCard(Card_id, Quantity, Price);

        if (updatedCard.affectedRows === 0) {
            res.status(404).json({success: false, message: 'Card not found'});
        } else {
            res.status(200).json({success: true, data: updatedCard});
        }
    } catch (error) {
        res.status(500).json({success: false, message: 'Error updating card'});
        console.log(error);
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { Card_id } = await req.params;
        const deletedCard = await deleteCard(Card_id);

        if (deletedCard.affectedRows === 0) {
            res.status(404).json({success: false, message: 'Card not found'});
        } else {
            res.status(200).json({success: true, data: deletedCard});
        }
    } catch (error) {
        res.status(500).json({success: false, message: 'Error deleting card'});
        console.log(error);
    }
}

const searchProducts = async (req, res) => {
    try {
        // search parameters come in via query string; support either 'name' or 'Name' for compatibility
        const { name, Name, minPrice, maxPrice } = req.query;
        const searchTerm = name || Name;
        const data = await searchCards(searchTerm, minPrice, maxPrice);

        if (!data || data.length === 0) {
            return res.status(404).json({success: false, message: "No cards found matching those criteria."});
        }

        res.status(200).json({success: true, data});
    } catch (err) {
        console.error("Controller Error:", err);
        res.status(500).json({success: false, error: "Internal Server Error"});
    }
};

module.exports = {
    allProducts,
    productsByType,
    singleProduct,
    stockSummary,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProducts
}