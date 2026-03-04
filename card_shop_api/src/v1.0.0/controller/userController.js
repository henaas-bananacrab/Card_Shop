const bcyrpt = require('bcrypt');

const { fetchCustomers, fetchSingleCustomer, addCustomer, updateCustomer, deleteCustomer } = require('../database/db');



const allUsers = async (req, res) => {
    try {
        const customers = await fetchCustomers();

        res.status(200).json({success: true, data: customers});
    } catch (error) {
        res.status(500).json({success: false, message: 'Error fetching customers'});
    }
}

const singleUser = async (req, res) => {
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

const createUser = async (req, res) => {
    try {
        const { Username, First_name, Last_name, Email, password, Roles, Street_Address, Postal_code } = req.body;
        console.log("REQ BODY: ", req.body);

        const hashedPassword = await bcyrpt.hash(password, 10);
        console.log('hashedPassword:', hashedPassword);

        const newCustomer = await addCustomer(Username, First_name, Last_name, Email, hashedPassword, Roles, Street_Address, Postal_code);

        res.status(201).json({success: true, data: newCustomer});
    } catch (error) {
        res.status(500).json({success: false, message: 'Error creating customer'});
        console.log(error);
    }
}

const updateUserInfo = async (req, res) => {
    try {
        const Customer_id = parseInt(req.params.id);
        const { Username, First_name, Last_name, Email, password, Roles, Address_Address_id } = await req.body;

        const hashedPassword = await bcyrpt.hash(password, 10);
        console.log('hashedPassword:', hashedPassword);
        
        const updatedCustomer = await updateCustomer(Customer_id, Username, First_name, Last_name, Email, hashedPassword, Roles, Address_Address_id);

        if (updatedCustomer.affectedRows === 0) {
            res.status(404).json({success: false, message: 'Customer not found'});
        } else {
            res.status(200).json({success: true, data: updatedCustomer});
        }
    } catch (error) {
        res.status(500).json({success: false, message: 'Error updating customer'});
    }
}

const deleteUserInfo = async (req, res) => {
    try {
        const Customer_id = parseInt(req.params.id);
        const deletedCustomer = await deleteCustomer(Customer_id);

        res.json({ message: `Customer deleted successfully ${Customer_id}`, data: deletedCustomer });

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
    allUsers,
    singleUser,
    createUser,
    updateUserInfo,
    deleteUserInfo
}