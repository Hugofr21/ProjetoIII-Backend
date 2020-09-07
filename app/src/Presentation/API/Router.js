const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
import cors from 'cors';
import { loadControllers, scopePerRequest } from 'awilix-express';

const Router = container => {
    const {config} = container;

    const router = express.Router();

    // status monitor for development
    if (config.NODE_ENV === 'development') {
        router.use(morgan('dev'));
    }

    // router configuration
    router.use(bodyParser.json({limit:'50mb'}));
    router.use(bodyParser.urlencoded({extended:true, limit:'50mb'}));
    //router.use(cors());

    router.use(scopePerRequest(container));
    router.use(loadControllers('./Controller/*.js', {cwd: __dirname}));

    // Authentication
    require('./auth/passport');
    router.use(passport.initialize());

    router.use(require('./middlewares'));
    router.use(require('./routes'));

    return router;
};

module.exports = Router;