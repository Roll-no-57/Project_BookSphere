const database = require('../db/db');



//function to get all author
async function getAllAuthors(){

    const sql = `
        SELECT *
        FROM AUTHOR
    ` ;

    const binds = {};

    return (await database.execute(sql, binds, database.options)).rows;
}

//function to get author by id
async function getAuthorByID(ID){

    const sql = `SELECT * 
    FROM AUTHOR
    WHERE ID = :id
    `;

    const binds = {
        id: ID
    }

    return (await database.execute(sql,binds,database.options)).rows;

}




async function getAuthorByBookID(ID){

    const sql = `
        SELECT AUTHOR.*
        FROM BOOK JOIN AUTHOR ON BOOK.AUTHOR_ID = AUTHOR.ID
        WHERE BOOK.ID = :id
    `;

    const binds = {
        id: ID
    }

    return (await database.execute(sql,binds,database.options).rows);
}


module.exports = {
    getAllAuthors,
    getAuthorByID
}