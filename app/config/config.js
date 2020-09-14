const envs = require('dotenv');
envs.config();

module.exports = {
    JWT_SECRET: 'top_secret',
    FORCE_UPDATE_DB: false,
    NODE_ENV: process.env.NODE_ENV,
    NODE_PORT: process.env.NODE_PORT,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT
};
