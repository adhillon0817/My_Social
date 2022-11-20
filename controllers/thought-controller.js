const { Thought, User } = require('../models');


// activity Unit 18 Mini project & Day 3 #24 REFER TO LINE 11-12 ON TAGCONTROLLERS AND 21-21

//GET THOUGHTS

module.exports = {
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },

// GET THOUGHT BY ID
    getThoughtById(req, res) {
        Thought.findOne({_id: req.params.thoughtid})
        .select("-__v")
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No thoughts with that ID' })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
    },


//CREATE THOUGHT

createThoughts(req, res) {
    Thought.create(req.body) 
        .then((thought) => {
            return User.findOneAndUpdate(
                {_id:req.body.userid}, {$addtoSet: {thoughts: thought._id}}, {new: true}
            );
        })
        .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json('thoughts!')
        )
        .catch((err) => {res.status(500).json(err)});
    },


//REMOVE THOUGHT
removeThought(req, res) {
    Thought.findOneAndRemove({_id: req.params.thoughtid })
    .then((thought) => 
    !thought
      ? res.status(404).json({ message: 'No thought with that ID' })
      : User.findOneAndUpdate({thought: req.params.thoughtid},{$pull: { thoughts: req.params.thoughtid} }, {new: true})
    )
    
    .catch((err) => {res.status(500).json(err)});
},


//ADD REACTION
addReaction(req, res) {
    Thought.findOneAndUpdate(
        ({_id: req.params.thoughtid}, {$addtoSet:{reactions: req.body}},{new: true, runValidators: true})
        .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(thought)
        )
        .catch((err) => {res.status(500).json(err)}));
},


// REMOVE REACTION
removeReaction(req,res) {
    Thought.findOneAndUpdate({_id: req.params.thoughtid}, {$pull: {reactions:{reactionid: req.params.reactionid}}}, {new: true, runValidators: true} )
    .then((thought) =>
    !thought
      ? res.status(404).json({ message: 'No user with that ID' })
      : res.json(thought)
    )
    .catch((err) => {res.status(500).json(err)});
}

};