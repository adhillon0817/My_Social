const router = require('express').Router();
const {
    getUsers,
    getUsersById,
    createUser,
    deleteUser,
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
.route('/:id')
.get(getUsersById)
.delete(deleteUser)
.put(updateUser)


//adding and deleting user friends
router
.route("/:id/friends/:friendId")
.post(addFriends)
.delete(removeFriends);







module.exports = router;