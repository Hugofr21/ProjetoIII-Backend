const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { Strategy, ExtractJwt } = require('passport-jwt');
const { Utilizador } = require('../../models');
const { JWT_SECRET } = require('../../config/configs');

/*passport.use('signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, async (email, password, done) => {
  try {
    const user = await User.findOne({
      where: { email },
    });

    if (user) {
      return done(null, false, { message: 'User already exists' });
    }

    const newUser = await User.create({
      email: email,
      password: password,
      username: username,
      n_contribuinte: n_contribuinte,
      morada: morada,
      sexo: sexo,
      idade: idade,
      nacionalidade: nacionalidade,
      telefone: telefone,
      tipo: tipo,
      sessao_token: null,
      data_nascimento: data_nascimento
    });
    return done(null, newUser);
  } catch (error) {
    return done(error);
  }
}));*/

passport.use('login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, async (email, password, done) => {
  try {
    const utilizador = await Utilizador.findOne({
      where: { email },
    });
    if (!utilizador) {
      return done(null, false, { message: 'User not found' });
    }
    const validate = await utilizador.isValidPassword(password);
    if (!validate) {
      return done(null, false, { message: 'Wrong Password' });
    }
    return done(null, utilizador);
  } catch (error) {
    return done(error);
  }
}));

passport.use(new Strategy({
  secretOrKey: JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
}, async (token, done) => {
  try {
    return done(null, token.user);
  } catch (error) {
    return done(error);
  }
}));
