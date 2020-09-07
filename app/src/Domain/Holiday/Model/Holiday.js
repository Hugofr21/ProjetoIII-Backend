const MAX_DAYS_BEFORE_START_DATE = 7;

class Holiday {
    #userId: Number;
    #startDate: Date;
    #endDate: Date;
    #holidayStatus: HolidayStatus;

    constructor(userId: Number, startDate: Date, endDate: Date) {
        this.#userId = userId;
        this.#startDate = startDate;
        this.#endDate = endDate;
        this.#holidayStatus = HolidayStatus.PENDING;

        if (this.#startDate < new Date().getDate() + MAX_DAYS_BEFORE_START_DATE) {
            throw HolidayDayException();
        }
    }

    accept() {
        this.#holidayStatus = HolidayStatus.ACCEPT;
    }

    cancel() {
        this.#holidayStatus = HolidayStatus.CANCELED;
    }
}