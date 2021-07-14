import React, { useEffect, useState } from 'react';
import UserSettings from '../../components/Windows/UserSettings/UserSettings';
import { useDispatch, useSelector} from 'react-redux'
import { setAppTheme } from '../../slices/appSlice'
import { setLocalStorage } from '../../api/utils/localStorageUtils';

export interface UserSettingsContainerProps {
    close: () => void;
}
 
const UserSettingsContainer: React.FC<UserSettingsContainerProps> = ({close}) => {
	const dispatch = useDispatch();

    const handleSetThemeMode = (mode: boolean) => {
        console.log(mode)
        dispatch(setAppTheme({
            currentTheme : mode
        }));
        setLocalStorage({ currentTheme : mode });
    }

    return <UserSettings close={close} setThemeMode={handleSetThemeMode} />;
}
 
export default UserSettingsContainer;