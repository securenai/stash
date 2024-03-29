import React from 'react';
import CodeStashContainer from '../../../containers/CodeStash/CodeStashContainer';
import ImageStashContainer from '../../../containers/ImageStash/ImageStashContainer';
import styled from 'styled-components';
import TextStashContainer from '../../../containers/TextStash/TextStashContainer';

const DashMainBody = styled.div`
	display:flex;
	flex-direction: column;
	height: 100vh;
	width: 100%;
	min-width: 600px;
	color: ${({theme}) => theme.fontColors.primary};
	background-color: ${({theme}) => theme.colors.primary};
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
			return <TextStashContainer />;
		} else if (currentStash.type === 'image') {
			return <ImageStashContainer />;
		} else if (currentStash.type === 'code') {
			return <CodeStashContainer />;
		}
	};
	return <DashMainBody>{renderStashTemplate()}</DashMainBody>;
};

export default DashMain;
