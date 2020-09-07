class CreateHolidayService {
    holidayRepository: HolidayRepositoryInterface;
    projectRepository: ProjectRepositoryInterface;

    createHoliday(userId: Number, startDate: Date, endDate: Date) {
        let holidays = this.holidayRepository.getHolidaysUserBetweenDates(userId, startDate, endDate);
        if (holidays.length > 0) {
            throw new HolidayUserHasHolidaysException();
        }
        let project = this.projectRepository.getProjectOfUser(userId);
        if (project !== null) {
            //obter tasks do user
        }

    }
}