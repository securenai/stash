import * as React from 'react';
import { UserInfo } from '../../components/DashSide/DashSideTop/UserInfo/UserInfo';
import { useDispatch } from 'react-redux';
import { logout } from '../../slices/userSlice';

export interface UserInfoContainerProps {
	userName: string;
}

const UserInfoContainer: React.FC<UserInfoContainerProps> = ({ userName }) => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		console.log('ppp');
		dispatch(
			logout({
				token: null,
				expiresAt: null,
				userInfo: {},
				isAuthenticated: null
			})
		);
		localStorage.removeItem('userInfo');
		localStorage.removeItem('token');
		localStorage.removeItem('expiresAt');
	};
	return <UserInfo userName={userName} onLogout={handleLogout} />;
};

export default UserInfoContainer;
