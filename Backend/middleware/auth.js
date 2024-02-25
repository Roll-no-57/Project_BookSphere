const jwt = require('jsonwebtoken')

const isAuthorized = (req, res, next) => {
    const header = req.headers.authorization

    const bearer = header.split(' ');
    const token = bearer[1];
    req.token = token;

    if (token) {
        jwt.verify(token, process.env.APP_SECRET, (err, user) => {
            if (err) {
                res.send({ message: "Token is invalid"})
            }
            else {
                req.user = user
                console.log(req.user);
                console.log("valid user");
                // return res.sendStatus(200).send({ message: "Token is valid"});
                next();
            }
        });

    } else {
         res.send({ message: "Token is null" });
        // next();
    }
}

module.exports = isAuthorized;
