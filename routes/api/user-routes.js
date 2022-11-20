const router = require('express').Router();
const {
    getUser,
    getUserById,
    createUser,
    removeUser,
    updateUser,
    addFriends,
    removeFriends
} = require('../../controllers/user-controller')

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