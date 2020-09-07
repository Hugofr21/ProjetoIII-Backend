const envs = require('dotenv');
envs.config();

module.exports = {
    JWT_SECRET: 'top_secret',
    FORCE_UPDATE_DB: false,
    NODE_ENV: process.env.NODE_ENV,
    NODE_PORT: process.env.NODE_PORT,
    USERNAME: process.env.USERNAME,
    PASSWORD: process.env.PASSWORD,
    DATABASE: process.env.DATABASE,
    HOST: process.env.HOST,
    PORT: process.env.PORT
};
