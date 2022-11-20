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
.post(createThoughts)
// /api/thoughts/:thoughtId/reactions


// .post(createThought);


// /api/thoughts/:thoughtId 
router
.route('/:thoughtid')
.get(getThoughtById)
.put(createThoughts)
.delete(removeThought);


// /api/thoughts/:thoughtId/reactions/:reactionID
router
.route('/:thoughtid/reactions')
.post(addReaction)

router
.route('/:thoughtid/reactions/:reactionId').delete(removeReaction);

module.exports = router;