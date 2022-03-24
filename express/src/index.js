const express = require('express');
const app = express();
const app2 = express();
const path = require('path');
const axios = require('axios');
const mongoose = require('mongoose')
const port = 8080

const url = 'mongodb://localhost:27018/db_it';
const config = {
    autoIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}
//Connect to mongodb
app.use((req, res, next) => {
    mongoose.connect(url, config)
    .then(() => {
        console.log('Connect to MongoDB');
        next()
    })
    .catch(err => {
        console.log('Cannot Connect to MongoDB');
        res.status(501).send('501 Cannot Connect to MongoDB')
    })
})


//CORS Proricy
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Option, Authorization')
    return next()
})

//Image
app.use(express.urlencoded({
    limit: '50mb',
    parameterLimit: 100000,
    extended: true 
  }));

app.use(express.json({
    limit: '50mb'
  }));



//calling1
app.use('/user', require('./api/user'))
app.use('/login', require('./api/signin'))
console.log("backend")
app.use('/api', require('./api/image'))



// Only handle GET and POST requests
// Receive request aand pass to handler method
// app1.get('*', handler(1)).post('*', handler(1));
// app2.get('*', handler(2)).post('*', handler(2));
 

// Start server on PORT 8080
app.listen(port, err =>{
	err ?
	console.log("Failed to listen on PORT 8080"):
	console.log("Application Server listening on PORT 8080");
});


