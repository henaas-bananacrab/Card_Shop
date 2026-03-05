const { fetchCards, fetchCardsByType, fetchCardByName, fetchStockSummary, addCard, updateCard, deleteCard } = require('../repositories/productRepository');

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
        const { Type_id } = await req.params;
        const cards = await fetchCardsByType(Type_id);

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
        const { Name } = await req.params;
        const { Quantity, Price } = await req.body;
        const updatedCard = await updateCard(Name, Quantity, Price);

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
        const { Name } = await req.params;
        const deletedCard = await deleteCard(Name);

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

module.exports = {
    allProducts,
    productsByType,
    singleProduct,
    stockSummary,
    createProduct,
    updateProduct,
    deleteProduct
}