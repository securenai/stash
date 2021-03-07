import React, { useState } from 'react';
import './Login.scss';
import logo from './assets/stash_logo.png';
import { Link, Redirect } from 'react-router-dom';
import ErrorDisplay from '../../components/ErrorDisplay/ErrorDisplay';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../slices/userSlice';
import { login, logout } from '../../slices/userSlice';

export interface LoginProps {
	//auth: boolean;
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

	// useEffect(() => {
	// 	// setloggedIn(true);
	// }, []);

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
				if (data.message) {
					setValErrMsg(data.message);
					setloggedIn(true);
					// setTimeout(() => {
					// 	setloggedIn(true);
					// }, 1000);
					console.log(data.userInfo);
					localStorage.setItem('token', data.token);
					localStorage.setItem('userInfo', JSON.stringify(data.userInfo));
					localStorage.setItem('expiresAt', data.expiresAt);
					dispatch(
						login({
							token: data.token,
							expiresAt: data.expiresAt,
							userInfo: data.userInfo,
							isAuthenticated: true
							// password: data.userInfo.password
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
			{user.isAuthenticated && <Redirect to="/myDashBoard" />}
			<div className="loginPage">
				<div className="image_placer">
					<img src={logo} />
				</div>
				<div className="loginBox">
					<form>
						<div className="form_wrapper">
							<h2 className="login_greeting">WELCOME!</h2>
							<div className="input_title">EMAIL</div>
							<div className="login_input">
								<div className="input_outline">
									<input
										type="text"
										value={userName}
										placeholder="username"
										onChange={(e) => setUserName(e.target.value)}
									/>
								</div>
							</div>
							<div className="input_title">PASSWORD</div>
							<div className="login_input">
								<div className="input_outline">
									<input
										type="text"
										value={userPassword}
										placeholder="password"
										onChange={(e) => setUserPassword(e.target.value)}
									/>
								</div>
							</div>
							<div className="error_msg">
								<ErrorDisplay errMsg={valErrMsg} />
							</div>
							<div className="help_msg">FORGOT PASSWORD?</div>
							<div className="login_btn" onClick={handleLogin}>
								Login
							</div>
							<div className="help_msg">NEED AN ACCOUNT ? SIGN UP HERE !</div>
							<div>
								<Link to="/">home</Link>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
