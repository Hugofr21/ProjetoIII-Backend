class CreateTaskService {
    #projectRepository: ProjectRepositoryInterface;
    #holidayRepository: HolidayRepositoryInterface;
    #taskRepository: TaskRepositoryInterface;

    constructor(projectRepository: ProjectRepositoryInterface, holidayRepository: HolidayRepositoryInterface, taskRepository: TaskRepositoryInterface) {
        this.#projectRepository = projectRepository;
        this.#holidayRepository = holidayRepository;
        this.#taskRepository = taskRepository;
    }

    createTask(projectId: Number, userId: Number, startDate: Date, endDate: Date) {
        let project = this.#projectRepository.getProject(projectId);
        if (project === null) {
            throw new ProjectNotFoundException();
        }
        let holidays = this.#holidayRepository.getHolidaysUserBetweenDates(userId, startDate, endDate);
        if (holidays.length > 0) {
            throw new TaskUserHolidayException();
        }
        let tasks = this.#taskRepository.getTasksUserBetweenDates(userId, startDate, endDate);
        if (tasks.length > 0) {
            throw new TaskUserBusyException();
        }
        project.addTask(userId, startDate, endDate);
    }
}