import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { DashSideTop } from '../../../src/components/DashBoard/DashSide/DashSideTop/DashSideTop';
import {
	selectUser,
	logout,
	setUserInfo,
	setUserStashList,
	setUserPlanner
} from '../../slices/userSlice';
import {
	selectBannerColor,
	selectSideBarClosed,
	setSideBarClosed
} from '../../slices/appSlice';
import { useDispatch } from 'react-redux';
import { UserOptionsModal } from '../../components/DashBoard/DashSide/DashSideTop/UserOptionsModal/UserOptionsModal';
import Settings from '../../components/Windows/Settings/Settings';
import SettingsContainer from '../Settings/SettingsContainer';

export interface UserProfileContainerProps {}

const UserProfileContainer: React.FC<UserProfileContainerProps> = () => {
	const user = useSelector(selectUser);
	const bannerColor = useSelector(selectBannerColor);
	const sideBarClosed = useSelector(selectSideBarClosed);
	const dispatch = useDispatch();
	const [openUserOptionsModal, setOpenUserOptionsModal] = useState(false);
	const [openSettings, setOpenSettings] = useState(false);

	const handleLogout = () => {
		dispatch(setUserInfo(null));
		dispatch(setUserStashList(null));
		dispatch(setUserPlanner(null));
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
		setOpenUserOptionsModal(true);
	};

	const handleOpenSettings = () => {
		setOpenSettings(true);
	};

	const handleCloseSettings = () => {
		setOpenSettings(false);
	};

	const handleCloseSideBar = () => {
		dispatch(setSideBarClosed({ sideBarClosed: true }));
	};

	return (
		<>
			<DashSideTop
				userName={user.userInfo.name}
				bannerColor={bannerColor}
				avatarUrl={user.userInfo.avatarUrl}
				openUserOptions={handleOpenModal}
			/>
			{openUserOptionsModal === true ? (
				<UserOptionsModal
					userName={user.userInfo.name}
					onLogout={handleLogout}
					closeSideBar={handleCloseSideBar}
					openSettings={handleOpenSettings}
					closeModal={handleCloseModal}
				/>
			) : null}
			{openSettings === true ? (
				<SettingsContainer close={handleCloseSettings} isOpen={openSettings} />
			) : null}
		</>
	);
};

export default UserProfileContainer;
