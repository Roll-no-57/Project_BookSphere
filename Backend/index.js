// Desc: This is the main file of the backend. It is responsible for starting the server and connecting to the database.

// Importing the required modules
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const db = require('./db/db');


// Database Connection pool created to optimize the performance
db.startup();


// Routes
const BookRouter = require('./routes/book');
const ReviewRouter = require('./routes/review');
const authorRouter = require('./routes/author');
const publisherRouter = require('./routes/publisher');
const userRouter = require('./routes/user');
const loginRouter = require('./routes/login');
const authRouter = require('./middleware/auth');
const regRouter = require('./routes/reg');
const wishlistRouter = require('./routes/wishlist');
const cartRouter = require('./routes/cart');
const voucherRouter = require('./routes/voucher');
const orderRouter = require('./routes/orders');
const statRouter = require('./routes/statistics');





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
app.use('/api/v1/login', loginRouter);
app.use('/api/v1/register', regRouter);

// only allow authenticated users to access the routes
app.use(authRouter);

app.use('/api/v1/books', BookRouter);
app.use('/api/v1/reviews', ReviewRouter);
app.use('/api/v1/authors', authorRouter);
app.use('/api/v1/publishers', publisherRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/wishlist', wishlistRouter);
app.use('/api/v1/cart' , cartRouter);
app.use('/api/v1/voucher', voucherRouter);
app.use('/api/v1/orders', orderRouter);
app.use('/api/v1/statistics', statRouter);



//Setting up the connection
const port = process.env.PORT || 3000;  //setting up the port
app.listen(port, console.log(`Server is running on port ${port} . Link : http://localhost:${port}`));



// shutdown the server if any error occurs 
process
  .once('SIGTERM', db.shutdown)
  .once('SIGINT', db.shutdown);
