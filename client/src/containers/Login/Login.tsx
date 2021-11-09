import React, { useState } from 'react';
import { Login as LoginPage } from '../../components/Login/Login';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, login } from '../../slices/userSlice';
import { fetchApi } from '../../api/fetchApi/fetchApi';
import { setLocalStorage } from '../../api/utils/localStorageUtils';

const Login = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const [userName, setUserName] = useState('');
	const [userPassword, setUserPassword] = useState('');
	const [valErrMsg, setValErrMsg] = useState('');

	const handleSetUserName = (val: string) => {
		setUserName(val);
	};

	const handleSetUserPassword = (val: string) => {
		setUserPassword(val);
	};

	const handleLogin = async (e: MouseEvent) => {
		e.preventDefault();
		const result = await fetchApi({ userName, userPassword }, 'login');
		if (result.success) {
			setLocalStorage(
				{ token: result.token },
				{ userInfo: JSON.stringify(result.userInfo) },
				{ expiresAt: result.expiresAt }
			);
			dispatch(
				login({
					token: result.token,
					expiresAt: result.expiresAt,
					userInfo: result.userInfo,
					isAuthenticated: true
				})
			);
		} else {
			setValErrMsg('login info incorrect!');
			return false;
		}
		return true;
	};

	const handleLoginAsGuest = async (e: MouseEvent) => {
		e.preventDefault();
		const result = await fetchApi(
			{ userName: 'tom', userPassword: '12345678' },
			'login'
		);
		if (result.success) {
			setLocalStorage(
				{ token: result.token },
				{ userInfo: JSON.stringify(result.userInfo) },
				{ expiresAt: result.expiresAt }
			);
			dispatch(
				login({
					token: result.token,
					expiresAt: result.expiresAt,
					userInfo: result.userInfo,
					isAuthenticated: true
				})
			);
		} else {
			setValErrMsg('login info incorrect!');
		}
	};

	return (
		<>
			{user.isAuthenticated && <Redirect to="/myDashBoard" />}
			<LoginPage
				setUserName={handleSetUserName}
				setUserPassword={handleSetUserPassword}
				login={handleLogin}
				loginAsGuest={handleLoginAsGuest}
				errMsg={valErrMsg}
			/>
		</>
	);
};

export default Login;
