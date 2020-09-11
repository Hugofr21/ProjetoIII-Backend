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
        const {
            username, email, password, name, birthDate, nif, address, phone, gender, age, postalCode, nationality, availableToTravel,
            isTeamLeader
        } = req.body;
        let developer = await this.#developerCreateService.createDeveloper(username, email, password, nif, address, gender, age, nationality, phone, 'devellper', birthDate);

        return res.status(200).json(developer);
    }
}