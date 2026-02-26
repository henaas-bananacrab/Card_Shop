const { fetchCustomers, fetchSingleCustomer, addCustomer } = require('../database/db');

async function customerMain() {
    const newCustomer = await addCustomer("Alice", "Smith", "alice.smith@email.com", null, "User", 5);
    console.log(newCustomer);
    const customers = await fetchCustomers();
    console.log(customers);
    const singleCustomer = await fetchSingleCustomer("Bob");/*' OR '1'='1*/
    console.log(singleCustomer);
}

customerMain();