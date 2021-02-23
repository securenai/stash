import React from 'react';
import './Header.css';

export interface HeaderProps {
	text: string;
	num?: number;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
	return <div className="component_header">{text}</div>;
};

export default Header;
