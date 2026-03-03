const { fetchAddresses, addAddress } = require('../database/db');

async function addressMain() {
    const newAddress = await addAddress("123 Main St", "12345");
    console.log(newAddress);
    const addresses = await fetchAddresses();
    console.log(addresses);
}