import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
	padding: 10px;
`;

export interface TextDescriptionProps {
	text: string;
}

const TextDescription: React.FC<TextDescriptionProps> = ({ text }) => {
	return <Text>{text}</Text>;
};

export default TextDescription;
