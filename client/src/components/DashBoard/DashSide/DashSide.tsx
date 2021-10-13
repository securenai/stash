import React from 'react';
import StashListContainer from '../../../containers/DashSide/StashListContainer';
import UserProfileContainer from '../../../containers/DashSide/UserProfileContainer';
import styled from 'styled-components';

export interface DashSideProps {}

const DashSideBody = styled.div`
	width: 20%;
	min-width: 250px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	border-right: 1px solid rgb(83, 78, 78);
	color: ${({ theme }) => theme.fontColors.primary};
	background-color: ${({ theme }) => theme.colors.secondary};
`;

const DashSide: React.FC<DashSideProps> = () => {
	return (
		<DashSideBody>
			<UserProfileContainer />
			<StashListContainer />
		</DashSideBody>
	);
};

export default DashSide;
