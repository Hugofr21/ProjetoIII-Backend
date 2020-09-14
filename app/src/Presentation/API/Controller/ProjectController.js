import {GET, PUT, route} from 'awilix-express';
import ProjectCreateService from "Domain/Project/Service/ProjectCreateService";

@route('/projects')
export default class ProjectController {

    #projectCreateService: ProjectCreateService

    constructor({projectCreateService}) {
        this.#projectCreateService = projectCreateService;
    }

    @GET()
    async getAll(req, res) {
        await this.#projectCreateService.createProject(
            1, "jorgela", new Date(), "blahblahblah", true
        )

        return res.status(200).json(["OK"]);
    }

    @PUT()
    async addProject(req, res) {
        const { name, email, start_date, end_date, nif, elements, phone, teamLeaderId, description, tripAvailability } = req.body;
        
        await this.#projectCreateService.createProject(
            teamLeaderId, name, new Date(end_date), description, tripAvailability
        )

        return res.status(200).json(["OK"]);
    }
}