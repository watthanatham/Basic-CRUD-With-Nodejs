const dbConn = require('../../config/db.config');


var Customer = function(customer) {
    this.cus_id = customer.cus_id;
    this.cus_firstname = customer.cus_firstname;
    this.cus_lastname = customer.cus_lastname;
    this.cus_telephonenumber = customer.cus_telephonenumber;
    this.cus_address = customer.cus_address;
    this.cus_point = customer.cus_point;
}

Customer.getAllCustomer = (result) => {
    dbConn.query('SELECT * FROM Customer', (err, res) => {
        if(err) {
            console.log('Error while fetching customer', err);
            result(null, err);
        }else {
            console.log('Customer fetched successfully')
            result(null, res);
        }
    })
}
Customer.getCustomerById = (id, result) => {
    dbConn.query('SELECT * FROM Customer WHERE cus_id = ?', id, (err, res) => {
        if(err) {
            console.log('Error while fetching', err);
            result(null,err);
        }else {
            console.log('Fetched by id successfully');
            result(null,res);
        }
    })
}
Customer.deleteCustomerData = (id, result) => {
    dbConn.query('DELETE FROM Customer WHERE cus_id = ?', [id], (err, res) => {
        if(err) {
            console.log('Error while deleting customer data');
            result(null, err)
        }else {
            console.log('Deleted customer data completed');
            result(null, res)
        }
    })
}
module.exports = Customer;