import React from 'react';
import StashList from '../../containers/StashList/StashList';
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
			<StashList />
		</div>
	);
};

export default DashSide;
