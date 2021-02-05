const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config')


const app = express();

//MiddleWare//

//import route
const postRoute = require('./routes/posts')

//asked to use that particular route
app.use('/posts', postRoute);
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
app.listen(3000);