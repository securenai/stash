class CalenderUtils {
	getDayArrayForMonthOfYear(year) {
		const arr = [];
		for (let i = 0; i < 12; i++) {
			const calender = [];
			for (let x = 0; x < 42; x++) {
				calender.push(0);
			}
			const dateOfFirstDayOfMonth = new Date(year, i, 1, 0, 0, 0, 0);
			const days = this.daysInMonth(i + 1, year);
			let index = dateOfFirstDayOfMonth.getDay();
			for (let j = 1; j <= days; j++) {
				calender.splice(index, 1, j);
				index++;
			}
			arr.push(calender);
		}
		return arr;
	}
	daysInMonth(month, year) {
		return new Date(year, month, 0).getDate();
	}
	getMonths() {
		return [
			'01',
			'02',
			'03',
			'04',
			'05',
			'06',
			'07',
			'08',
			'09',
			'10',
			'11',
			'12'
		];
	}
	getMonthNameAt(index) {
		const monthNameList = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];
		return monthNameList[index - 1];
	}
	getInitialPlannerForYear() {
		let daysInEachMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		if (this.leapYear(new Date().getFullYear()) === true) {
			daysInEachMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		}
		const initState = [
			{ month: 1, data: [] },
			{ month: 2, data: [] },
			{ month: 3, data: [] },
			{ month: 4, data: [] },
			{ month: 5, data: [] },
			{ month: 6, data: [] },
			{ month: 7, data: [] },
			{ month: 8, data: [] },
			{ month: 9, data: [] },
			{ month: 10, data: [] },
			{ month: 11, data: [] },
			{ month: 12, data: [] }
		];
		initState.forEach((month, index) => {
			const cnt = daysInEachMonth[index];
			for (let i = 0; i < cnt; i++) {
				month.data.push([
					{ events: [] },
					[
						{ period: '12am', tasks: [] },
						{ period: '1am', tasks: [] },
						{ period: '2am', tasks: [] },
						{ period: '3am', tasks: [] },
						{ period: '4am', tasks: [] },
						{ period: '5am', tasks: [] },
						{ period: '6am', tasks: [] },
						{ period: '7am', tasks: [] },
						{ period: '8am', tasks: [] },
						{ period: '9am', tasks: [] },
						{ period: '10am', tasks: [] },
						{ period: '11am', tasks: [] },
						{ period: '12pm', tasks: [] },
						{ period: '1pm', tasks: [] },
						{ period: '2pm', tasks: [] },
						{ period: '3pm', tasks: [] },
						{ period: '4pm', tasks: [] },
						{ period: '5pm', tasks: [] },
						{ period: '6pm', tasks: [] },
						{ period: '7pm', tasks: [] },
						{ period: '8pm', tasks: [] },
						{ period: '9pm', tasks: [] },
						{ period: '10pm', tasks: [] },
						{ period: '11pm', tasks: [] }
					]
				]);
			}
		});
		return initState;
	}
	leapYear(year) {
		return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
	}
}

export default CalenderUtils;
