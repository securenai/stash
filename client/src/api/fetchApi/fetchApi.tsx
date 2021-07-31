export const fetchApi = (data: object, route: string): Promise<any> => {
	return new Promise(function (resolve, reject) {
		const options = {
			method: 'POST',
			body: JSON.stringify(data), // data can be `string` or {object}!
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		};
		console.log(route);
		console.log(options);
		fetch('http://localhost:5000/api/' + route, options)
			.then(checkStatus)
			.then((res) => {
				return res.json();
			})
			.then((result) => {
				console.log(result);
				resolve(result);
			});
	});
};

const checkStatus = (response) => {
	if (response.ok) {
		return Promise.resolve(response);
	} else {
		return Promise.reject(new Error(response.statusText));
	}
};
