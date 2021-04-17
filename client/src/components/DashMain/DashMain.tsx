import React from 'react';
import CodeStashContainer from '../../containers/CodeStash/CodeStashContainer';
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
		if (currentStash.type === 'text') {
			return <div>hello!</div>;
		} else if (currentStash.type === 'image') {
			return <ImageStashContainer />;
		} else if (currentStash.type === 'code') {
			return <CodeStashContainer />;
		}
	};

	return <div className="dashmain-body">{renderStashTemplate()}</div>;
};

export default DashMain;
