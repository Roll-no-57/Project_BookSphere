const database = require('../db/db');



//Get all authors
const getAllAuthors = async () => {

    const sql = `
        SELECT * FROM AUTHOR 
    `;

    binds = {};

    return (await database.execute(sql, binds, database.options)).rows;
}



//Get all authors count
const getAllAuthorsCount = async () => {

    sql = `

        SELECT COUNT(*) AS CNT FROM AUTHOR 

    `;

    const binds = {};

    return (await database.execute(sql, binds, database.options)).rows;


}


// Get author by ID
const getAuthorByID = async (id) => {

    const sql = `
        SELECT * FROM AUTHOR WHERE ID = :id 
    `;
    const binds = {
        id: id
    }

    return (await database.execute(sql, binds, database.options)).rows;
}

// Add a new author
const addAuthor = async (author) => {

    const sql = `

            INSERT INTO AUTHOR (NAME, PASSWORD, IMAGE, DESCRIPTION)
            VALUES (:name, :password, :image, :description)
            RETURNING ID INTO :insertedId
            
        `;

    const binds = {
        name: author.name,
        password: author.password,
        image: author.image,
        description: author.description,
        insertedId: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT }
    };

    const result = await database.execute(sql, binds, database.options);
    const insertedId = result.outBinds.insertedId[0];

    return insertedId;

};

// update a author
const updateAuthor = async (authorID,author) => {
    const sql = `
        UPDATE AUTHOR SET NAME = :name, IMAGE = :image, DESCRIPTION = :description WHERE ID = :id
    `;
    const binds = {
        name: author.name,
        image: author.image,
        description: author.description,
        id: authorID
    }

    return (await database.execute(sql, binds, database.options)).rows;
}

// delete a author
const deleteAuthor = async (id) => {
    const sql = `
        DELETE FROM AUTHOR WHERE ID = :id
    `;
    const binds = {
        id: id
    }

    return (await database.execute(sql, binds, database.options)).rows;
}


// export the functions
module.exports = {
    getAllAuthors,
    getAllAuthorsCount,
    getAuthorByID,
    addAuthor,
    updateAuthor,
    deleteAuthor,
}