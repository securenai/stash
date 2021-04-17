import React from 'react';
import StashListContainer from '../../containers/StashList/StashListContainer';
import './DashSide.css';
import { DashSideTop } from './DashSideTop/DashSideTop';

export interface DashSideProps {
	user: {
		token: string;
		expiresAt: number;
		userInfo: {
			name: string;
		};
		isAuthenticated: boolean;
	};
}

const DashSide: React.FC<DashSideProps> = ({ user }) => {
	return (
		<div className="dashside-body">
			<DashSideTop userName={user.userInfo.name} />
			<StashListContainer />
		</div>
	);
};

export default DashSide;
