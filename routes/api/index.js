const router = require('express').Router();
const { route } = require('./thought-routes');
const thoughtsRoutes = require('./thought-routes')
const usersRoutes = requre('./user-routes')

//path to thoughts routes
router
.use('/thoughts', thoughtsRoutes);


//path to user routes
router
.use('/users', usersRoutes);



module.exports = router;