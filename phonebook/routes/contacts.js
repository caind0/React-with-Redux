const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private
router.get('/',(req,res)=> {
    res.send('Get all contacts')
});

// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private
router.post('/',(req,res)=> {
    res.send('Add contact')
});

// @route   PUT api/contacts/:id
// @desc    Update Contact
// @access  Private
router.put('/:id',(req,res)=> {
    res.send('Update Contact')
});

// @route   DELETE api/contacts/:id
// @desc    Update Contact
// @access  Private
router.delete('/:id',(req,res)=> {
    res.send('Delete Contact')
});

module.exports = router;

