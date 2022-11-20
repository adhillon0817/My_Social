const router = require('express').Router();
const {
    getUsers,
    getUsersById,
    createUser,
    removeUser,
    updateUser,
    addFriends,
    removeFriends
} = require('../../controllers/user-controller')

// /api/users creation
router
.route('/')
.get(getUsers)
.post(createUser)


// get user by id and change user
router
.route('/:userid')
.get(getUsersById)
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