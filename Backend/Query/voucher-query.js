const database = require('../db/db');

async function getAllVouchers() {
    const sql = `SELECT * FROM VOUCHER`;
    const binds = {
    }
    return (await database.execute(sql, binds, database.options)).rows;
}

async function getVoucher(name) {
    const sql = `SELECT * FROM VOUCHER WHERE NAME = :name`;
    const binds = {
        name: name
    }
    return (await database.execute(sql, binds, database.options)).rows;
}


module.exports = {
    getAllVouchers,
    getVoucher,
}