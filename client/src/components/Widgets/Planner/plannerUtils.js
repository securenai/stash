export const today = () => {
	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	// console.log(year);
	return { year, month, day };
};

export const initYearData = () => {
	const year = new Date().getFullYear();
	const data = [];
	for (let i = 1; i <= 12; i++) {
		const daysInMonth = new Date(year, i, 0).getDate();
		const monthData = [];
		for (let j = 1; j <= daysInMonth; j++) {
			monthData.push(j.toString());
		}
		data.push(monthData);
	}
	return data;
};

export const getDayArrayForMonthOfYear = (year) => {
	const arr = [];
	for (let i = 0; i < 12; i++) {
		const calender = [];
		for (let x = 0; x < 42; x++) {
			calender.push(0);
		}
		const dateOfFirstDayOfMonth = new Date(year, i, 1, 0, 0, 0, 0);
		const days = new Date(year, i + 1, 0).getDate();
		let index = dateOfFirstDayOfMonth.getDay();
		for (let j = 1; j <= days; j++) {
			calender.splice(index, 1, [
				j,
				{
					plans: [
						'basball practice' + j,
						'cooking class' + j,
						'meeting with Jim,' + j,
						'return library book' + j
					]
				}
			]);
			index++;
		}
		arr.push(calender);
	}
	return arr;
};

export const getMonthNameAt = (index) => {
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
};

// function sum(a, b) {
//     return a + b;
//   }

// module.exports = getPlannerYear;
