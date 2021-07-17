import React from 'react';
import { StashItem } from './StashItem/StashItem';
import styled from 'styled-components';

export interface StashListProps {
	stashItems: { _id: string; name: string; type: string }[];
	currentStash: { id: string; name: string; type: string };
	itemClick: (id: string, type: string, name: string) => void;
}

const StashItemList = styled.ul`
	margin: 0;
	padding: 10px;
	height: 450px;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		width: 8px;
		background-color: ${({ theme }) => theme.colors.primary};
		border-radius: 10px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.colors.secondary};
		border-radius: 10px;
	}
`;

const StashList: React.FC<StashListProps> = ({
	stashItems,
	currentStash,
	itemClick
}) => {
	return (
		<StashItemList>
			{stashItems.length ? (
				stashItems.map((item) => {
					const isCurr = item._id === currentStash.id;
					return (
						<StashItem
							itemId={item._id}
							itemName={item.name}
							itemType={item.type}
							onItemClick={itemClick}
							isCurr={isCurr}
							key={item._id}
						/>
					);
				})
			) : (
				<div></div>
			)}
		</StashItemList>
	);
};

export default StashList;
