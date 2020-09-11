import {Seeder} from "Infrastructure/Database/Seeder";

const {asClass, asValue, asFunction, createContainer, Lifetime} = require('awilix');

const config = require('./config/config');

// infrastructures
const database = require('Infrastructure/Database');


// interfaces
// server setup
const router = require('./src/Presentation/API/Router');
const Server = require('./src/Presentation/API/Server');

// instantiate the container
const container = createContainer();

// build out the system
container.register({
    config: asValue(config),
    router: asFunction(router).singleton(),
    server: asClass(Server).singleton().inject((c) => ({ container: c })),

    //seeders
    seeder: asClass(Seeder).singleton(),

    // infrastructures
    database: asFunction(database).singleton(),
});

container.loadModules(
    ['src/**/*Service.js', 'src/Infrastructure/Repository/*!(BaseRepository).js'],
    {
        formatName: 'camelCase',
        resolverOptions: {
            lifetime: Lifetime.SINGLETON,
        },
        cwd: __dirname,
    }
);

//console.log(container.registrations);

module.exports = container;