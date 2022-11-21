const router = require('express').Router();
//all functions in user controllers must match functions
const {
    getUser,
    getUserById,
    createUser,
    removeUser,
    updateUser,
    addFriends,
    removeFriends
} = require('../../controllers/user-controller')


////USE THE BOTTOM FOR GET PUT DELETE and POST paths
// /api/users creation
router
.route('/')
.get(getUser)
.post(createUser)


// get user by id and change user
router
.route('/:userid')
.get(getUserById)
.delete(removeUser)
.put(updateUser)


//adding and deleting user friends
router
.route("/:userid/friends/:friendId")
.post(addFriends)


router
.route("/:userid/friends/:friendId")
.delete(removeFriends);





module.exports = router;