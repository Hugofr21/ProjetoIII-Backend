import {Seeder} from "Infrastructure/Database/Seeder";

const express = require('express');
import {loadControllers, scopePerRequest} from 'awilix-express';

class Server {
    #seeder: Seeder;

    constructor({container, config, router, database, seeder}) {
        this.app = express();
        this.container = container;
        this.config = config;
        this.router = router;
        this.database = database;
        this.#seeder = seeder;
    }

    /**
     * Server Configurations
     */
    async configure() {
        if (this.config.FORCE_UPDATE_DB) {
            await this.#seeder.seed();
        }

        // remove the Powered by Express header
        this.app.disable('x-powered-by');

        // load up the router
        this.app.use(this.router);

        this.app.use(scopePerRequest(this.container));
        this.app.use(loadControllers('Controller/*.js', {cwd: __dirname}));
    }

    /**
     * Boots up the server
     */
    async start() {
        // enable the configuration of the server.
        await this.configure();

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