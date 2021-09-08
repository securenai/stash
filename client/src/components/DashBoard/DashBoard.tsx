import React from 'react';
import DashMain from './DashMain/DashMain';
import DashSide from './DashSide/DashSide';
import styled from 'styled-components';

const DashBoardContainer = styled.div`
	background-color: ${({ theme }) => theme.fontColors.primary};
	display: flex;
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
	sideBarClosed: boolean;
}

const DashBoard: React.FC<DashBoardProps> = ({
	user,
	currentStash,
	sideBarClosed
}) => {
	return (
		<DashBoardContainer>
			{!sideBarClosed && <DashSide />}
			<DashMain currentStash={currentStash} />
		</DashBoardContainer>
	);
};

export default DashBoard;
