const envs = require('dotenv');
envs.config();

module.exports = {
    JWT_SECRET: 'top_secret',
    FORCE_UPDATE_DB: false,
    NODE_ENV: process.env.NODE_ENV,
    NODE_PORT: process.env.NODE_PORT,
    DB_USERNAME: process.env.USERNAME,
    DB_PASSWORD: process.env.PASSWORD,
    DB_NAME: process.env.DATABASE,
    DB_HOST: process.env.HOST,
    DB_PORT: process.env.PORT
};
