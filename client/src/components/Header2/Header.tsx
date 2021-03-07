import React from 'react';
import { Link } from 'react-router-dom';
import { selectUser } from '../../slices/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../../slices/userSlice';

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		console.log('ppp');
		dispatch(
			logout({
				token: null,
				expiresAt: null,
				userInfo: {},
				isAuthenticated: null
			})
		);
		localStorage.removeItem('userInfo');
		localStorage.removeItem('token');
		localStorage.removeItem('expiresAt');
	};

	const user = useSelector(selectUser);
	let name = '';
	if (user.displayName !== null) name = user.displayName;
	return (
		<div>
			this is header
			<ul>
				<li>
					<Link to="/">home</Link>
				</li>
				<li>
					{user === null ? (
						<Link to="/login">login</Link>
					) : (
						<button onClick={handleLogout}>logout</button>
					)}
				</li>
				<li>about</li>
				<li>contact</li>
			</ul>
		</div>
	);
};

export default Header;
