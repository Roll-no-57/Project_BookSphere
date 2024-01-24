//librairies
const express = require('express');
const DB_author = require('../../Query/author-query');
const DB_book = require('../../Query/book-query');

const router = express.Router();


//Get a all author
router.get('/', async (req, res) => {

    const authorsResult = await DB_author.getAllAuthors();
    // Sending the data as JSON in the response
    res.json({
        authorsResult
    });
});


// get a specific author
router.get('/:authorID', async (req, res) => {
    let limits = 25;
    let offsetPage = 1;
    if (req.query.page) offsetPage = req.query.page;
    let offset = (offsetPage - 1) * limits;

    const booksCount = (await DB_book.getBookByAuthorIDCount(req.params.authorID))[0].CNT;
    const authorDetails = await DB_author.getAuthorByID(req.params.authorID);
    const booksResult = await DB_book.getBookByAuthorID(req.params.authorID, offset, limits);

    // Sending the data as JSON in the response

    const result ={
        authorDetails: authorDetails[0],
        books: booksResult,
        totalBooks: booksCount,
        currentPage: offsetPage,

        // totalPages: Math.ceil(booksCount / limits),
    }

    res.json(result);
});



module.exports = router;