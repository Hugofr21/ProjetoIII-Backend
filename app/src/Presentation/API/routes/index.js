const router = require('express').Router();

const passport = require('passport');
const auth = require('./auth');
//const users = require('./users');
//const developers = require('./developers');


router.use('/', auth);
router.use('/', passport.authenticate('jwt', { session: false }));


module.exports = router;
