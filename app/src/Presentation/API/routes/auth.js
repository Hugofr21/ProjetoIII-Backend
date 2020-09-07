const router = require('express').Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const {JWT_SECRET} = 'top_secret';

router.post('/login', async (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
        try {
            if (!user && info) {
                return res.status(400).send(info.message);
            }

            if (!user) return res.status(400).send();

            req.login(user, {session: false}, async (error) => {
                if (error) return next(error);

                const body = {id: user.id_utilizador, email: user.email};
                const token = jwt.sign({user: body}, JWT_SECRET);

                return res.json({
                    token,
                    userData: user
                });
            });
            return next();
        } catch (error) {
            return next(error);
        }
    })(req, res, next);
});

module.exports = router;
