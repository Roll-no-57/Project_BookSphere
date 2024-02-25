const express = require('express');
const DB_wishlist = require('../Query/wishlist-query');
const router = express.Router();

// GET all books in the wishlist for a particular user
// URL : /api/wishlist/user
router.get('/user', async (req, res) => {
    try {
        console.log(req.user.user.ID);
        const userID = req.user.user.ID;
        
        const wishlistResult = await DB_wishlist.getWishlistByUserID(userID);

        const resResult = {
            wishlist: wishlistResult,
        };

        res.status(200).json(resResult);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// GET a particular book in the wishlist for a particular user
// URL : /api/wishlist/user/:bookID
router.get('/user/:bookID', async (req, res) => {
    try {
        const userID = req.user.user.ID;
        const bookID = req.params.bookID;
        const wishlistResult = await DB_wishlist.getWishlistByUserIDAndBookID(userID,bookID);

        const result = {
            wishlist: wishlistResult,
        };

        res.status(200).json(result);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// POST a book to the wishlist for a particular user
// URL : /api/wishlist/user/:bookID
router.post('/user/:bookID', async (req, res) => {
    try {
        const userID = req.user.user.ID;
        const result = await DB_wishlist.addBookToWishlist(req.params.bookID,userID);

        if(result.length === 0){
            return res.status(404).json({ error: 'No books found' });
        }
        else{
            res.status(200).json({wishlist_id:result, message: 'Book added to wishlist successfully'});
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// DELETE a book from the wishlist for a particular user
// URL : /api/wishlist/user/:bookID
router.delete('/user/:bookID', async (req, res) => {
    try {
        console.log("deleted book "+req.params.bookID)
        const userID = req.user.user.ID;
        const result = await DB_wishlist.deleteBookFromWishlist(req.params.bookID,userID);

        if(result.length === 0){
            return res.status(404).json({ error: 'No books found' });
        }
        else{
            res.status(200).json({message: 'Book deleted from wishlist successfully'});
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router;