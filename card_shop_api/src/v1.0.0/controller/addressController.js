const { fetchAddresses } = require('../repositories/addressRepository');

const allAddresses = async (req, res) => {
    try {
        const addresses = await fetchAddresses();

        res.status(200).json({success: true, data: addresses});
    } catch (error) {
        res.status(500).json({success: false, message: 'Error fetching addresses'});
        console.log(error);
    }
}

module.exports = {
    allAddresses
}