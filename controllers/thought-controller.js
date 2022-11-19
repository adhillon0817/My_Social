const { Thoughts, Users, Types } = require('../models');

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
            return Users.findOneAndUpdate(
                {_id:req.body.id}, {$addtoSet: {thoughts: thoughtId}}, {new: true}
            );
        })
        .then((users) =>
        !users
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json('thoughts!')
        )
        .catch((err) => {res.status(500).json(err)});
    }



}