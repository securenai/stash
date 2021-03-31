import React from 'react';
import './StashItem.css';

export interface StashItemProps {
	itemId: string;
	itemName: string;
	itemType: string;
	onItemClick: (itemId: string, type: string, name: string) => void;
	isCurr: boolean;
}

export const StashItem: React.FC<StashItemProps> = ({
	itemId,
	itemName,
	itemType,
	onItemClick,
	isCurr
}) => {
	console.log(isCurr);
	return (
		<li
			className={isCurr === true ? 'stash-item curr-item' : 'stash-item'}
			onClick={() => {
				onItemClick(itemId, itemType, itemName);
			}}>
			<div className="item-box">
				<div className="item-icon">{isCurr}</div>
				<div className="item-wrapper">{itemName}</div>
			</div>
		</li>
	);
};
