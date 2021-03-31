import React from 'react';
import './StashListHeader.css';

export interface StashListHeaderProps {
	createStash: () => void;
}

const StashListHeader: React.FC<StashListHeaderProps> = ({ createStash }) => {
	return (
		<div className="stashList-title">
			<span>My Stash</span>
			<span className="add-stash-icon" onClick={createStash}>
				+
			</span>
		</div>
	);
};

export default StashListHeader;
