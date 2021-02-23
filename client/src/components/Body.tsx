import React from 'react';
import imageR from '../images/react.png';
import imageT from '../images/ts.svg';
import imageW from '../images/wp.png';

import './Body.css';
import Customers from './Customers';

export interface BodyProps {}

const Body: React.FC<BodyProps> = () => {
	const handleClick = () => {
		alert('this is react/typescript app!');
	};

	return (
		<div className="component_body">
			<div className="component_body_title">body is here</div>
			<div className="component_body_images">
				<img src={imageR} alt="react" />
				<img src={imageT} alt="typescript" />
				<img src={imageW} alt="webpack" />
			</div>
			<Customers />
			<button className="body_btn" onClick={handleClick}>
				click me
			</button>
		</div>
	);
};

export default Body;
