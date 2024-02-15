const express = require('express');
const DB_review = require('../Query/review-query');
const router = express.Router();

// GET reviews for a particular book
// URL : /api/reviews/:bookID
router.get('/:bookID', async (req, res) => {
    try {
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

// GET reviews of a particular user
// URL : /api/reviews/user/:userID






// POST a review for a particular book
// URL : /api/reviews/:bookID   
router.post('/:bookID',async(req, res)=>{
    try{
        const result = await DB_review.addReview(req.params.bookID,req.body);
        res.status(200).json(result);
    }
    catch(error){
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



// DELETE a review for a particular book
// URL : /api/reviews/:bookID               







// PUT(UPDATE) a review for a particular book
// URL : /api/reviews/:bookID               

module.exports = router;
