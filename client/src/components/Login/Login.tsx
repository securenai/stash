import React from 'react';
import './Login.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './assets/stash_logo.png';
import ErrorDisplay from '../../components/ErrorDisplay/ErrorDisplay';

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
			<div className="loginBox">
				<form>
					<div className="form_wrapper">
						<h2 className="login_greeting">WELCOME!</h2>
						<div className="input_title">EMAIL</div>
						<div className="login_input">
							<div className="input_outline">
								<input
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
						<div className="help_msg">NEED AN ACCOUNT ? SIGN UP HERE !</div>
					</div>
				</form>
			</div>
		</div>
	);
};
