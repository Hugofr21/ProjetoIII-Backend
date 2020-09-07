const express = require('express');

class Server {
    constructor({config, router}) {
        this.app = express();
        this.config = config;
        this.router = router;
    }

    /**
     * Server Configurations
     */
    configure() {
        // remove the Powered by Express header
        this.app.disable('x-powered-by');

        // load up the router
        this.app.use(this.router);
    }

    /**
     * Boots up the server
     */
    start() {
        // enable the configuration of the server.
        this.configure();

        // start the server
        return new Promise(resolve => {
            const http = this.app.listen(this.config.NODE_PORT, () => {
                const {port} = http.address();
                console.log(`API Running at: http://localhost:${port}/`);
            });
        });
    }
}

module.exports = Server;