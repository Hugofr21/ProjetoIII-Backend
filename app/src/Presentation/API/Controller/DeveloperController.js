import {GET, POST, route} from 'awilix-express';

import DeveloperCreateService from "Domain/Developer/DeveloperCreateService";

@route('/developers')
export default class DeveloperController {

    #developerCreateService: DeveloperCreateService

    constructor({developerCreateService}) {
        this.#developerCreateService = developerCreateService;
    }

    @POST()
    async create(req, res, _next) {

        let developer = await this.#developerCreateService.createDeveloper(
            "developer-test",
            "developertest@developertest.com",
            "test",
            "65656566",
            "morada",
            "sexo",
            20,
            "Portuguesa",
            943582345,
            "developer",
            new Date()
        );

        return res.status(200).json(developer);
    }
}