import React, { useEffect, useState } from 'react';
import UserSettings from '../../components/Windows/UserSettings/UserSettings';
import { useDispatch, useSelector } from 'react-redux';
import { setAppTheme, selectCurrentTheme } from '../../slices/appSlice';
import { setLocalStorage } from '../../api/utils/localStorageUtils';

export interface UserSettingsContainerProps {
	close: () => void;
}

const UserSettingsContainer: React.FC<UserSettingsContainerProps> = ({
	close
}) => {
	const dispatch = useDispatch();
	const currentTheme = useSelector(selectCurrentTheme);

	const handleSetThemeMode = (mode: boolean) => {
		console.log(mode);
		dispatch(
			setAppTheme({
				currentTheme: mode ? 'DARK' : 'LIGHT'
			})
		);
		setLocalStorage({ currentTheme: mode ? 'DARK' : 'LIGHT' });
	};

	return (
		<UserSettings
			close={close}
			setThemeMode={handleSetThemeMode}
			currentTheme={currentTheme}
		/>
	);
};

export default UserSettingsContainer;
