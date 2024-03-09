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


async function getAllMonthlyIncomByYear() {
    const sql = `
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


async function getBestSellerBook() {
    const sql = `

        select 
            p.BOOK_ID as ID, B.name AS NAME ,B.price, B.image,B.STAR,B.REVIEW_COUNT,B.STOCK,
            A.name AS AUTHOR_NAME, SUM(AMOUNT) AS SOLD
        from PICKED p
        JOIN BOOK B on p.BOOK_ID = B.ID
        JOIN AUTHOR A on B.AUTHOR_ID = A.ID
        where months_between(sysdate, p.CREATED_AT) <= 1
        group by A.name, B.name, B.price, B.image, p.BOOK_ID,b.STAR,B.REVIEW_COUNT,B.STOCK
        order by SUM(AMOUNT) desc
        fetch first 10 rows only
        `;
    const binds = {}


    return (await database.execute(sql, binds, database.options)).rows;
}

async function getBestSellerAuthor() {
    const sql = `
    select a.id as id, a.name as name,a.image as image, SUM(p.AMOUNT) AS BOOKS_SOLD
        from picked p
        JOIN CART C2 on C2.ID = p.CART_ID
        JOIN BOOK_ORDER ON C2.ID = BOOK_ORDER.CART_ID
        join BOOK b on (p.BOOK_ID = b.ID)
        join author a on (b.AUTHOR_ID = a.ID)
        where months_between(sysdate, p.CREATED_AT) <= 1
        group by a.ID, a.NAME, a.IMAGE
        order by SUM(p.AMOUNT) desc
        fetch first 10 rows only
    `;
    const binds = {}
    return (await database.execute(sql, binds, database.options)).rows;
}



async function getMostReviewedBooksByMonth(){
    const sql=`
    select count(*) AS REVIEW_COUNT, 
    b.ID AS ID,b.NAME AS NAME,b.IMAGE,b.PRICE,b.STAR,b.STOCK,
    a.id as author_id, a.name as author_name
    from RATES
    JOIN BOOK B on RATES.BOOK_ID = B.ID
    JOIN AUTHOR A on B.AUTHOR_ID = A.ID
    where months_between(sysdate, CREATED_AT) <= 1
    group by  a.id, b.NAME, b.IMAGE, b.PRICE, b.ID,b.STAR,B.REVIEW_COUNT, a.name,b.STOCK
    order by count(*) desc
    FETCH FIRST 10 ROWS ONLY
    `;
    const binds = {}
    return (await database.execute(sql, binds, database.options)).rows;
}






module.exports = {
    getYearlyEarning,
    getYearlyOrder,
    getMonthlyEarning,
    getMonthlyOrder,
    getAllMonthlyIncomByYear,
    getBestSellerBook,
    getBestSellerAuthor,
    getMostReviewedBooksByMonth
}