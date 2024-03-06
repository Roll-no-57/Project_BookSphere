
const express = require('express');
const DB_book = require('../Query/book-query');
const router = express.Router();



//GET all book
//URL : /api/v1/books/
router.get('/', async (req, res) => {
    try {
        
        const booksResult = await DB_book.getAllBooks();
        // Sending the data as JSON in the response
        const result = {
            books: booksResult,
            totalBooks: booksResult.length,
        }
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// GET all  categories of books
// URL :api/v1/books/category
router.get('/category', async (req, res) => {
    try {
        const booksResult = await DB_book.getBookCategory();
        const resResult = {
            category: booksResult,
            categoryCount: booksResult.length,
        }
        res.status(200).json(resResult);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


//GET a particular category of books
// URL : api/v1/books/category/:categoryName
router.get('/category/:categoryName',async (req,res)=>{
    try{
        const booksResult = await DB_book.getBooksByCategory(req.params.categoryName);
        const resResult = {
            books: booksResult,
            booksCount: booksResult.length,
        }

        res.status(200).json(resResult);

    }
    catch(error){
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// GET detail of a particular book
// URL : /api/v1/books/:bookID
router.get('/:bookID', async (req, res) => {

    try {
        const bookResult = await DB_book.getBookByID(req.params.bookID);
        if (bookResult.length == 0) {
            res.status(404).json({ message: "Book not found" });
        } else {
            res.status(200).json({book:bookResult});
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }


});


// GET all books of a particular author
// URL : /api/v1/books/author/:authorID
router.get('/author/:authorID', async (req, res) => {
    try {
        const booksResult = await DB_book.getBookByAuthorID(req.params.authorID);
        const resResult = {
            books: booksResult,
        }
        res.status(200).json(resResult);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// GET all books of a particular publisher
// URL : /api/v1/books/publisher/:publisherID
router.get('/publisher/:publisherID', async (req, res) => {
    try {
        const booksResult = await DB_book.getBooksByPublisherID(req.params.publisherID);
        const resResult = {
            books: booksResult,
            booksCount: booksResult.length,
        }
        res.status(200).json(resResult);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



module.exports = router;

