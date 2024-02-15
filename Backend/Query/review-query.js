const database = require('../db/db');


// function to get all reviews for a particular book    
async function getReviewsByBookID(bookID) {

    const sql = `

    SELECT RATES.* ,
    APP_USER.NAME AS USER_NAME, APP_USER.IMAGE AS USER_IMAGE
    
    FROM RATES 
    JOIN APP_USER ON RATES.USER_ID = APP_USER.ID
    WHERE RATES.BOOK_ID = :id

    `;

    const binds ={
        id: bookID
    }

    return (await database.execute(sql, binds, database.options)).rows;

}


// function to add a review for a particular book
async function addReview(bookID, review) {
    const sql = `
        INSERT INTO RATES (BOOK_ID, USER_ID, STARS, REVIEW, CREATED_AT) 
        VALUES (:bookID, :userID, :stars, :review, SYSDATE)
        RETURNING ID INTO :insertedId
    `;

    const binds = {
        bookID: bookID,
        userID: review.userID,
        stars: review.stars,
        review: review.review,
        insertedId: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT }
    };

    const result = await database.execute(sql, binds, database.options);
    const insertedId = result.outBinds.insertedId[0];

    return insertedId;
}



module.exports = {
    getReviewsByBookID,
    addReview,
}