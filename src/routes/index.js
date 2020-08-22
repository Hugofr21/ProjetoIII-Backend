const router = require('express').Router();
const middleware = require('../middleware');

/*+++++++++++++++++++++++++++++++++++++++++++++
 Routes
 ++++++++++++++++++++++++++++++++++++++++++++++*/

const passport = require('passport');
const auth = require('./auth');
const users = require('./users');
const developers = require('./developers');


router.use('/', auth);
router.use('/', passport.authenticate('jwt', { session: false }));
router.use('/', middleware.checkToken, users);
router.use('/', middleware.checkToken, developers);


module.exports = router;
