const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./app/config/mongodb.config.js');
const mongoose = require('mongoose');

const Customer = require('./app/models/customer.model.js');
const SellingDetails = require('./app/models/selling_details');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to MongoDB.");    

    Customer.remove({}, function(err) { 

       if(err){
          console.log(err);
          process.exit();
       }
       
       console.log('Customer collection removed');
       // -> initial new data
       initial();
    });

}).catch(err => {
    console.log('Could not connect to MongoDB.');
    process.exit();
});

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
 
app.use(cors(corsOptions))

require('./app/routes/customer.routes.js')(app);
require('./app/routes/selling_details.routes.js')(app);

// Create a Server
const server = app.listen(8081, function () {

  let host = server.address().address
  let port = server.address().port

  console.log("App listening at http://%s:%s", host, port)
})

function initial(){
 
    let customers = [
      {
        firstname: "Abhishek",
        lastname: "Ranjan",
        email: "rabhi@indosakura.com",
        address: "Bangalore",
        mobile_no: 9713618636,
        age: 25
      }
    ]
   
    // Init data -> save to MongoDB

    for (let i = 0; i < customers.length; i++) { 
        const customer = new Customer(customers[i]);
        customer.save();
    }

    console.log(">>> Done - Initial Data!");
}