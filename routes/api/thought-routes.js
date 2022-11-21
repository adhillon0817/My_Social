const router = require('express').Router();
//the following are connected to the functions in the thoughtcontroller! Make sure they are matching in the exact way
const {
    getThoughts,
    getThoughtById,
    createThoughts,
    removeThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thought-controller');

//Insert this to insomnia when you do GET or POST /api/thoughts 
router
.route('/')
.get(getThoughts)
.post(createThoughts)






// /api/thoughts/:thoughtId 

//IN INSOMNIA when doing GET PUT and DELETE use the following to complete the action
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