export default class Developer {
    id: Number;
    userId: Number;
    projectId: Number;

    constructor(userId: Number) {
        this.userId = userId;
        this.projectId = null;
    }

    setProject(projectId: Number) {
        this.projectId = projectId;
    }
}