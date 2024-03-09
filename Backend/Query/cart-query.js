const database = require('../db/db');

async function assignCartToUser(userID) {
    try {

        const sql = `INSERT INTO CART (user_id) VALUES(:userID)`;
        const binds = { userID };
        await database.execute(sql, binds, database.options);

        const sql2 = `SELECT ID FROM CART WHERE USER_ID = :userID`;
        const binds2 = { userID };
        const result2 = await database.execute(sql2, binds2, database.options);


        if (result2.rows.length > 0) {
            const cartID = result2.rows[0].ID;
            const sql3 = `UPDATE APP_USER SET CART_ID = :cartID WHERE ID = :userID`;
            const binds3 = { cartID, userID };
            await database.execute(sql3, binds3, database.options);
            return cartID;
        } else {
            // No cart found for the user
            return null;
        }
    } catch (error) {
        console.error(error);
        return 0;
    }
}

async function getAllCart() {
    try {
        const sql = `SELECT * FROM CART`;
        const result = await database.execute(sql, {}, database.options);
        return result.rows;
    } catch (error) {
        console.error(error);
        return 0;
    }
}


async function getCartByUserID(userID) {
    try {
        const sql = `
            SELECT * FROM CART WHERE USER_ID = :userID
        `;
        const binds = { userID };
        const result = await database.execute(sql, binds, database.options);
        return result.rows;
    }
    catch (error) {
        console.error(error);
        return 0;
    }
}

async function addBookToCart(bookID, cartID) {
    try {
        const sql = `
            INSERT INTO PICKED (BOOK_ID , CART_ID ,CREATED_AT) 
            VALUES(:bookID , :cartID , SYSDATE)

        `;
        const binds = { bookID, cartID };
        const result = await database.execute(sql, binds, database.options);
        return result.rowsAffected;
    }
    catch (error) {
        console.error(error);
        return 0;
    }
}


async function getCartIDByUserID(userID) {
    try {
        const sql = `
            SELECT CART_ID FROM APP_USER WHERE ID = :userID
        `;
        const binds = { userID };
        const result = await database.execute(sql, binds, database.options);
        return result.rows[0].CART_ID;
    }
    catch (error) {
        console.error(error);
        return 0;
    }
}


async function getAllPicked(cartID) {
    try {

        const sql = `

            SELECT BOOK.*, PICKED.CREATED_AT, PICKED.CART_ID, PICKED.AMOUNT, PICKED.ID AS PICKED_ID, AUTHOR.NAME AS AUTHOR_NAME
            FROM PICKED JOIN BOOK ON PICKED.BOOK_ID = BOOK.ID
            JOIN AUTHOR ON BOOK.AUTHOR_ID = AUTHOR.ID
            WHERE CART_ID = :cartID
            order by PICKED.CREATED_AT DESC

            `;

        const binds = { cartID };
        const result = await database.execute(sql, binds, database.options);
        return result.rows;
    }
    catch (error) {
        console.error(error);
        return 0;
    }
}

// remove from a picked book from the cart
async function deletePickedBook(pickedID) {
    try {
        const sql = `DELETE FROM PICKED WHERE ID = :pickedID`;
        const binds = { pickedID };
        const result = await database.execute(sql, binds, database.options);
        return result.rowsAffected;
    }
    catch (error) {
        console.error(error);
        return 0;
    }
}

async function updatePickedBook(pickedID, amount) {
    try {
        const sql = `UPDATE PICKED SET AMOUNT = :amount WHERE ID = :pickedID`;
        const binds = { pickedID, amount };
        const result = await database.execute(sql, binds, database.options);
        return result.rowsAffected;
    }
    catch (error) {
        console.error(error);
        return 0;
    }
}


async function getPickedBookByBookID(bookID, cartID) {
    try {
        const sql = ` 
            SELECT * FROM PICKED WHERE BOOK_ID = :bookID AND CART_ID = :cartID
        `
        const binds = { bookID, cartID };
        const result = await database.execute(sql, binds, database.options);
        return result.rows;
    }
    catch (error) {
        console.error(error);
        return 0;
    }
}


module.exports = {
    assignCartToUser,
    getAllCart,
    getCartByUserID,
    addBookToCart,
    getCartIDByUserID,
    getAllPicked,
    deletePickedBook,
    updatePickedBook,
    getPickedBookByBookID,

};
