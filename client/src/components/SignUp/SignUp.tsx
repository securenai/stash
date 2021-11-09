import React, { useState } from 'react';
import './SignUp.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './assets/stash_logo.png';
import ErrorDisplay from './ErrorDisplay/ErrorDisplay';
import SuccessDisplay from './SuccessDisplay/SuccessDisplay';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import Processing from '../Widgets/Processing/Processing';

export interface SignUpProps {
	createAccount: (
		email: string,
		username: string,
		password: string
	) => Promise<boolean>;
}

export const SignUp: React.FC<SignUpProps> = ({ createAccount }) => {
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [successMsg, setSuccessMsg] = useState('');
	const [signingIn, setSigningIn] = useState(false);
	const history = useHistory();

	const checkSubmit = async () => {
		if (
			email === '' ||
			username === '' ||
			password === '' ||
			confirmPassword === ''
		) {
			setErrMsg('field cannot be empty');
			return false;
		}
		if (password !== confirmPassword) {
			setErrMsg('password not the same as confirm password');
			return false;
		}
		if (password.length < 8) {
			setErrMsg('password must be at least 8 characters');
			return false;
		}
		if (email.includes('@') === false) {
			setErrMsg('email must be valid');
			return false;
		}
		setErrMsg('');
		// const createDate = moment().format('YYYY-MM-DD')
		const result = await createAccount(email, username, password);
		if (result === true) {
			setErrMsg('email already exists');
			return false;
		}
		return true;
	};

	return (
		<div className="signUpPage">
			{signingIn && <Processing />}
			<div className="image_placer">
				<Link to="/">
					<img className="logo-img" src={logo} />
				</Link>
			</div>
			<div className="signUpPageBody">
				<div className="signUpBox">
					<form className="signUpForm">
						<div className="form_wrapper">
							<h2 className="signUp_greeting">Create Account</h2>
							<div className="input_title">EMAIL</div>
							<div className="signUp_input">
								<div className="input_outline">
									<input
										className="username_input"
										type="text"
										placeholder="e-mail"
										onChange={(e) => setEmail(e.target.value)}
										autoComplete="on"
									/>
								</div>
							</div>
							<div className="input_title">USERNAME</div>
							<div className="signUp_input">
								<div className="input_outline">
									<input
										className="username_input"
										type="text"
										placeholder="username"
										onChange={(e) => setUsername(e.target.value)}
										autoComplete="on"
									/>
								</div>
							</div>
							<div className="input_title">PASSWORD</div>
							<div className="signUp_input">
								<div className="input_outline">
									<input
										className="user_pw_input"
										type="password"
										placeholder="password"
										onChange={(e) => setPassword(e.target.value)}
										autoComplete="on"
									/>
								</div>
							</div>
							<div className="input_title">CONFIRM PASSWORD</div>
							<div className="signUp_input">
								<div className="input_outline">
									<input
										className="user_pw_input"
										type="password"
										placeholder="password"
										onChange={(e) => setConfirmPassword(e.target.value)}
										autoComplete="on"
									/>
								</div>
							</div>
							<div className="error_msg">
								<ErrorDisplay errMsg={errMsg} />
							</div>
							<div className="success_msg">
								<SuccessDisplay successMsg={successMsg} />
							</div>
							<div className="help_msg">
								<Link to="/login" className="sign_up_link">
									already have an account
								</Link>
							</div>
							<div
								className="signUp_btn"
								onClick={async () => {
									setSigningIn(true);
									if ((await checkSubmit()) === true) {
										setSuccessMsg('account created! proceed to login page');
										setTimeout(() => {
											setSigningIn(false);
											history.push('/login');
										}, 2000);
									} else {
										setSigningIn(false);
									}
								}}>
								continue
							</div>
						</div>
					</form>
					<div className="help_msg_2">
						By registering, you agree to Stash's
						<a
							className="sign_up_link"
							// href="/"
							rel="noreferrer noopener"
							target="_blank">
							{' '}
							Terms of Service
						</a>{' '}
						and{' '}
						<a
							className="sign_up_link"
							// href="/"
							rel="noreferrer noopener"
							target="_blank">
							Privacy Policy
						</a>
						.
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
