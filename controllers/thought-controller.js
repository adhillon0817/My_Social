const { Thoughts, Users, Types } = require('../models');

//GET THOUGHTS

module.exports = {
    getThoughts(req, res) {
        Thoughts.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },



}