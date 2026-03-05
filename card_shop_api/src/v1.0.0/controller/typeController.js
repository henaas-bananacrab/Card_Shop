const { fetchTypes } = require('../repositories/typeRepository');

const allTypes = async (req, res) => {
    try {
        const types = await fetchTypes();
        res.status(200).json({success: true, data: types});
    } catch (error) {
        res.status(500).json({success: false, message: 'Error fetching types'});
        console.log(error);
    }
}

module.exports = {
    allTypes
}