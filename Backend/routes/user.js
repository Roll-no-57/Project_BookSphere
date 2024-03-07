const express = require('express');
const DB_user = require('../Query/user-query');                   
const router = express.Router();


// GET all users
// URL : /api/users
router.get('/', async (req, res) => {

    try {

        const userResult  = await DB_user.getAllUsers();
        const result = {
            users: userResult,
            userCount : userResult.length
        }

        res.status(200).json(result);

    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//GET the current user 
// URL : /api/users/current
router.get('/current', async (req, res) => {
    try {
        const user = req.user.user.ID;
        const userResult = await DB_user.getUserByID(user);
        const resResult = {
            user: userResult[0],
        }
        res.status(200).json(resResult);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// GET a particular user
// URL : /api/users/:userID
router.get('/:userID', async (req, res) => {
    try {
        const userResult = await DB_user.getUserByID(req.params.userID);
        const resResult = {
            user: userResult[0],
        }
        res.status(200).json(resResult);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// POST a new user
// URL : /api/users
router.post('/', async (req, res) => {
    try {
        const result = await DB_user.addUser(req.body);
        
        res.status(200).json({message:"user added successfully",user_id:result});
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// PUT a user
// URL : /api/users/:userID
router.put('/:userID', async (req, res) => {
    try {
        const result = await DB_user.updateUser(req.params.userID,req.body);
        if(result !== 0)res.status(200).json({message:"user updated successfully"});
        else res.status(404).json({message:"user not found"});
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// DELETE a user 
// URL : /api/users/:userID
router.delete('/:userID', async (req, res) => {
    try {
        const result = await DB_user.deleteUser(req.params.userID);
        if(result!==0) res.status(200).json({message:"user deleted successfully"});
        else res.status(404).json({message:"user not found"});
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



module.exports = router;