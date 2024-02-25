const express = require('express');
const DB_review = require('../Query/review-query');
const router = express.Router();


// GET all reviews for a particular user
// URL : /api/reviews/user
router.get('/user', async (req, res) => {
    try {
        console.log("requested user is :" +req.user.user.ID);
        const userID = req.user.user.ID;
        
        const reviewsResult = await DB_review.getReviewsByUserID(userID);

        if (reviewsResult.length === 0) {
            return res.status(404).json({ error: 'No reviews found' ,reviews:reviewsResult});
        }

        const resResult = {
            reviews: reviewsResult,
        };

        res.status(200).json(resResult);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET review of a particular  book for a particular user
// URL : /api/reviews/user/:bookID
router.get('/user/:bookID', async (req, res) => {
    try {
        console.log("requested person is :" +req.user.user.ID);
        const userID = req.user.user.ID;
        const bookID = req.params.bookID;
        const reviewsResult = await DB_review.getReviewsByUserIDAndBookID(userID,bookID);

        const result = {
            reviews: reviewsResult,
        };

        res.status(200).json(result);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT(UPDATE) a review for a particular book
// URL : /api/reviews/user/:bookID               
router.put('/user/:bookID', async (req, res) => {
    try {
        const userID = req.user.user.ID;
        const result = await DB_review.updateReview(req.params.bookID,userID, req.body);

        if(result.length === 0){
            return res.status(404).json({ error: 'No reviews found' });
        }
        else{
            res.status(200).json({message: 'Review updated successfully'});
        }
        
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET reviews for a particular book
// URL : /api/reviews/:bookID
router.get('/:bookID', async (req, res) => {
    try {
        console.log("requested person is :" +req.user.user.ID);
        const reviewsResult = await DB_review.getReviewsByBookID(req.params.bookID);

        const resResult = {
            reviews: reviewsResult,
        };

        res.status(200).json(resResult);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});




// POST a review for a particular book
// URL : /api/reviews/:bookID   
router.post('/:bookID', async (req, res) => {
    try {
        const userID = req.user.user.ID;
        const result = await DB_review.addReview(req.params.bookID,userID, req.body);
        res.status(200).json(result);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// PUT(UPDATE) a review for a particular book
// URL : /api/reviews/:bookID               
router.put('/:bookID', async (req, res) => {
    try {
        const userID = req.user.user.ID;
        const result = await DB_review.updateReview(req.params.bookID,userID, req.body);

        if(result.length === 0){
            return res.status(404).json({ error: 'No reviews found' });
        }
        else{
            res.status(200).json({message: 'Review updated successfully'});
        }
        
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});




// DELETE a review for a particular book
// URL : /api/reviews/:bookID               







module.exports = router;
