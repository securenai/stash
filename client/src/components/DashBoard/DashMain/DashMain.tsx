import React from 'react';
import CodeStashContainer from '../../../containers/CodeStash/CodeStashContainer';
import ImageStashContainer from '../../../containers/ImageStash/ImageStashContainer';
import styled from 'styled-components';

const DashMainBody = styled.div`
	height: 100vh;
	width: 100%;
	min-width: 600px;
	background-color: rgb(49, 50, 56);
`;

export interface DashMainProps {
	currentStash: {
		id: string;
		type: string;
	};
}

const DashMain: React.FC<DashMainProps> = ({ currentStash }) => {
	const renderStashTemplate = () => {
		if (currentStash.type === 'text') {
			return <div>hello!</div>;
		} else if (currentStash.type === 'image') {
			return <ImageStashContainer />;
		} else if (currentStash.type === 'code') {
			return <CodeStashContainer />;
		}
	};
	return <DashMainBody>{renderStashTemplate()}</DashMainBody>;
};

export default DashMain;
