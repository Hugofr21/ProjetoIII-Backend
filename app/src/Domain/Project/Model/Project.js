class Project {
    id: Number;

    tasks: Task[];

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