const { User, Thought } = require('../models');



// activity Unit 18 Mini project & Day 3 #24
module.exports = {
    getUser(req, res) {
        User.find({})
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },

    getUserbyId(req, res) {
        User.find({})
        .select('-__v')
        
    }
}