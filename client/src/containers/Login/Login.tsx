import React, { useState } from 'react';
import './Login.scss';
import logo from './assets/stash_logo.png';
import { Link, Redirect } from 'react-router-dom';
import ErrorDisplay from '../../components/ErrorDisplay/ErrorDisplay';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../slices/userSlice';
import { login, logout } from '../../slices/userSlice';

export interface LoginProps {
	// login: () => void;
	// setSession: (val: String) => void;
}

const Login: React.FC<LoginProps> = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	// controlled components
	const [loggedIn, setloggedIn] = useState(false);
	const [userName, setUserName] = useState('nova');
	const [userPassword, setUserPassword] = useState('123');
	const [valErrMsg, setValErrMsg] = useState('');

	const handleChkSession = () => {
		console.log('ppp');
		fetch('http://localhost:5000/api/chk', { method: 'GET' })
			.then(checkStatus)
			.then((res) => {
				console.log(res);
				return res.json();
			})
			.then((data) => {
				console.log(data.msg);
			});
	};

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
				console.log(data);
				if (data.message) {
					console.log('good');
					setValErrMsg(data.message);
					setTimeout(() => {
						setloggedIn(true);
					}, 1000);
					dispatch(
						login({
							uid: data.userInfo.dataId,
							displayName: data.userInfo.userName
						})
					);
				} else {
					setValErrMsg('login info incorrect!');
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
		<>
			{loggedIn && <Redirect to="/" />}
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
									value={userName}
									placeholder="username"
									onChange={(e) => setUserName(e.target.value)}
								/>
							</li>
							<li>
								password :{' '}
								<input
									type="text"
									value={userPassword}
									placeholder="password"
									onChange={(e) => setUserPassword(e.target.value)}
								/>
							</li>
						</ul>
						<div className="error_msg">
							<ErrorDisplay errMsg={valErrMsg} />
						</div>
						<button onClick={handleLogin}>login</button>

						<div>
							<Link to="/">home</Link>
						</div>
					</form>
					<button onClick={handleChkSession}>check session</button>
				</div>
			</div>
		</>
	);
};

export default Login;
