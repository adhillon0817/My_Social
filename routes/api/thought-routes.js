const router = require('express').Router();
const {
    getThoughts,
    getThoughtById,
    createThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thought-controller');

// /api/thoughts 
router
.route('/')
.get(getThoughts)

// /api/thoughts/:thoughtId/reactions
router
.route('/:id/')
.post(createThought);


// .post(createThought);


// /api/thoughts/:thoughtId 
router
.route('/:thoughtId')
.get(getThoughtById)
.put(createThought)
.delete(deleteThought);


// /api/thoughts/:thoughtId/reactions/:reactionID
router
.route('/:thoughtId/reactions')
.post(addReaction)
.delete(removeReaction);

module.exports = router;