import React from 'react';
import { MdCancel } from 'react-icons/md';
import styled from 'styled-components';

export interface IconButtonCancelProps {
	onClick: (e) => void;
}

const CancelIconButton = styled.div`
	align-self: center;
	margin-right: 5px;
	cursor: pointer;
	padding: 3px;
	border-radius: 3px;
	color: #47525d;
	/* color: ${({ theme }) => theme.fontColors.primary}; */
	&:hover {
		/* background-color: #ddd9d9; */
		color: ${({ theme }) => theme.colors.primary};
	}
`;

const IconButtonCancel: React.FC<IconButtonCancelProps> = ({ onClick }) => {
	return (
		<CancelIconButton className="CancelIcon" onClick={onClick}>
			<MdCancel />
		</CancelIconButton>
	);
};

export default IconButtonCancel;
