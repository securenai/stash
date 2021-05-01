import React from 'react';
import './StashItem.css';
import { TiCode } from 'react-icons/ti';
import { TiImage } from 'react-icons/ti';
import { BsFonts } from 'react-icons/bs';

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
		<li
			className={isCurr === true ? 'stash-item curr-item' : 'stash-item'}
			onClick={() => {
				onItemClick(itemId, itemType, itemName);
			}}>
			<div className="item-box">
				<div className="item-icon">{renderStashIcon()}</div>
				<div className="item-wrapper">{itemName}</div>
			</div>
		</li>
	);
};
