const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const cors = require('cors');

require('dotenv').config();


// Database Connection pool created
const db = require('./db/db');
db.startup();



// Routes
const BookRouter = require('./routes/Books/book');
const AuthorRouter = require('./routes/Author/author');
const AdminRouter = require('./routes/Admin/admin-books');


//Middlewares

//declare and configure the app
const app = express()




app.use(morgan('dev'))
app.use(express.json())
app.use(
  cors({
    origin: '*',
    methods: "GET,POST,PUT,DELETE, PATCH",
    credentials: true,
    maxAge: 36000,
  })
);


//Link routes to routers
app.use('/api/v1/books',BookRouter);
app.use('/api/v1/authors',AuthorRouter);
app.use('/api/v1/admin',AdminRouter);



//Setting up the connection

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Server is running on port ${port} . Link : http://localhost:${port}`));



// shutdown the server if any error occurs 
process
    .once('SIGTERM', db.shutdown)
    .once('SIGINT',  db.shutdown);
