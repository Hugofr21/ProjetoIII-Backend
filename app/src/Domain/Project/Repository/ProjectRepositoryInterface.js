import Project from "../Model/Project";

export default class ProjectRepositoryInterface {
    async getProjectById(projectId: Number): ?Project {
    }

    async getProjectOfUser(userId: Number): ?Project {
    }

    async save(project: Project): void {
    }
}