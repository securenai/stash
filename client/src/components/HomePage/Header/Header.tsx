import React from 'react';
import logo from './assets/stash_logo.png';
import { Link } from 'react-router-dom';
import { Button } from '../../Widgets/Button/Button';
import './Header.scss';
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
	return (
		<header>
			<div className="wrapper">
				<div>
					<Logo>
						<Link to="/">
							<Icon src={logo} />
						</Link>
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
							<Link to="/signup">
								<Button primary size="small" label="Sign Up" />
							</Link>
						</>
					)}
				</div>
			</div>
		</header>
	);
};
