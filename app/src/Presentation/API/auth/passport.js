const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const {Strategy, ExtractJwt} = require('passport-jwt');
const {Utilizador} = require('../models');
const {JWT_SECRET} = 'top_secret';

passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, async (email, password, done) => {
    try {
        const utilizador = await Utilizador.findOne({
            where: {email},
        });
        if (!utilizador) {
            return done(null, false, {message: 'User not found'});
        }
        const validate = await utilizador.isValidPassword(password);
        if (!validate) {
            return done(null, false, {message: 'Wrong Password'});
        }
        return done(null, utilizador);
    } catch (error) {
        return done(error);
    }
}));

passport.use(new Strategy({
    secretOrKey: 'top_secret',
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
}, async (token, done) => {
    try {
        return done(null, token.user);
    } catch (error) {
        return done(error);
    }
}));
