import React, { useState } from 'react';
import './Login.scss';
import logo from './assets/stash_logo.png';

export interface LoginProps {
	login: () => void;
}

const Login: React.FC<LoginProps> = ({ login }) => {
	// controlled components
	const [userName, setUserName] = useState('');
	const [userPassword, setUserPassword] = useState('');

	const handleLogin = (e) => {
		e.preventDefault();

		const data = { userName, userPassword };
		console.log(JSON.stringify(data));
		const options = {
			method: 'POST',
			body: JSON.stringify(data), // data can be `string` or {object}!
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		};
		fetch('http://localhost:5000/api/login', options)
			.then(checkStatus)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				if (data.length > 0) {
					login();
				}
			});
	};

	const checkStatus = (response) => {
		if (response.ok) {
			return Promise.resolve(response);
		} else {
			return Promise.reject(new Error(response.statusText));
		}
	};

	return (
		<div className="loginPage">
			<div className="loginBox">
				<form>
					<div>
						<img src={logo} />
					</div>
					<h3>type in login info</h3>
					<ul className="listFields">
						<li>
							username :{' '}
							<input
								type="text"
								placeholder="username"
								onChange={(e) => setUserName(e.target.value)}
							/>
						</li>
						<li>
							password :{' '}
							<input
								type="text"
								placeholder="password"
								onChange={(e) => setUserPassword(e.target.value)}
							/>
						</li>
					</ul>
					<button onClick={handleLogin}>login</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
