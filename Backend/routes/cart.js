const express = require('express');
const DB_cart = require('../Query/cart-query');
const router = express.Router();

//GET all cart
//URL : /api/v1/cart
router.get('/', async (req,res)=>{
    try{
        const cartResult = await DB_cart.getAllCart();
        const result = {
            cart: cartResult,
            totalCart: cartResult.length,
        }
        res.status(200).json(result);
    }catch(error){
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

//GET detail of a particular user's cart
//URL : /api/v1/cart/user
router.get('/user', async (req,res)=>{
    try{
        const cartResult = await DB_cart.getCartByUserID(req.user.user.id);
        const result = {
            cart: cartResult,
            totalCart: cartResult.length,
        }
        res.status(200).json(result);
    }catch(error){
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});


router.post('/',async (req,res)=>{
    
});
