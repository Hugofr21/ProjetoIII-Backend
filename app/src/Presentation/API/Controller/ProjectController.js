import {GET, route} from 'awilix-express';
import ProjectCreateService from "Domain/Project/Service/ProjectCreateService";

@route('/projects')
export default class ProjectController {

    #projectCreateService: ProjectCreateService

    constructor({projectCreateService}) {
        this.#projectCreateService = projectCreateService;
    }

    @GET()
    async getAll(req, res, _next) {
        await this.#projectCreateService.createProject(
            1, "jorgela", new Date(), "blahblahblah", true
        )

        return res.status(200).json(["OK"]);
    }
}