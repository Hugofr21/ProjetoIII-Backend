interface HolidayRepositoryInterface {
    getHolidaysUserBetweenDates(userId: Number, startDate: Date, endDate: Date): Holiday[];
}