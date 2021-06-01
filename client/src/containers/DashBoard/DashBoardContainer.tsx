import React, { useEffect, useState } from 'react';
import { selectUser } from '../../slices/userSlice';
import { selectCurrentStash } from '../../slices/appSlice';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import DashBoard from '../../components/DashBoard/DashBoard';

export interface DashBoardContainerProps {}

const DashBoardContainer: React.FC<DashBoardContainerProps> = () => {
	const [avatar, setAvatar] = useState('');

	// useEffect(() => {
	// 	if (localStorage.getItem('userAvatar')) {
	// 		setAvatar(localStorage.getItem('userAvatar'));
	// 	}
	// }, [avatar]);

	console.log('db');
	const user = useSelector(selectUser);
	const currentStash = useSelector(selectCurrentStash);
	let name = '';
	// if (user !== null) name = user.userInfo.name;
	console.log(user);
	return (
		<>
			{!user.isAuthenticated && <Redirect to="/Login" />}
			<DashBoard user={user} currentStash={currentStash} />
		</>
	);
};

export default DashBoardContainer;
