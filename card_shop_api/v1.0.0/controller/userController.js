const { fetchCustomers, fetchSingleCustomer, addCustomer, updateCustomer, deleteCustomer } = require('../database/db');

async function customerMain() {
    const newCustomer = await addCustomer("Alice", "Smith", "alice.smith@email.com", null, "User", 5);
    console.log(newCustomer);
    const updatedCustomer = await updateCustomer(7, "Alice", "Smith", "alice.smith@email.com", null, "Administrator", 2);
    console.log(updatedCustomer);
    const deletedCustomer = await deleteCustomer(7);
    console.log(deletedCustomer);
    const customers = await fetchCustomers();
    console.log(customers);
    const singleCustomer = await fetchSingleCustomer("Bob");/*' OR '1'='1*/
    console.log(singleCustomer);
}

customerMain();