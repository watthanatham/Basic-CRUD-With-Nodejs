const CustomerModel = require('../models/Customer');

// get All Customer Information

exports.getAllCustomerInformation = (req, res) => {
    CustomerModel.getAllCustomer((err, customer) => {
        console.log('Get all Information successfully');
        if(err)
        res.send(err);
        console.log('Customer', customer);
        res.send(customer);
    })
}
exports.getCustomerInformationById = (req, res) => {
    CustomerModel.getCustomerById(req.params.id, (err, customer) => {
        console.log('Get data by id successfully');
        if(err)
        res.send(err);
        console.log('Customer', customer);
        res.send(customer);
    })
}
