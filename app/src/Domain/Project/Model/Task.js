class Task {
    id: Number;
    userId: Number;
    startDate: Date;
    endDate: Date;
    status: TaskStatus;

    constructor(userId: Number, startDate: Date, endDate: Date) {
        this.userId = userId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = TaskStatus.PENDING;
    }

    changeUserId(newUserId: Number): void {
        this.userId = newUserId;
    }

}