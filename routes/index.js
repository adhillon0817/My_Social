const router = require('express').Router();
const apiRoutes = require('./api');

//connecting on router and if its an incorrect path you will be returned the message
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.send('Wrong route!');
});


module.exports = router;