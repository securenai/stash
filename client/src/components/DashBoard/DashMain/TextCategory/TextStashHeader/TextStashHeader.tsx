import React from 'react';
import { AiFillPlusSquare } from 'react-icons/ai';
import styled from 'styled-components';

const AddIcon = styled.div`
	font-size: 40px;
	&:hover {
		color: rgb(159, 211, 125);
	}
`;

export interface TextStashHeaderProps {
	stashId: string;
	addItem: () => void;
}

const TextStashHeader: React.FC<TextStashHeaderProps> = ({ addItem }) => (
	<AddIcon onClick={addItem}>
		<AiFillPlusSquare />
	</AddIcon>
);

export default TextStashHeader;
