const { User, Thoughts } = require('../models');



// activity Unit 18 Mini project & Day 3 #24 REFER TO LINE 11-12 ON TAGCONTROLLERS AND 21-27
module.exports = {
    getUser(req, res) {
        User.find({})
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },

    getUserbyId(req, res) {
        User.findOne({_id: req.params.id})
        .select('-__v')
      .then((users) =>
        !users
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(users)
      )

      .catch((err) => res.status(500).json(err));
    },

//CREATE USE
    createUser(req, res) {
        User.create(req.body)
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.status(500).json(err));

    },


//UPDATE USER
    updateUser(req, res) {
        User.findOneAndUpdate({_id: req.params.id}, {$set:req.body}, {new:true, runValidators:true})
        .then((users) =>
        !users
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(users)
        )
        
        .catch((err) => {res.status(500).json(err)});
    },
    

    //REMOVE USER
    removeUser(req, res) {
        User.findOneAndRemove({_id: req.params.id })
        .then((users) => 
        !users
          ? res.status(404).json({ message: 'No user with that ID' })
          : User.findOneAndUpdate({User: req.params.id},{$pull: { users: req.params.id} }, {new: true})
        )
        
        .catch((err) => {res.status(500).json(err)});
    },


    //ADDING FRIEND
    addFriends(req, res){
        User.findOneAndUpdate({_id: req.params.id}, {$addToSet: {friends: req.params.friendId}},{new: true, runValidators: true})
        .then((users) =>
        !users
          ? res.status(404).json({ message: 'No friend with that ID' })
          : res.json(users)
        )
        .catch((err) => {res.status(500).json(err)});
    },

    //REMOVING FRIEND
    removeFriends(req, res) {
        User.findOneAndUpdate({_id: req.params.id},{$pull: {friends:{friendId: req.params.friendId }}},{new: true, runValidators: true})
        .then((users) =>
        !users
          ? res.status(404).json({ message: 'No friend with that ID' })
          : res.json(users)
        )
        .catch((err) => {res.status(500).json(err)});
    }
}