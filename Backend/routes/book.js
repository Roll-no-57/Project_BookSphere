
const express = require('express');
const DB_book = require('../Query/book-query');
const router = express.Router();



//GET all book
//URL : /api/v1/books/
router.get('/', async (req, res) => {
    try {


        const booksResult = await DB_book.getAllBooks();
        const booksCountResult = await DB_book.getAllBooksCount();
        const booksCount = booksCountResult[0].CNT;

        // Sending the data as JSON in the response
        const result = {
            books: booksResult,
            totalBooks: booksCount,
        }
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// GET detail of a particular book
// URL : /api/v1/books/:bookID
router.get('/:bookID', async (req, res) => {

    console.log("bookID that want to retrieve :" + req.params.bookID);
    const booksResult = await DB_book.getBookByID(req.params.bookID);
    const resResult = {
        book: booksResult[0],
    }
    res.json(resResult);

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




router.delete('/:bookID', async (req, res) => {
    const result = await DB_book.deleteBook(req.params.bookID);
    res.json(result);
});





module.exports = router;

