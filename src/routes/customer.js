const express = require('express');
const router = express.Router();

const customerController = require('../controllers/CustomerController');

// get all 
router.get('/', customerController.getAllCustomerInformation);

module.exports = router