interface TaskRepositoryInterface {
    getTasksUserBetweenDates(userId: Number, startDate: Date, endDate: Date): Task[];
}