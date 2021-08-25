import React, { useEffect, useState } from 'react';
import Settings from '../../components/Windows/Settings/Settings';
import { useDispatch, useSelector } from 'react-redux';
import { setAppTheme, selectCurrentTheme } from '../../slices/appSlice';
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
		<Settings
			close={close}
			isOpen={isOpen}
			setThemeMode={handleSetThemeMode}
			currentTheme={currentTheme}
		/>
	);
};

export default SettingsContainer;
