const { fetchTypes } = require('../database/db');

const allTypes = async (req, res) => {
    try {
        const types = await fetchTypes();

        res.status(200).json({success: true, data: types});
    } catch (error) {
        res.status(500).json({success: false, message: 'Error fetching types'});
    }
}

module.exports = {
    allTypes
}