interface HolidayRepositoryInterface {
    getHolidaysUserBetweenDates(userId: Number, starDate: Date, endDate: Date): Holiday[];
}