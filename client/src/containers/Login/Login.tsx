import React, { useState } from 'react';
// import './Login.scss';
import { Login as LoginPage } from '../../components/Login/Login';

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
	const [userName, setUserName] = useState('nova');
	const [userPassword, setUserPassword] = useState('123');
	const [loggedIn, setloggedIn] = useState(false);
	const [valErrMsg, setValErrMsg] = useState('');

	const handleSetUserName = (val) => {
		setUserName(val);
	};

	const handleSetUserPassword = (val) => {
		setUserPassword(val);
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
				if (data.message) {
					setValErrMsg(data.message);
					setloggedIn(true);
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
			<LoginPage
				setUserName={handleSetUserName}
				setUserPassword={handleSetUserPassword}
				login={handleLogin}
				errMsg={valErrMsg}
			/>
		</>
	);
};

export default Login;
