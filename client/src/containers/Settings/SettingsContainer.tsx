import React, { useEffect, useState } from 'react';
import Settings from '../../components/Windows/Settings/Settings';
import { useDispatch, useSelector } from 'react-redux';
import {
	setAppTheme,
	setBannerColor,
	selectCurrentTheme,
	selectBannerColor
} from '../../slices/appSlice';
import { setUserInfo, selectUser } from '../../slices/userSlice';
import { setLocalStorage } from '../../api/utils/localStorageUtils';

export interface SettingsContainerProps {
	close: () => void;
	isOpen: boolean;
}

const SettingsContainer: React.FC<SettingsContainerProps> = ({
	close,
	isOpen
}) => {
	const dispatch = useDispatch();
	const currentTheme = useSelector(selectCurrentTheme);
	const bannerColor = useSelector(selectBannerColor);
	const user = useSelector(selectUser);
	const [tabNo, setTabNo] = useState(1);

	const handleSetThemeMode = (mode: boolean) => {
		dispatch(
			setAppTheme({
				currentTheme: mode ? 'DARK' : 'LIGHT'
			})
		);
		setLocalStorage({ currentTheme: mode ? 'DARK' : 'LIGHT' });
	};

	const handleChangeColor = (rgba: {
		r: number;
		g: number;
		b: number;
		a: number;
	}) => {
		dispatch(
			setBannerColor({
				bannerColor: rgba
			})
		);
		setLocalStorage({ bannerColor: rgba });
	};

	const handleSetTabNo = (tabNo: number) => {
		setTabNo(tabNo);
	};

	return (
		<Settings
			tabNo={tabNo}
			setTabNo={handleSetTabNo}
			close={close}
			isOpen={isOpen}
			setThemeMode={handleSetThemeMode}
			changeColor={handleChangeColor}
			currentTheme={currentTheme}
			bannerColor={bannerColor}
			user={user.userInfo}
		/>
	);
};

export default SettingsContainer;
