import React from 'react';
import logo from './assets/stash_logo.png';
import { Button } from '../../stories/Button';
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
	user?: {};
	onLogin: () => void;
	onLogout: () => void;
	onCreateAccount: () => void;
}

export const Header: React.FC<HeaderProps> = ({
	user,
	onLogin,
	onLogout,
	onCreateAccount
}) => (
	<header>
		<div className="wrapper">
			<div>
				<Logo>
					<Icon src={logo} />
				</Logo>
			</div>
			<div>
				<NavBar />
			</div>
			<div>
				{user ? (
					<Button size="small" onClick={onLogout} label="Log out" />
				) : (
					<>
						<Button size="small" onClick={onLogin} label="Log in" />
						<Button primary size="small" onClick={onCreateAccount} label="Sign up" />
					</>
				)}
			</div>
		</div>
	</header>
);
