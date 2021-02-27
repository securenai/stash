import React from 'react';
import './Header.css';

export interface HeaderProps {
	text: string;
	num?: number;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
	const handleClick = () => {
		console.log('lll');
		fetch('http://localhost:5000/api/users', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data[0][0]._id);
				console.log(data[0][0].user);
				console.log(data[0][1]._id);
				console.log(data[0][1].user);
			});
	};
	return (
		<div className="component_header">
			{text}
			<button onClick={handleClick}>click me</button>
			<div>{}</div>
		</div>
	);
};

export default Header;
