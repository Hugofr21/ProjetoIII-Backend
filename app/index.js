// dependencies
const container = require('./container');

const server = container.resolve('server');

server.start().catch(error => {
    console.log(error.stack);
    process.exit();
});