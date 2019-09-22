const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');

const {
    check,
    validationResult
} = require('express-validator/check');

const User = require('../models/User');


// @route   GET api/auth
// @desc    get logged in user
// @access  Private **bring in middleware
router.get('/', auth, async (req, res) => {
    try {
        //get everything in user except the pssword
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/users
// @desc    Auth user & get token
// @access   Public
router.post('/', [
    check('email', 'Please include an email').exists(),
    check('password', 'Password require').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }

    //take email and password out of the body
    const {
        email,
        password
    } = req.body;

    try {
        let user = await User.findOne({
            email
        });

        //if no user reject status 400 
        if (!user) {
            return res.status(400).json({
                msg: 'Invalid Credentials'
            });
        }
        //check to see if typed in password is the users password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(400).json({
                msg: 'Invalid Password'
            });
        }

        //create jwt payload with user info
        const payload = {
            user: {
                id: user.id
            }
        }
        //jwt web token set to expire in 360000 
        //
        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 360000
        }, (err, token) => {
            if (err) throw err;
            res.json({
                token
            });
        });

    } catch {
        console.log(error.message);
        res.status(500).send('Auth Server Error');
    }
});

module.exports = router;