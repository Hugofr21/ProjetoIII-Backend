// dependencies
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

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

    console.log(1);
    router.use(require('./middlewares'));
    console.log(2);
    router.use(require('./routes'));

    return router;
};

module.exports = Router;