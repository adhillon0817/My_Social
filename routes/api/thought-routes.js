const router = require('express').Router();
const {
    getThoughts,
    getThoughtById,
    createThoughts,
    removeThought,
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
.post(createThoughts);


// .post(createThought);


// /api/thoughts/:thoughtId 
router
.route('/:thoughtId')
.get(getThoughtById)
.put(createThoughts)
.delete(removeThought);


// /api/thoughts/:thoughtId/reactions/:reactionID
router
.route('/:thoughtId/reactions')
.post(addReaction)
.delete(removeReaction);

module.exports = router;