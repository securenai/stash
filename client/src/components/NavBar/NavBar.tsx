import React from 'react';
import { NavLink } from '../NavLink/NavLink';
import './NavBar.css';
import styled from 'styled-components';

export interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = () => (
	<ul className="nav">
		<NavLink linkName="About" />
		<NavLink linkName="Contact" />
		<NavLink linkName="Support" />
		<NavLink linkName="Documentation" />
		<NavLink linkName="Safety" />
	</ul>
);
