import React from 'react';
import DashMain from './DashMain/DashMain';
import DashSide from './DashSide/DashSide';
import styled from 'styled-components';

const DashBoardContainer = styled.div`
	background-color: rgb(49, 50, 56);
	display: flex;
	flex-direction: row;
	overflow: hidden;
`;

export interface DashBoardProps {
	user: {
		token: string;
		expiresAt: number;
		userInfo: {
			name: string;
			avatarUrl: string;
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
		<DashBoardContainer>
			<DashSide />
			<DashMain currentStash={currentStash} />
		</DashBoardContainer>
	);
};

export default DashBoard;
