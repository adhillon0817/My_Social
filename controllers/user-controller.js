const { User, Thought } = require('../models');



// activity Unit 18 Mini project & Day 3 #24
module.exports = {
    getUser(req, res) {
        User.find({})
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },

    getUserbyId(req, res) {
        User.findOne({_id: req.params.id})
        .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )

      .catch((err) => res.status(500).json(err));
    },


    createUser(req, res) {
        User.create(req.body)
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.status(500).json(err));

    },

    UpdateUser(req, res) {
        User.findOneAndUpdate({_id: req.params.id}, {$set:req.body}, {new:true, runValidators:true})
        .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
        )
        
        .catch((err) => {res.status(500).json(err)});
    },
    
    
}