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

async function addVoucher(name, discount, validity, cap) {
    const sql = `INSERT INTO VOUCHER (NAME,DISCOUNT,VALIDITY,CAP) VALUES (:name,:discount,:validity,:cap)`;
    const binds = {
        name: name,
        discount: discount,
        validity: validity,
        cap: cap
    }
    return (await database.execute(sql, binds, database.options)).rows;
}
async function updateVoucher(name, discount, validity, cap) {
    const sql = `UPDATE VOUCHER SET DISCOUNT = :discount, VALIDITY = :validity, CAP = :cap WHERE NAME = :name`;
    const binds = {
        name: name,
        discount: discount,
        validity: validity,
        cap: cap
    }
    return (await database.execute(sql, binds, database.options)).rows;
}

module.exports = {
    getAllVouchers,
    getVoucher,
    getVoucherIDByVoucherCode,
    addVoucher
}