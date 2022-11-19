const { Thoughts, User, Types } = require('../models');


// activity Unit 18 Mini project & Day 3 #24 REFER TO LINE 11-12 ON TAGCONTROLLERS AND 21-21

//GET THOUGHTS

module.exports = {
    getThoughts(req, res) {
        Thoughts.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },

// GET THOUGHT BY ID
    getThoughtbyId(req, res) {
        Thoughts.findOne({_id: req.params.thoughtid})
        .select('-__v')
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No thoughts with that ID' })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
    },


//CREATE THOUGHT

createThought(req, res) {
    Thoughts.create(req.body) 
        .then((thoughts) => {
            return User.findOneAndUpdate(
                {_id:req.body.id}, {$addtoSet: {thoughts: thoughtId}}, {new: true}
            );
        })
        .then((users) =>
        !users
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json('thoughts!')
        )
        .catch((err) => {res.status(500).json(err)});
    },


//REMOVE THOUGHT
removeThought(req, res) {
    Thoughts.findOneAndRemove({_id: req.params.id })
    .then((thoughts) => 
    !thoughts
      ? res.status(404).json({ message: 'No thought with that ID' })
      : User.findOneAndUpdate({thoughts: req.params.thoughtid},{$pull: { thoughts: req.params.thoughtid} }, {new: true})
    )
    
    .catch((err) => {res.status(500).json(err)});
},


//ADD REACTION
addReaction(req, res) {
    Thoughts.findOneAndUpdate(
        ({_id: req.params.thoughtId}, {$addtoSet:{reactions: req.body}},{new: true, runValidators: true})
        .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json('thoughts!')
        )
        .catch((err) => {res.status(500).json(err)}));
},


// REMOVE REACTION
removeReaction(req,res) {
    Thoughts.findOneAndUpdate({_id: req.params.thoughtId}, {$pull: {reactions:{reactionId: req.params.reactionId}}}, {new: true, runValidators: true} )
    .then((thoughts) =>
    !thoughts
      ? res.status(404).json({ message: 'No user with that ID' })
      : res.json('thoughts!')
    )
    .catch((err) => {res.status(500).json(err)});
}

};