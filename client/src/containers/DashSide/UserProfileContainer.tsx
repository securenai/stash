import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { DashSideTop } from '../../../src/components/DashSide/DashSideTop/DashSideTop';
import { selectUser, logout } from '../../slices/userSlice';
import { useDispatch } from 'react-redux';
import { UserOptionsModal } from '../../components/DashSide/DashSideTop/UserOptionsModal/UserOptionsModal';
import UserSettings from '../../components/Windows/UserSettings/UserSettings';

export interface UserProfileContainerProps {}

const UserProfileContainer: React.FC<UserProfileContainerProps> = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const [openUserOptionsModal, setOpenUserOptionsModal] = useState(false);
	const [openUserSettings, setOpenUserSettings] = useState(false);

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

	const handleCloseModal = () => {
		setOpenUserOptionsModal(false);
	};

	const handleOpenModal = () => {
		console.log('open');
		setOpenUserOptionsModal(true);
	};

	const handleOpenUserSettings = () => {
		setOpenUserSettings(true);
	};

	const handleCloseUserSettings = () => {
		setOpenUserSettings(false);
	};

	return (
		<>
			<DashSideTop
				userName={user.userInfo.name}
				avatarUrl={user.userInfo.avatarUrl}
				openUserOptions={handleOpenModal}
			/>
			{openUserOptionsModal === true ? (
				<UserOptionsModal
					userName={user.userInfo.name}
					onLogout={handleLogout}
					openUserSettings={handleOpenUserSettings}
					closeModal={handleCloseModal}
				/>
			) : null}
			{openUserSettings === true ? (
				<UserSettings close={handleCloseUserSettings} />
			) : null}
		</>
	);
};

export default UserProfileContainer;
