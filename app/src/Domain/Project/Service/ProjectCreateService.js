import ProjectRepositoryInterface from "Domain/Project/Repository/ProjectRepositoryInterface";
import Project from "Domain/Project/Model/Project";

export default class ProjectCreateService {

    #projectRepository: ProjectRepositoryInterface;

    constructor({projectRepository}) {
        this.#projectRepository = projectRepository;
    }

    async createProject(teamLeaderId: Number, name: string, deliveryDate: Date, comments: string, availableToTravel: boolean) {
        let project: Project = new Project(teamLeaderId, name, deliveryDate, comments, availableToTravel);
        await this.#projectRepository.save(project);
    }

}