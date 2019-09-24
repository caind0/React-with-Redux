const User = require('../models/User');

exports.getUser = async (req, res) => {
    try {
        //get everything in user except the pssword
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
}