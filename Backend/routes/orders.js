const express = require('express');
const router = express.Router();
const DB_order = require('../Query/orders-query');
const {getCartIDByUserID} = require('../Query/cart-query');
const {getVoucherIDByVoucherCode} = require('../Query/voucher-query');


// Get all orders
// URL : /api/v1/orders
router.get('/', async (req, res) => {
    try {
        const orders = await DB_order.getAllOrders();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// POST a new order 
// URL : /api/v1/orders
router.post('/', async (req, res) => {
    try {


        const userID = req.user.user.ID;
        const cartID =await getCartIDByUserID(userID);
        // const voucherID = getVoucherIDByVoucherCode(req.body.voucher_code);
        console.log("cartID");
        console.log(cartID);
        
        console.log("request body ");
        console.log(req.body);
        console.log("userID");
        console.log(userID);

        const result = await DB_order.addOrder(userID,cartID,req.body);

        if(result.length === 0){
            res.status(400).json({message: "Failed to add order"});
        }
        else{
            const ans ={
                result: result,
                message: "Order added successfully"
            }
            res.status(201).json(result);
        }
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;