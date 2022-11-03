const express = require('express');
const router = express.Router();

const customerController = require('../controllers/CustomerController');

// get all 
router.get('/', customerController.getAllCustomerInformation);
// get by id 
router.get('/:id', customerController.getCustomerInformationById);

module.exports = router