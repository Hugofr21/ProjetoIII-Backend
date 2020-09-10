export default class Project {
    id: Number;
    teamLeaderId: Number;
    name: string;
    createdAt: Date;
    deliveryDate: Date;
    comments: string;
    //status: ProjectStatus;
    availableToTravel: boolean;

    tasks: Task[];


    constructor(teamLeaderId: Number, name: string, deliveryDate: Date, comments: string, availableToTravel: boolean) {
        this.teamLeaderId = teamLeaderId;
        this.name = name;
        this.deliveryDate = deliveryDate;
        this.comments = comments;
        this.availableToTravel = availableToTravel;

        this.createdAt = new Date();
        //this.status = ProjectStatus.PENDING;
    }

    addTask(userId: Number, startDate: Date, endDate: Date) {
        let task = new Task(userId, startDate, endDate);
        this.tasks.push(task);
    }

    removeTask() {

    }

    changeUserTask(taskId: Number, newUserId: Number) {
        let task = this.getTask(taskId);
        if (task === null) {
            throw new TaskNotFoundException();
        }
        task.changeUserId(newUserId);
    }

    getTask(taskId: Number): ?Task {
        return taskId in this.tasks ? this.tasks[taskId] : null;
    }
}