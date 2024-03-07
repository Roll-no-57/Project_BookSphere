const express = require('express');
const DB_user = require('../Query/user-query');
const DB_cart = require('../Query/cart-query');  
const router = express.Router();


// POST a user registration
// URL : /api/v1/register
router.post('/' , async (req,res)=>{

    try {
        const userResult = await DB_user.addUser(req.body);
        const cart = await DB_cart.assignCartToUser(userResult);


        if(userResult!==0){
            res.status(200).json({ message: "User registerd successfully",user_id : userResult, cart_id : cart});
        }
        else{
            res.status(400).json({ message: "User not added"});
        }
    }
    catch{
        res.status(500).json({ error: 'Internal Server Error' });
    }

});


module.exports = router;