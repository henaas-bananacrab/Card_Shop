const { fetchAddresses } = require('../database/db');

async function addressMain() {
    const addresses = await fetchAddresses();
    console.log(addresses);
}