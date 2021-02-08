const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
require('dotenv/config')


const app = express();


//MiddleWare//
app.use(cors())
app.use(bodyParser.json());

//import route
const flavoursRoute = require('./routes/flavours')
const crustRoute = require('./routes/crust-type')
const priceRoute = require('./routes/prices')
const orderRoute = require('./routes/orders')

//asked to use that particular route
app.use('/flavours', flavoursRoute);
app.use('/crust', crustRoute);
app.use('/price', priceRoute)
app.use('/order',orderRoute);
//by the above line we can create a specific route for
//like app.use('/user, userRoute)

//not a good way to make
app.get('/',(req, res) => {
    res.send("we are at home")
})


//connect to db
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true ,useNewUrlParser: true},()=>{
    console.log("connected to db")
})

//listening to the server 
app.listen(6060);