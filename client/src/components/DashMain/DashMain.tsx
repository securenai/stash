import React from 'react';
import ImageStashContainer from '../../containers/ImageStash/ImageStashContainer';
import './DashMain.css';

export interface DashMainProps {
	currentStash: {
		id: string;
		type: string;
	};
}

const DashMain: React.FC<DashMainProps> = ({ currentStash }) => {
	// console.log(currentStash);
	const renderStashTemplate = () => {
		if (currentStash.type === 'code') {
			return <div>hello!</div>;
		} else if (currentStash.type === 'image') {
			return <ImageStashContainer />;
		}
	};

	return <div className="dashmain-body">{renderStashTemplate()}</div>;
};

export default DashMain;
