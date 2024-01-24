// libraries
const express = require('express');
const DB_book = require('../../Query/book-query');
// const DB_review = require('../../Query/review-query');
// const DB_wish = require('../../Query/wishlist-query');
const router = express.Router();



//Get a all book
router.get('/', async (req, res) => {
    try {
        let limits = 25;
        let offsetPage = 1;
        if (req.query.page) offsetPage = req.query.page;
        let offset = (offsetPage - 1) * limits;

        const booksResult = await DB_book.getAllBooks(offset, limits);
        const booksCountResult = await DB_book.getAllBooksCount();
        const booksCount = booksCountResult[0].CNT;

        // Sending the data as JSON in the response
        const result = {
            books: booksResult,
            totalBooks: booksCount,
            currentPage: offsetPage,
            // totalPages: Math.ceil(booksCount / limits),
        }
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Get a book by id
router.get('/:bookID', async (req, res) =>{
    // if logged in, delete token from database
    if(req.user === null){
        return res.redirect('/login');
    }

    const booksResult = await DB_book.getBookByID(req.params.bookID);
    if( booksResult.length === 0 )
        return res.redirect('/');

    // const canReview = await DB_review.hasBookOrdered(req.user.id,req.params.bookID);
    // let hasReviewd = await DB_review.hasReviewdBook(req.user.id,req.params.bookID);
    // let addedToWishList = await DB_wish.hasAdded(req.user.id,req.params.bookID);
    // let reviews = await DB_review.getAllReviewsByBook(req.params.bookID);

    const resResult = {
        book: booksResult[0],
        // canReview: canReview,
        // hasReviewd: hasReviewd,
        // addedToWishList: addedToWishList,
        // reviews: reviews
    }
    res.json(resResult);

});




module.exports = router;

