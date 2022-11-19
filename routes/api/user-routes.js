const router = require('express').Router();
const {
    getUsers,
    getUsersById,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller')

