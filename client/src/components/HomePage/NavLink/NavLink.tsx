import React from 'react';
import './NavLink.css';
import { NavLink as Link, MemoryRouter } from 'react-router-dom';
import styled from 'styled-components';

export interface NavLinkProps {
	linkName: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ linkName }) => {
	return (
		<li className="link-item">
			<MemoryRouter>
				<Link to="#" className="nav-link">
					{typeof linkName !== 'undefined' ? linkName : 'Link'}
				</Link>
			</MemoryRouter>
		</li>
	);
};
