import React, { useState } from 'react';
import './Login.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './assets/stash_logo.png';
import ErrorDisplay from './ErrorDisplay/ErrorDisplay';
import Processing from '../../components/Widgets/Processing/Processing';

export interface LoginProps {
	setUserName: (name: string) => void;
	setUserPassword: (password: string) => void;
	login: (e) => Promise<Boolean>;
	loginAsGuest: (e) => void;
	errMsg: string;
}

export const Login: React.FC<LoginProps> = ({
	setUserName,
	setUserPassword,
	login,
	loginAsGuest,
	errMsg
}) => {
	const [loggingIn, setLoggingIn] = useState(false);

	return (
		<div className="loginPage">
			{loggingIn && <Processing />}
			<div className="image_placer">
				<Link to="/">
					<img className="logo-img" src={logo} />
				</Link>
			</div>
			<div className="loginPageBody">
				<div className="loginBox">
					<form className="loginForm">
						<div className="form_wrapper">
							<h2 className="login_greeting">WELCOME!</h2>
							<div className="input_title">USERNAME</div>
							<div className="login_input">
								<div className="input_outline">
									<input
										className="username_input"
										type="text"
										placeholder="e-mail"
										onChange={(e) => setUserName(e.target.value)}
										autoComplete="on"
									/>
								</div>
							</div>
							<div className="input_title">PASSWORD</div>
							<div className="login_input">
								<div className="input_outline">
									<input
										className="user_pw_input"
										type="password"
										placeholder="password"
										onChange={(e) => setUserPassword(e.target.value)}
										autoComplete="on"
									/>
								</div>
							</div>
							<div className="error_msg">
								<ErrorDisplay errMsg={errMsg} />
							</div>
							<div className="help_msg">FORGOT PASSWORD?</div>
							<div
								className="login_btn"
								onClick={async (e) => {
									setLoggingIn(true);
									if ((await login(e)) === false) {
										setLoggingIn(false);
									}
								}}>
								Login
							</div>
							<div className="help_msg">
								NEED AN ACCOUNT ? SIGN UP{' '}
								<Link to="/signup" className="sign_up_link">
									HERE!
								</Link>
							</div>
						</div>
					</form>
					<div className="guest">
						<div className="guest-title">login as guest (for demo use)</div>
						<div className="guest-avatar"></div>
						<div
							className="login_btn"
							onClick={(e) => {
								setLoggingIn(true);
								loginAsGuest(e);
							}}>
							Login as guest
						</div>
					</div>
				</div>
			</div>
			<div className="credit">
				<a
					href="https://www.freepik.com/vectors/background"
					target="_blank"
					className="credit_link">
					Background vector created by freepik - www.freepik.com
				</a>
			</div>
		</div>
	);
};
