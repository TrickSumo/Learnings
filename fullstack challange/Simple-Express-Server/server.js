const express = require("express");  // importing express
const cookieParser = require("cookie-parser");   // cokkie-parser is a middleware library for reading request cookies
const bodyParser = require("body-parser"); // To read payload or request body
const data = require("./routes/data")  // route creates using express router

const app = express(); // instance of express
const port = 3003; 

// cookieParser() is middleware to parse incoming cookie data in our requests
app.use(cookieParser());  // Add cookie-parser middleware
app.use(bodyParser.json()); // to get request body. For x-www-form-urlencoded data, we can use:- app.use(bodyParser.urlencoded({ extended: false }));

// Syntax for basic get request
app.get('/', (req,res)=>{
    console.log(`${req.method} ${req.url}`, req.baseUrl);
    res.send("Hello World!!!");
})

// Route for /data path
app.use('/data', data);
// Example:- 
// Get request with middleware - http://localhost:3003/data?secret=true
// Post request with middleware - http://localhost:3003/data?secret=true and JSON body as {"newData":4567}.

// To start server on given port
app.listen(port, ()=>console.log(`Listening on port ${port}.`));