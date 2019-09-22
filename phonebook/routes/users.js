const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/User');


// @route   POST api/users
// @desc    Register a User
// @access   Public
router.post('/', [
    check('name','Please add name')
    .not()
    .isEmpty(),
    check('email','Please include a valid email').isEmail(),
    check('password',"Please enter a password with 6 or more characters").isLength({min:6})
], async (req,res)=> {
    //validate
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array() })
    }

    const { name, email, password } = req.body

    //check to see if there is user with the email in DB, 
    try{
        let user= await User.findOne({email:email});
        if(user){
            res.status(400).json({ msg: 'User already exist'});
        }
        //create new isntance of user
        user = new User({
            name,
            email,
            password
        });

        //encrypt password
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password,salt);
        //save pswd to user;
        await user.save();

        res.send('User Saved');

    } catch(err){
        console.log(err.message);
        res.status(500).send('Server Errors')
    }
});

module.exports = router;

