interface ProjectRepositoryInterface {
    getProject(projectId: Number): ?Project;

    getProjectOfUser(userId: Number): ?Project;
}