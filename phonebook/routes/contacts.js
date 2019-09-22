const express = require('express');
const router = express.Router();
const {
    check,
    validationResult
} = require('express-validator');

//use auth whenever we need to protect routes
const auth = require('../middleware/auth');


const User = require('../models/User');
const Contact = require('../models/Contact');

// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        //get users contacts and sort by the most recent one that was created
        const contacts = await Contact.find({
            user: req.user.id
        }).sort({
            date: -1
        });
        res.json(contacts);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/contacts
// @desc    Add new Contact use [] validate
// @access  Private
router.post('/', [
    auth,
    //our checks
    [
        check('name', 'Name is required').not().isEmpty()
    ]
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    //pull out data from the body
    const {
        name,
        email,
        phone,
        type
    } = req.body
    try {
        const newContact = new Contact({
            name,
            email,
            phone,
            type,
            user: req.user.id
        });
        const contact = await newContact.save();
        res.json(contact);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
});

// @route   PUT api/contacts/:id
// @desc    Update Contact
// @access  Private
router.put('/:id', (req, res) => {
    res.send('Update Contact')
});

// @route   DELETE api/contacts/:id
// @desc    Update Contact
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Delete Contact')
});

module.exports = router;