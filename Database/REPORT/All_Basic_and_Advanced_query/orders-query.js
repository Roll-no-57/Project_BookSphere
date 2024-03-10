const database = require('../db/db');


// Get all orders
async function getAllOrders() {
    const sql = `
        SELECT * FROM BOOK_ORDER 
        ORDER BY CREATED_AT DESC
    `
    const binds ={

    }

    return (await database.execute(sql, binds, database.options)).rows;
}




async function addOrder(userID,cartID,  order) {
    const sql = `
    
        BEGIN
            CREATE_ORDER(:userID, :cartID, :voucherID, :name, :address, :phone1, :phone2, :state, :payment_method);
        END;

    `;

    const binds ={
        userID: userID,
        cartID: cartID,
        voucherID: order.voucherID,
        name: order.name,
        address: order.address,
        phone1: order.phone1,
        phone2: order.phone2,
        state: order.state,
        payment_method: order.payment_method,
    }

    return  await database.execute(sql, binds, database.options);

}

async function updateOrderState(orderID, state) {
    const sql = `
        UPDATE BOOK_ORDER
        SET STATE = :state
        WHERE ID = :orderID
        
    `;

    const binds = {
        orderID: orderID,
        state: state,
    }

    return (await database.execute(sql, binds, database.options)).rowsAffected;
}

module.exports ={
    getAllOrders,
    addOrder,
    updateOrderState,
}