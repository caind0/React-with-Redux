//middleware function that has access to req and res cycle , eveytime we hit an endpoint we want to see if there is token in the header

const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
    //get the token from the header
    const token = req.header('x-auth-token');

    //check if not token
    if (!token) {
        return res.status(401).json({
            msg: "No token, authorization denied"
        });
    }

    try {
        //verify the token with jwt with jwtSecret
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({
            msg: "token is not valid"
        });

    }
}