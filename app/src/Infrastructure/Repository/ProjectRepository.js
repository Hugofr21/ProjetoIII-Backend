import ProjectRepositoryInterface from "../../Domain/Project/Repository/ProjectRepositoryInterface";
import Project from "../../Domain/Project/Model/Project";

const BaseRepository = require('./BaseRepository');

export default class ProjectRepository extends BaseRepository implements ProjectRepositoryInterface {
    constructor({database}) {
        super(database.models.ProjectModel, Project);
    }

    async getProjectById(projectId: Number): ?Project {
        return await this.findById(projectId);
    }

    async getProjectOfUser(userId: Number): ?User {
        return await this.findByField('userId', userId);
    }

    async save(project: Project) {
        await this.create(project);
    }
}