const database = require('../db/db');


// function to get all reviews for a particular book    
async function getReviewsByBookID(bookID) {


    // console.log("Inside getReviewsByBookID "+req.user.user.ID);
    const sql = `
    
    SELECT RATES.* ,
    APP_USER.NAME AS USER_NAME, APP_USER.IMAGE AS USER_IMAGE
    
    FROM RATES 
    JOIN APP_USER ON RATES.USER_ID = APP_USER.ID
    WHERE RATES.BOOK_ID = :id
    ORDER BY RATES.CREATED_AT DESC

    `;

    const binds = {
        id: bookID
    }

    return (await database.execute(sql, binds, database.options)).rows;

}

// function to get all reviews for a particular user
async function getReviewsByUserID(userID) {

    const sql = `

         SELECT RATES.* , BOOK.NAME AS BOOK_TITLE, BOOK.IMAGE AS BOOK_IMAGE

         FROM RATES JOIN BOOK ON RATES.BOOK_ID = BOOK.ID

         WHERE RATES.USER_ID = :id 

         ORDER BY RATES.CREATED_AT DESC
    
    `;

    const binds = {
        id: userID
    }

    return (await database.execute(sql, binds, database.options)).rows;

}

// function to get all reviews for a particular user and book
async function getReviewsByUserIDAndBookID(userID, bookID) {

    const sql = `

    SELECT RATES.* ,
    APP_USER.NAME AS USER_NAME, APP_USER.IMAGE AS USER_IMAGE
    
    FROM RATES 
    JOIN APP_USER ON RATES.USER_ID = APP_USER.ID
    WHERE RATES.BOOK_ID = :bookID AND RATES.USER_ID = :userID
    ORDER BY RATES.CREATED_AT DESC

    `;

    const binds = {
        userID: userID,
        bookID: bookID
    }

    return (await database.execute(sql, binds, database.options)).rows;

}




// function to add a review for a particular book
async function addReview(bookID, userID, review) {
    const sql = `
        INSERT INTO RATES (BOOK_ID, USER_ID, STARS, REVIEW, CREATED_AT) 
        VALUES (:bookID, :userID, :stars, :review, SYSDATE)
        RETURNING ID INTO :insertedId
    `;

    const binds = {
        bookID: bookID,
        userID: userID,
        stars: review.stars,
        review: review.review,
        insertedId: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT }
    };

    const result = await database.execute(sql, binds, database.options);
    const insertedId = result.outBinds.insertedId[0];

    return insertedId;
}


// function to update a review for a particular book
async function updateReview(bookID, userID, review) {
    const sql =`
        UPDATE RATES 
        SET STARS = :stars, REVIEW = :review, CREATED_AT = SYSDATE
        WHERE BOOK_ID = :bookID AND USER_ID = :userID

    `;

    const binds = {
        bookID: bookID,
        userID: userID,
        stars: review.stars,
        review: review.review
    };

    return (await database.execute(sql, binds, database.options)).rowsAffected;
}


module.exports = {
    getReviewsByBookID,
    addReview,
    getReviewsByUserID,
    getReviewsByUserIDAndBookID,
    getReviewsByBookID,
    updateReview
}
