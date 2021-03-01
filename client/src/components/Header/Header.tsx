import React from 'react';
import { Link } from 'react-router-dom';
import { selectUser } from '../../slices/userSlice';
import { useSelector } from 'react-redux';

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
	const user = useSelector(selectUser);
	let name = '';
	if (user !== null) name = user.displayName;
	return (
		<div>
			welcome {name} , this is header
			<ul>
				<li>
					<Link to="/">home</Link>
				</li>
				<li>
					<Link to="/login">login</Link>
				</li>
				<li>about</li>
				<li>contact</li>
			</ul>
		</div>
	);
};

export default Header;
