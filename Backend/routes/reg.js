const express = require('express');
const DB_user = require('../Query/user-query');
const router = express.Router();


// POST a user registration
// URL : /api/v1/register
router.post('/' , async (req,res)=>{

    try {
        // You must check wheather the email is already registered or not
        // You must check wheather it is a valid email or not 
        console.log("request for reginstration");
        console.log(req.body);

        const userResult = await DB_user.addUser(req.body);
        if(userResult!==0){
            res.status(200).json({ message: "User registerd successfully",user_id : userResult });
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