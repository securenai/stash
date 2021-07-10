import React from 'react';
import StashListContainer from '../../containers/DashSide/StashListContainer';
import UserProfileContainer from '../../containers/DashSide/UserProfileContainer';
import './DashSide.css';

export interface DashSideProps {}

const DashSide: React.FC<DashSideProps> = () => {
	return (
		<div className="dashside-body">
			<UserProfileContainer />
			<StashListContainer />
		</div>
	);
};

export default DashSide;
