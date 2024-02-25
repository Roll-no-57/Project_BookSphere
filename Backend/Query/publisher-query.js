database = require('../db/db');

async function getAllPublishers() {
    const sql = `
    SELECT * FROM publisher
    `;
    const binds = {
    }
    return (await database.execute(sql, binds, database.options)).rows;
}

async function getPublisherByID(ID) {
    const sql = `
    SELECT * FROM publisher WHERE id = :id
    `;
    const binds = {
        id: ID
    }
    return (await database.execute(sql, binds, database.options)).rows[0];
}



async function createPublisher(publisher) {
    const sql = `
        INSERT INTO PUBLISHER (NAME, IMAGE, FOUNDING_DATE, DESCRIPTION) 
        VALUES (:name, :image, TO_DATE(:founding_date, 'DD-MM-YYYY'), :description)
        RETURNING ID INTO :insertedId
    `;

    const binds = {
        name: publisher.name,
        image: publisher.image,
        founding_date: publisher.founding_date,
        description: publisher.description,
        insertedId: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT }
    };

    try {
        const result = await database.execute(sql, binds, database.options);
        const insertedId = result.outBinds.insertedId[0];
        return insertedId;
    } catch (error) {
        // Handle error here
        console.error("Error creating publisher:", error);
        throw error;
    }
}



async function updatePublisher(publisherID, publisher) {
    const sql = `
        UPDATE PUBLISHER SET NAME = :name, IMAGE = :image, FOUNDING_DATE = TO_DATE(:founding_date, 'DD-MM-YYYY'), DESCRIPTION = :description WHERE ID = :id
    `;
    const binds = {
        name: publisher.name,
        image: publisher.image,
        founding_date: publisher.founding_date,
        description: publisher.description,
        id: publisherID
    }
    return (await database.execute(sql, binds, database.options)).rowsAffected;
}

// delete a publisher
async function deletePublisher(publisherID) {
    const sql = `
        DELETE FROM PUBLISHER WHERE ID = :id
    `;
    const binds = {
        id: publisherID
    }
    return (await database.execute(sql, binds, database.options)).rowsAffected;
}


module.exports = {
    getAllPublishers,
    getPublisherByID,
    createPublisher,
    updatePublisher,
    deletePublisher,

}