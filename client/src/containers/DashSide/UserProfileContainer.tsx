import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { DashSideTop } from '../../../src/components/DashBoard/DashSide/DashSideTop/DashSideTop';
import { selectUser, logout } from '../../slices/userSlice';
import { useDispatch } from 'react-redux';
import { UserOptionsModal } from '../../components/DashBoard/DashSide/DashSideTop/UserOptionsModal/UserOptionsModal';
import UserSettings from '../../components/Windows/UserSettings/UserSettings';
import UserSettingsContainer from '../UserSettings/UserSettingsContainer';

export interface UserProfileContainerProps {}

const UserProfileContainer: React.FC<UserProfileContainerProps> = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const [openUserOptionsModal, setOpenUserOptionsModal] = useState(false);
	const [openUserSettings, setOpenUserSettings] = useState(false);

	const handleLogout = () => {
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
				<UserSettingsContainer
					close={handleCloseUserSettings}
					isOpen={openUserSettings}
				/>
			) : null}
		</>
	);
};

export default UserProfileContainer;
