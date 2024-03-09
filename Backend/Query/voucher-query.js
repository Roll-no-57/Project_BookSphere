const database = require('../db/db');

async function getAllVouchers() {
    const sql = `SELECT * FROM VOUCHER`;
    const binds = {
    }
    return (await database.execute(sql, binds, database.options)).rows;
}

async function getVoucher(name) {
    const sql = `SELECT ID,NAME,DISCOUNT,TO_CHAR(VALIDITY, 'DD-MM-YYYY') AS VALIDITY,CAP  FROM VOUCHER WHERE NAME = :name`;
    const binds = {
        name: name
    }
    return (await database.execute(sql, binds, database.options)).rows;
}


async function getVoucherIDByVoucherCode(voucher_code) {
    const sql = `SELECT ID FROM VOUCHER WHERE NAME = :voucher_code`;
    const binds = {
        voucher_code: voucher_code
    }
    return (await database.execute(sql, binds, database.options)).rows[0].ID;
}

module.exports = {
    getAllVouchers,
    getVoucher,
    getVoucherIDByVoucherCode,
}