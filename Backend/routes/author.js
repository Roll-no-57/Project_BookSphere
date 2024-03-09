const express = require('express');
const DB_author = require('../Query/author-query');
const { route } = require('./review');
const router = express.Router();


// GET all authors
// URL : /api/authors
router.get('/', async (req, res) => {

    try {
        console.log(req.url);
        console.log("Inside the author router:  ")
        const authorsResult = await DB_author.getAllAuthors();
        const authorsCountResult = await DB_author.getAllAuthorsCount();
        console.log("error here:");
        const authorsCount = authorsCountResult[0].CNT;

        // Sending the data as JSON in the response
        const result = {

            authors: authorsResult,
            totalAuthors: authorsCount,

        }

        res.status(200).json(result);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// get searched authors
// URL : /api/authors/search/:search
router.get('/search/:search', async (req, res) => {
    try {
        const authorsResult = await DB_author.getSearchAuthors(req.params.search);
        const resResult = {
            authors: authorsResult,
            authorsCount: authorsResult.length
        }
        res.status(200).json(resResult);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET a particular author
// URL : /api/authors/:authorID
router.get('/:authorID', async (req, res) => {
    try {
        const authorsResult = await DB_author.getAuthorByID(req.params.authorID);
        const resResult = {
            author: authorsResult[0],
        }
        res.status(200).json(resResult);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



// POST a new author
// URL : /api/authors
router.post('/', async (req, res) => {
    try {
        const result = await DB_author.addAuthor(req.body);
        res.status(200).json({message:"author added successfully",author_id:result});
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



// PUT(UPDATE) a particular author
// URL : /api/authors/:authorID
router.put('/:authorID', async (req, res) => {
    try {
        const result = await DB_author.updateAuthor(req.params.authorID, req.body);
        res.status(200).json({ message: "Author updated successfully" }); // Added closing curly brace and quotation mark

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});




// DELETE a particular author
// URL : /api/authors/:authorID
router.delete('/:authorID', async (req, res) => {
    try {
        const result = await DB_author.deleteAuthor(req.params.authorID);
        res.status(200).json({message: "Author deleted successfully"});
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



module.exports = router;