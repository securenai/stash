import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { DashSideTop } from '../../../src/components/DashBoard/DashSide/DashSideTop/DashSideTop';
import { selectUser, logout } from '../../slices/userSlice';
import { useDispatch } from 'react-redux';
import { UserOptionsModal } from '../../components/DashBoard/DashSide/DashSideTop/UserOptionsModal/UserOptionsModal';
import Settings from '../../components/Windows/Settings/Settings';
import SettingsContainer from '../Settings/SettingsContainer';

export interface UserProfileContainerProps {}

const UserProfileContainer: React.FC<UserProfileContainerProps> = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const [openUserOptionsModal, setOpenUserOptionsModal] = useState(false);
	const [openSettings, setOpenSettings] = useState(false);

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

	const handleOpenSettings = () => {
		setOpenSettings(true);
	};

	const handleCloseSettings = () => {
		setOpenSettings(false);
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
					openSettings={handleOpenSettings}
					closeModal={handleCloseModal}
				/>
			) : null}
			{openSettings === true ? (
				<SettingsContainer
					close={handleCloseSettings}
					isOpen={openSettings}
				/>
			) : null}
		</>
	);
};

export default UserProfileContainer;
