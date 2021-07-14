import React from 'react';
import Search from '../../../../Widgets/Search/Search';
import './StashListHeader.scss';

export interface StashListHeaderProps {
	createStash: () => void;
	onInputChange: (inputValue: string) => void;
}

const StashListHeader: React.FC<StashListHeaderProps> = ({
	createStash,
	onInputChange
}) => {
	return (
		<div className="stashList-header">
			<div className="stashList-header-title">
				<div className="stashList-header-title-name">My Stash</div>
				<div className="add-stash-icon" onClick={createStash}>
					+
				</div>
			</div>
			<Search placeholder="search" onInputChange={onInputChange} />
		</div>
	);
};

export default StashListHeader;
