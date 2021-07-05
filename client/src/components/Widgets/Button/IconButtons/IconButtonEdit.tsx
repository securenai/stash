import React from 'react';
import { TiPencil } from 'react-icons/ti';
import styled from 'styled-components';

export interface IconButtonEditProps {
	onClick: (e) => void;
}

const EditIconButton = styled.div`
	align-self: center;
	margin-right: 5px;
	cursor: pointer;
	padding: 3px;
	border-radius: 3px;
	&:hover {
		background-color: #494545;
	}
`;

const IconButtonEdit: React.FC<IconButtonEditProps> = ({ onClick }) => {
	return (
		<EditIconButton className="editIcon" onClick={onClick}>
			<TiPencil />
		</EditIconButton>
	);
};

export default IconButtonEdit;
