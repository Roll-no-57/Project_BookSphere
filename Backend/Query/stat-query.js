const database = require('../db/db');

// GET the total earning by this year
async function getYearlyEarning() {

    const sql = `
    SELECT SUM(TOTAL_PRICE) AS "TOTAL_EARNING" 
    FROM BOOK_ORDER 
    WHERE EXTRACT(YEAR FROM CREATED_AT) = EXTRACT(YEAR FROM SYSDATE)

    `
    return (await database.execute(sql, {}, database.options)).rows[0];

}
async function getYearlyOrder() {

    const sql = `
    SELECT SUM(TOTAL_ITEM) AS "TOTAL_ORDER" 
    FROM BOOK_ORDER
     WHERE EXTRACT(YEAR FROM CREATED_AT) = EXTRACT(YEAR FROM SYSDATE)

    `
    return (await database.execute(sql, {}, database.options)).rows[0];

}
async function getMonthlyEarning() {

    const sql = `
    SELECT SUM(TOTAL_PRICE) AS "TOTAL_EARNING" 
    FROM BOOK_ORDER 
    WHERE EXTRACT(MONTH FROM CREATED_AT) = EXTRACT(MONTH FROM SYSDATE)

    `
    return (await database.execute(sql, {}, database.options)).rows[0];

}
async function getMonthlyOrder() {

    const sql = `
    SELECT SUM(TOTAL_ITEM) AS "TOTAL_ORDER" 
    FROM BOOK_ORDER
     WHERE EXTRACT(MONTH FROM CREATED_AT) = EXTRACT(MONTH FROM SYSDATE)

    `
    return (await database.execute(sql, {}, database.options)).rows[0];

}


async function getAllMonthlyIncomByYear(){
    const sql =`
    SELECT EXTRACT(MONTH FROM CREATED_AT) AS MONTH,
    EXTRACT(YEAR FROM CREATED_AT) AS YEAR,
    SUM(TOTAL_PRICE) AS "TOTAL_EARNING_BY_MONTH"
        FROM BOOK_ORDER
        GROUP BY EXTRACT(MONTH FROM CREATED_AT), EXTRACT(YEAR FROM CREATED_AT)
        ORDER BY YEAR DESC, MONTH DESC
        OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY
    `
    return (await database.execute(sql, {}, database.options)).rows;
}



module.exports = {
    getYearlyEarning,
    getYearlyOrder,
    getMonthlyEarning,
    getMonthlyOrder,
    getAllMonthlyIncomByYear
}