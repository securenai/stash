import React from 'react';
import { selectUser } from '../../slices/userSlice';
import { selectCurrentStash } from '../../slices/appSlice';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import DashBoard from '../../components/DashBoard/DashBoard';

export interface DashBoardContainerProps {}

const DashBoardContainer: React.FC<DashBoardContainerProps> = () => {
	const user = useSelector(selectUser);
	const currentStash = useSelector(selectCurrentStash);
	return (
		<>
			{!user.isAuthenticated && <Redirect to="/Login" />}
			<DashBoard user={user} currentStash={currentStash} />
		</>
	);
};

export default DashBoardContainer;
