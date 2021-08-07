export const setLocalStorage = (...items: object[]) => {
	if (items.length > 0) {
		items.forEach((item: object) => {
			const key = Object.keys(item)[0];
			const value = Object.values(item)[0];
			localStorage.setItem(
				key,
				typeof value === 'string' ? value : JSON.stringify(value)
			);
		});
	}
};
