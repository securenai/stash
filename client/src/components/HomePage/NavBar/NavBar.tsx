import React from 'react';
import { NavLink } from '../NavLink/NavLink';
import './NavBar.css';
import styled from 'styled-components';

export interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = () => (
	<ul className="nav">
		<NavLink linkTo="/about" linkName="About" />
		<NavLink linkTo="/contact" linkName="Contact" />
		<NavLink linkTo="/support" linkName="Support" />
		{/* <NavLink linkName="Documentation" /> */}
		<NavLink linkTo="/safety" linkName="Safety" />
	</ul>
);
