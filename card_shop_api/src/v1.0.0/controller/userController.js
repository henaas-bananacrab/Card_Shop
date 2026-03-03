const { fetchCustomers, fetchSingleCustomer, addCustomer, updateCustomer, deleteCustomer } = require('../database/db');



const allAccounts = async (req, res) => {
    try {
        const customers = await fetchCustomers();

        res.status(200).json({success: true, data: customers});
    } catch (error) {
        res.status(500).json({success: false, message: 'Error fetching customers'});
    }
}

const singleAccount = async (req, res) => {
    try {
        const { Username } = await req.params;
        const customer = await fetchSingleCustomer(Username);

        if (customer.length === 0) {
            res.status(404).json({success: false, message: 'Customer not found'});
        } else {
            res.status(200).json({success: true, data: customer});
        }
    } catch (error) {
        res.status(500).json({success: false, message: 'Error fetching customer'});
    }
}

const createAccount = async (req, res) => {
    try {
        const { Username, First_name, Last_name, Email, password, Roles, Street_Address, Postal_code } = await req.body;
        const newCustomer = await addCustomer(Username, First_name, Last_name, Email, password, Roles, Street_Address, Postal_code);

        res.status(201).json({success: true, data: newCustomer});
    } catch (error) {
        res.status(500).json({success: false, message: 'Error creating customer'});
    }
}

const updateAccountInfo = async (req, res) => {
    try {
        const { Username } = await req.params;
        const { First_name, Last_name, Email, password, Roles, Address_Address_id } = await req.body;
        const updatedCustomer = await updateCustomer(Username, First_name, Last_name, Email, password, Roles, Address_Address_id);

        if (updatedCustomer.affectedRows === 0) {
            res.status(404).json({success: false, message: 'Customer not found'});
        } else {
            res.status(200).json({success: true, data: updatedCustomer});
        }
    } catch (error) {
        res.status(500).json({success: false, message: 'Error updating customer'});
    }
}

const deleteAccountInfo = async (req, res) => {
    try {
        const { Username } = await req.params;
        const deletedCustomer = await deleteCustomer(Username);

        if (deletedCustomer.affectedRows === 0) {
            res.status(404).json({success: false, message: 'Customer not found'});
        } else {
            res.status(200).json({success: true, data: deletedCustomer});
        }
    } catch (error) {
        res.status(500).json({success: false, message: 'Error deleting customer'});
    }
}

module.exports = {
    allAccounts,
    singleAccount,
    createAccount,
    updateAccountInfo,
    deleteAccountInfo
}