import React from 'react';
import DashMain from '../DashMain/DashMain';
import DashSide from '../DashSide/DashSide';
import './DashBoard.css';

export interface DashBoardProps {
	user: {
		token: string;
		expiresAt: number;
		userInfo: {
			name: string;
		};
		isAuthenticated: boolean;
	};
	currentStash: {
		id: string;
		type: string;
	};
}

const DashBoard: React.FC<DashBoardProps> = ({ user, currentStash }) => {
	return (
		<div className="dashboard-container">
			<DashSide user={user} />
			<DashMain currentStash={currentStash} />
		</div>
	);
};

export default DashBoard;
