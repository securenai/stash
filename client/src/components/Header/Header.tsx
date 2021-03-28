import React from 'react';
import logo from './assets/stash_logo.png';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './Header.css';
import styled from 'styled-components';
import { NavBar } from '../NavBar/NavBar';

const Logo = styled.h1`
	font-weight: 900;
	font-size: 20px;
	line-height: 1;
	margin: 6px 0 6px 10px;
	display: inline-block;
	vertical-align: top;
`;
const Icon = styled.img`
	height: 25px;
`;

export interface HeaderProps {
	user?: {
		token: string;
		expiresAt: number;
		userInfo: object;
		isAuthenticated: boolean;
	};
}

export const Header: React.FC<HeaderProps> = ({ user }) => {
	const test = () => {
		console.log(user);
	};

	return (
		<header>
			<div className="wrapper">
				<div>
					<Logo>
						<Icon src={logo} onClick={test} />
					</Logo>
				</div>
				<div>
					<NavBar />
				</div>
				<div>
					{user.isAuthenticated ? (
						<Link to="/myDashBoard">
							<Button size="small" label="To DashBoard" />
						</Link>
					) : (
						<>
							<Link to="/login">
								<Button size="small" label="Log In" />
							</Link>
							<Button primary size="small" label="Sign Up" />
						</>
					)}
				</div>
			</div>
		</header>
	);
};
