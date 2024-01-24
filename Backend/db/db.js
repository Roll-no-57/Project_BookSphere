 oracledb = require('oracledb');
oracledb.autoCommit = true;



// creates connection pool for oracledb
async function startup() {
    console.log('Starting up database module');
    try {
        await oracledb.createPool({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            connectString: process.env.DB_CONNECTIONSTRING,
            poolMax: 10,
            poolMin: 4,
            poolIncrement: 1
        });
        console.log('Database pool created................');
    }
    catch (err) {
        console.log('ERROR starting up database module: ' + err.message);
    }
}

// closes connection pool for oracledb
async function shutdown() {
    console.log('shutting down database.');
    try {
        // If this hangs, you may need DISABLE_OOB=ON in a sqlnet.ora file.
        await oracledb.getPool().close(10);
        console.log('Pool closed');
    } catch(err) {
        console.log("ERROR shutting down database: "+err.message);
    }
}

// code to execute sql
async function execute(sql, binds, options){
    let connection, results;
    try {
        // Get a connection from the default pool
        connection = await oracledb.getConnection({
            user: 'C##APURBO',
            password: 'BUET2105057',
            connectString: 'localhost/orcl'
        });
        results = await connection.execute(sql, binds, options);
    } catch (err) {
        console.log("ERROR executing sql: " + err.message);
    } finally {
        if (connection) {
            try {
                // Put the connection back in the pool
                await connection.close();
            } catch (err) {
                console.log("ERROR closing connection: " + err);
            }
        }
    }
    return results;
}



// Function to execute many queries
async function executeMany(sql, binds, options){
    let connection;
    try {
        // Get a connection from the default pool
        connection = await oracledb.getConnection();
        await connection.executeMany(sql, binds, options);
    } catch (err) {
        console.log("ERROR executing sql: " + err.message);
        console.log('The provided SQL was \n' + sql)
    } finally {
        if (connection) {
            try {
                // Put the connection back in the pool
                await connection.close();
            } catch (err) {
                console.log("ERROR closing connection: " + err);
            }
        }
    }

    return;
}



//execute options
const options = {
    outFormat: oracledb.OUT_FORMAT_OBJECT

}

//export modules
module.exports = {
    startup,
    shutdown,
    execute,
    executeMany,
    options
}
