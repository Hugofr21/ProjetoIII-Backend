const {asClass, asValue, asFunction, createContainer, Lifetime} = require('awilix');

const config = require('./config/config');

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
    server: asClass(Server).singleton(),
});

module.exports = container;