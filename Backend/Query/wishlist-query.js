const database = require('../db/db');


// function to get all wishlist for a particular user
async function getWishlistByUserID(userID) {
    const sql = `
        SELECT BOOK.NAME as book_name,AUTHOR.NAME as author_name,BOOK.PRICE as book_price,book.image as book_image ,book.id as book_id
        FROM wish_list JOIN BOOK ON wish_list.book_id = book.id JOIN AUTHOR ON book.author_id = author.id
        WHERE user_id = :userID
    `;
    const binds = {
        userID: userID
    }
    return (await database.execute(sql, binds, database.options)).rows;
}



async function getWishlistByUserIDAndBookID(userID, bookID) {
    const sql = `
        SELECT *
        FROM wish_list
        WHERE user_id = :userID AND book_id = :bookID
    `;
    const binds = {
        userID: userID,
        bookID: bookID
    }
    return (await database.execute(sql, binds, database.options)).rows;
}


async function addBookToWishlist(bookID, userID) {
    const sql = `
        INSERT INTO wish_list (book_id, user_id)
        VALUES (:bookID, :userID)
    `;
    const binds = {
        bookID: bookID,
        userID: userID,
       
    }
    const result = await database.execute(sql, binds, database.options);
    return result.rowsAffected;
}


// function to remove a book from the wishlist for a particular user

async function deleteBookFromWishlist(bookID, userID) {
    const sql = `
        DELETE FROM wish_list
        WHERE book_id = :bookID AND user_id = :userID
    `;
    const binds = {
        bookID: bookID,
        userID: userID
    }
    return (await database.execute(sql, binds, database.options)).rowsAffected;
}



module.exports = {
    getWishlistByUserID,
    getWishlistByUserIDAndBookID,
    addBookToWishlist,
    deleteBookFromWishlist,
}

