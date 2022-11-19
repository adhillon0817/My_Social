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
        Thoughts.findOne({_id: req.params.id})
        .select('-__v')
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No thoughts with that ID' })
          : res.json(thoughts)
      )

      .catch((err) => res.status(500).json(err));
    },


    

}