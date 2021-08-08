import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
	padding: 10px;
	background-color: ${({ theme }) => theme.colors.secondary};
	margin-top: 15px;
	/* opacity: 0.7; */
	font-family: Calamity-Regular;
	font-size: 14px;
	border-radius: 10px;
	/* letter-spacing: 0.5px; */
`;

export interface TextDescriptionProps {
	text: string;
}

const TextDescription: React.FC<TextDescriptionProps> = ({ text }) => {
	return <Text>{text}</Text>;
};

export default TextDescription;
