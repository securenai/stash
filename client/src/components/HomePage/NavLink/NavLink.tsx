import React from 'react';
import './NavLink.css';
import { NavLink as Link, MemoryRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

export interface NavLinkProps {
	linkName: string;
	linkTo: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ linkName, linkTo }) => {
	const location = useLocation();
	const isActive = location.pathname === linkTo;

	return (
		<li className={`link-item ${isActive ? 'activeLinkItem' : ''}`}>
			{/* <MemoryRouter> */}
			<Link to={linkTo} className={`nav-link ${isActive ? 'activeLink' : ''}`}>
				{typeof linkName !== 'undefined' ? linkName : 'Link'}
			</Link>
			{/* </MemoryRouter> */}
		</li>
	);
};
