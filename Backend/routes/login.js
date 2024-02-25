const jwt = require('jsonwebtoken');
const express = require('express');
const DB_user = require('../Query/user-query');
const router = express.Router();


// POST a user login
// URL : /api/login
router.post('/', async (req, res) => {
    try {
        const userResult = await DB_user.getUserByEmail(req.body.email);
        if (userResult.length === 0) {
            res.status(401).json({ message: 'Invalid email' ,token:null });
        }
        else {
            if (userResult[0].PASSWORD === req.body.password) {
                const token = jwt.sign({ user: userResult[0] }, process.env.APP_SECRET);
                res.status(200).json({ message: "Login successful", token: token });
            }
            else {
                res.status(401).json({ message: 'Invalid password',token: null });
            }
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error',token:null });
    }
});



module.exports = router;
