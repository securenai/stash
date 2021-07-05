import React from 'react';
import { StashItem } from './StashItem/StashItem';
import './StashList.css';

export interface StashListProps {
	stashItems: { _id: string; name: string; type: string }[];
	currentStash: { id: string; name: string; type: string };
	itemClick: (id: string, type: string, name: string) => void;
}

const StashList: React.FC<StashListProps> = ({
	stashItems,
	currentStash,
	itemClick
}) => {
	return (
		<ul className="stashList-list">
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
				<div>no stash found</div>
			)}
		</ul>
	);
};

export default StashList;
