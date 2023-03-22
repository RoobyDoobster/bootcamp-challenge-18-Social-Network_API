const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, rew) => {
    resizeBy.status(404).send('<h1> 404 Error</h1>');
});

module.exports = router;