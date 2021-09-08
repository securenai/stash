import React from 'react';
import './Login.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './assets/stash_logo.png';
import ErrorDisplay from './ErrorDisplay/ErrorDisplay';

export interface LoginProps {
	setUserName: (name: string) => void;
	setUserPassword: (password: string) => void;
	login: (e) => void;
	errMsg: string;
}

export const Login: React.FC<LoginProps> = ({
	setUserName,
	setUserPassword,
	login,
	errMsg
}) => {
	return (
		<div className="loginPage">
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
							<div className="input_title">EMAIL</div>
							<div className="login_input">
								<div className="input_outline">
									<input
										className="username_input"
										type="text"
										placeholder="username"
										onChange={(e) => setUserName(e.target.value)}
									/>
								</div>
							</div>
							<div className="input_title">PASSWORD</div>
							<div className="login_input">
								<div className="input_outline">
									<input
										className="user_pw_input"
										type="text"
										placeholder="password"
										onChange={(e) => setUserPassword(e.target.value)}
									/>
								</div>
							</div>
							<div className="error_msg">
								<ErrorDisplay errMsg={errMsg} />
							</div>
							<div className="help_msg">FORGOT PASSWORD?</div>
							<div className="login_btn" onClick={login}>
								Login
							</div>
							<div className="help_msg">
								NEED AN ACCOUNT ? SIGN UP <a className="sign_up_link">HERE</a> !
							</div>
						</div>
					</form>
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
