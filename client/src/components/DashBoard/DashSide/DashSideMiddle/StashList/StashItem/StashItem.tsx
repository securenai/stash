import React from 'react';
import styled from 'styled-components';
import { TiCode } from 'react-icons/ti';
import { TiImage } from 'react-icons/ti';
import { BsFonts } from 'react-icons/bs';
import IconButtonEdit from '../../../../../Widgets/Button/IconButtons/IconButtonEdit';

const Item = styled.li`
	list-style: none;
	border-radius: 3px;
	cursor: pointer;
	margin: 5px;
	padding: 5px;
	font-weight: 600;
	width: 90%;
	/* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
	background-color: ${({ isCurr, theme }) =>
		isCurr ? 'rgb(138, 28, 61)' : theme.colors.primary};
	color: ${({ isCurr, theme }) =>
		isCurr ? (theme === 'DARK' ? 'black' : 'white') : theme.fontColors.primary};
	&:hover {
		background-color: rgb(67, 93, 121);
		color: ${({ theme }) => (theme === 'DARK' ? 'black' : 'white')};
		.edit {
			display: block;
		}
	}
`;
const ItemBox = styled.div`
	display: flex;
	align-items: center;
`;
const ItemIcon = styled.div`
	margin-right: 10px;
	margin-left: 5px;
	width: 15px;
`;
const ItemName = styled.div`
	flex-grow: 1;
	padding-bottom: 5px;
`;
const ItemEditIcon = styled.div`
	display: none;
`;

export interface StashItemProps {
	itemId: string;
	itemName: string;
	itemType: string;
	onItemClick: (itemId: string, type: string, name: string) => void;
	onIconClick: (itemId: string, type: string, name: string) => void;
	isCurr: boolean;
}

export const StashItem: React.FC<StashItemProps> = ({
	itemId,
	itemName,
	itemType,
	onItemClick,
	onIconClick,
	isCurr
}) => {
	const renderStashIcon = () => {
		if (itemType === 'text') {
			return <BsFonts />;
		} else if (itemType === 'image') {
			return <TiImage />;
		} else if (itemType === 'code') {
			return <TiCode />;
		}
	};

	return (
		<Item
			isCurr={isCurr}
			onClick={() => {
				onItemClick(itemId, itemType, itemName);
			}}>
			<ItemBox>
				<ItemIcon>{renderStashIcon()}</ItemIcon>
				<ItemName>{itemName}</ItemName>
				<ItemEditIcon className="edit">
					<IconButtonEdit
						onClick={(e) => {
							onIconClick(itemId, itemType, itemName);
							e.stopPropagation();
						}}
					/>
				</ItemEditIcon>
			</ItemBox>
		</Item>
	);
};
