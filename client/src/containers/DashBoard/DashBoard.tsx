import React from 'react';
import { selectUser } from '../../slices/userSlice';
import { useSelector } from 'react-redux';
import Header from '../../components/Header2/Header';
import { Redirect } from 'react-router';

export interface DashBoardProps {}

const DashBoard: React.FC<DashBoardProps> = () => {
	console.log('db');
	const user = useSelector(selectUser);
	let name = '';
	// if (user !== null) name = user.userInfo.name;
	console.log(user);
	return (
		<>
			{!user.isAuthenticated && <Redirect to="/Login" />}
			<div>
				<Header />
				welcome {name} , this is dashboard!! it means u logged in!!!
				<div>your info</div>
				<div>username : </div>
				<div>welcome</div>
			</div>
		</>
	);
};

export default DashBoard;
