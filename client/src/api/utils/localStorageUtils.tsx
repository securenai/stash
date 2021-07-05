export const setLocalStorage = (...items: object[]) => {
	if (items.length > 0) {
		items.forEach((item: object) =>
			localStorage.setItem(Object.keys(item)[0], Object.values(item)[0])
		);
	}
};
