const { fetchRarities } = require('../database/db');

const allRarities = async (req, res) => {
    try {
        const rarities = await fetchRarities();

        res.status(200).json({success: true, data: rarities});
    } catch (error) {
        res.status(500).json({success: false, message: 'Error fetching rarities'});
    }
}

module.exports = {
    allRarities
}