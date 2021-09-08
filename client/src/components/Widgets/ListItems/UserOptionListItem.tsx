import React from 'react';
import styled from 'styled-components';
import {
	RiSettings3Fill,
	RiLogoutBoxRLine,
	RiEyeOffFill
} from 'react-icons/ri';

export interface UserOptionListItemProps {
	doTask: (task: any) => void;
	iconType: String;
}

const ListItem = styled.div`
	display: flex;
	align-items: center;
	color: black;
	padding: 3px;
	background: #fff;
	border-bottom: 1px solid #e5dada;
	&:hover {
		cursor: pointer;
		background: rgb(194, 192, 192);
	}
`;
const Icon = styled.div`
	padding: 2px 10px;
	color: #4b4646;
	font-size: 20px;
	height: 20px;
`;
const ItemName = styled.div`
	color: #000;
	font-weight: 900;
	/* font-family: Consolas; */
`;

const UserOptionListItem: React.FC<UserOptionListItemProps> = ({
	doTask,
	iconType
}) => {
	const renderIconType = () => {
		if (iconType === 'Settings') {
			return <RiSettings3Fill />;
		} else if (iconType === 'Hide SideBar') {
			return <RiEyeOffFill />;
		} else if (iconType === 'Log Out') {
			return <RiLogoutBoxRLine />;
		}
	};

	return (
		<ListItem onClick={doTask}>
			<Icon>{renderIconType()}</Icon>
			<ItemName>{iconType}</ItemName>
		</ListItem>
	);
};

export default UserOptionListItem;
