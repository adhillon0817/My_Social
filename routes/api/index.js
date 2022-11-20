const router = require('express').Router();
const thoughtRoutes = require('./thought-routes')
const usersRoutes = requre('./user-routes')

//path to thoughts routes
router
.use('/thoughts', thoughtRoutes);


//path to user routes
router
.use('/users', usersRoutes);



module.exports = router;