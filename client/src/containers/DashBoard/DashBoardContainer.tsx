import React from 'react';
import { selectUser } from '../../slices/userSlice';
import { selectCurrentStash, selectSideBarClosed } from '../../slices/appSlice';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import DashBoard from '../../components/DashBoard/DashBoard';

export interface DashBoardContainerProps {}

const DashBoardContainer: React.FC<DashBoardContainerProps> = () => {
	const user = useSelector(selectUser);
	const currentStash = useSelector(selectCurrentStash);
	const sideBarClosed = useSelector(selectSideBarClosed);
	return (
		<>
			{!user.isAuthenticated && <Redirect to="/Login" />}
			<DashBoard
				user={user}
				currentStash={currentStash}
				sideBarClosed={sideBarClosed}
			/>
		</>
	);
};

export default DashBoardContainer;
