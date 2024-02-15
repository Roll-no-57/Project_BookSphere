// Desc: This is the main file of the backend. It is responsible for starting the server and connecting to the database.

// Importing the required modules
const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const db = require('./db/db');


// Database Connection pool created to optimize the performance
db.startup();


// Routes
const BookRouter = require('./routes/Books/book');
const AuthorRouter = require('./routes/Author/author');
const AdminRouter = require('./routes/Admin/admin-books');

//declare and configure the app
const app = express() 

//Middlewares
app.use(morgan('dev'))    // this is a middleware that logs the request to the console
app.use(express.json())  // this is a middleware that parses the body of the request and converts it to json format and then attaches it to the request object
app.use(
  cors({
    origin: '*',
    methods: "GET,POST,PUT,DELETE, PATCH",
    credentials: true,
    maxAge: 36000,
  })
); // this is a middleware that allows cross origin resource sharing



//Link routes to routers
app.use('/api/v1/books',BookRouter);
app.use('/api/v1/authors',AuthorRouter);
// app.use('/api/v1/admin',AdminRouter);



//Setting up the connection
const port = process.env.PORT || 3000;  //setting up the port
app.listen(port, console.log(`Server is running on port ${port} . Link : http://localhost:${port}`));



// shutdown the server if any error occurs 
process
    .once('SIGTERM', db.shutdown)
    .once('SIGINT',  db.shutdown);
