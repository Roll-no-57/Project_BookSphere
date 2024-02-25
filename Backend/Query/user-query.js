const database = require('../db/db');

// Get all users
const getAllUsers = async () => {

    const sql = `
            SELECT * FROM APP_USER 
        `;

    binds = {};

    return (await database.execute(sql, binds, database.options)).rows;
}


// Get user by ID
const getUserByID = async (id) => {

    const sql = `
        SELECT * FROM APP_USER WHERE ID = :id 
    `;
    const binds = {
        id: id
    }

    return (await database.execute(sql, binds, database.options)).rows;
}

// get user by email ID 
const getUserByEmail = async (email) =>{
    const sql = `
        SELECT * FROM APP_USER WHERE EMAIL = :email
    `;
    const binds = {
        email: email
    }
    return (await database.execute(sql, binds, database.options)).rows;
}

// Add a new user
const addUser = async (user) => {

    const sql = `

            INSERT INTO APP_USER (NAME, PASSWORD, EMAIL,IMAGE)
            VALUES (:name, :password, :email,'/images/profile2.jpg')
            RETURNING ID INTO :insertedId
            
        `;

    const binds = {
        name: user.name,
        password: user.password,
        email: user.email,
        insertedId: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT }

    }

    return (await database.execute(sql, binds, database.options)).outBinds.insertedId[0];
}

// update a user
const updateUser = async (userID, user) => {
    const sql = `
    UPDATE APP_USER SET NAME = :name, PASSWORD = :password, EMAIL = :email, ADDRESS = :address, PHONE = :phone, DOB = TO_DATE(:dob, 'DD-MM-YYYY'), IMAGE = :image WHERE ID = :id
    `;
    const binds = {
        name: user.name,
        password: user.password,
        email: user.email,
        address: user.address,
        phone: user.phone,
        dob: user.dob,
        image: user.image,
        id: userID
    }
    return (await database.execute(sql, binds, database.options)).rowsAffected;
}

// delete a user
const deleteUser = async (userID) => {
    const sql = `
        DELETE FROM APP_USER WHERE ID = :id
    `;
    const binds = {
        id: userID
    }
    return (await database.execute(sql, binds, database.options)).rowsAffected;
}

module.exports = {
    getAllUsers,
    getUserByID,
    addUser,
    updateUser,
    deleteUser,
    getUserByEmail,
}