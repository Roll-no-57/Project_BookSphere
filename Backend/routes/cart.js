const express = require('express');
const DB_cart = require('../Query/cart-query');
const router = express.Router();


// GET all the cart 
// URL : api/v1/cart
router.get('/', async (req, res) => {
    try {
        const result = await DB_cart.getAllCart();
        const ans ={
            cart: result,
            cart_count: result.length
        }
        res.status(200).json(ans);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});


// GET current cart by current user 
// URL : api/v1/cart/user
router.get('/user', async (req, res) => {
    try {
        const userID = req.user.user.ID;
        const result = await DB_cart.getCartByUserID(userID);
        res.status(200).json(result[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});


// GET all picked books in the recent cart 
// URL : api/v1/cart/picked
router.get('/picked', async (req, res) => {
    try {

        const userID = req.user.user.ID;
        const cartID = await DB_cart.getCartIDByUserID(userID);

        const result = await DB_cart.getAllPicked(cartID);
        const ans ={
            picked: result,
            picked_count: result.length,
            cart_id: cartID
        }
        res.status(200).json(ans);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// GET a picked book by user
// URL : api/v1/cart/:bookID
router.get('/:bookID', async (req, res) => {
    try {
        const userID = req.user.user.ID;
        const cartID = await DB_cart.getCartIDByUserID(userID); 
        const result = await DB_cart.getPickedBookByBookID(req.params.bookID, cartID);
        const ans ={
            picked: result,
            picked_count: result.length,
            cart_id: cartID
        }
        res.status(200).json(ans);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});


// PUT the amount of a book in the cart
// URL : api/v1/cart/:pickedID
router.put('/:pickedID', async (req, res) => {
    try {
        const result = await DB_cart.updatePickedBook(req.params.pickedID, req.body.amount);
        if(result >0 ){
            res.status(200).json({message:'successfully updated the amount',rowsAffected:result});
        }
        else{
            res.status(404).json({message:'No such picked book found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});




// POST a book to a cart  in picked table
// URL : api/v1/cart
router.post('/:bookID', async (req, res) => {
    try {
        const userID = req.user.user.ID;

        const cartID = await DB_cart.getCartIDByUserID(userID);

        const result = await DB_cart.addBookToCart( req.params.bookID, cartID);
        
        res.status(201).json({message:'successfully added to cart',rowsAffected:result});
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
} );


// PUT the amount of a book in the cart



// DELETE a book from the cart
// URL : api/v1/cart/:pickedID
router.delete('/:pickedID', async (req, res) => {
    try {
        const result = await DB_cart.deletePickedBook(req.params.pickedID);
        if(result >0 ){
            res.status(200).json({message:'successfully deleted from cart',rowsAffected:result});

        }
        else{
            res.status(404).json({message:'No such picked book found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});



module.exports = router;