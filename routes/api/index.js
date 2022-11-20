const router = require('express').Router();
const thoughtRoutes = require('./thought-routes')
const userRoutes = require('./user-routes')

//path to thoughts routes
router
.use('/thoughts', thoughtRoutes);


//path to user routes
router
.use('/users', userRoutes);



module.exports = router;