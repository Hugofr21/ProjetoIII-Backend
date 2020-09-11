const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const Database = ({config}) => {
    // instantiate sequelize
    const sequelize = new Sequelize(config.DB_NAME, config.DB_USERNAME, config.DB_PASSWORD, {
        host: config.DB_HOST,
        port: config.DB_PORT,
        dialect: 'postgres',
        logging: true
    });

    // setup db
    const db = {
        sequelize,
        Sequelize,
        models: {},
    };

    // get the models and associate it
    const dir = path.join(__dirname, './models');
    fs
        .readdirSync(dir)
        .forEach(file => {
            const modelDir = path.join(dir, file);
            const model = sequelize.import(modelDir);
            model.includes = [];
            model.valueObjects = [];
            db.models[`${model.name}Model`] = model;
        });

    Object.keys(db.models).forEach((modelName) => {
        if (db.models[modelName].associate) {
            db.models[modelName].associate(db);
        }
    });


    /*await db.sequelize.sync({force: config.FORCE_UPDATE_DB}).then(() => {
        if (config.FORCE_UPDATE_DB) {
            console.log("Database updated!");
        }
    });*/

    return db;
};

module.exports = Database;