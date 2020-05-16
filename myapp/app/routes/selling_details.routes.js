module.exports = function(app) {
 
    const sellingDetails = require('../controllers/sellingDetails.controller');
 
    // Create a new Customer
    app.post('/api/sellingdetails', sellingDetails.create);
 
    // Retrieve all Customer
    app.get('/api/sellingdetails', sellingDetails.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/api/sellingdetails/:sellingDetailsId', sellingDetails.findOne);
 
    // Update a Customer with Id
    app.put('/api/sellingdetails', sellingDetails.update);

    // Delete a Customer with Id
    app.delete('/api/sellingdetails/:sellingDetailsId', sellingDetails.delete);
}