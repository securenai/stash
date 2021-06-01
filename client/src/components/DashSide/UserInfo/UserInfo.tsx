import React, { useState } from 'react';
import './UserInfo.scss';
import styled from 'styled-components';
import UserSettings from '../../../components/Windows/UserSettings/UserSettings';

export interface UserInfoProps {
	userName: string;
	onLogout: () => void;
}

export const UserInfo: React.FC<UserInfoProps> = ({ userName, onLogout }) => {
	const [openUserSettings, setOpenUserSettings] = useState(false);

	const handleCloseUserSettings = () => {
		setOpenUserSettings(false);
	};

	return (
		<>
			<div className="userInfo-container">
				<h4 className="userInfo-name">{userName}</h4>
				<div
					className="userInfo-option"
					onClick={() => setOpenUserSettings(true)}>
					user settings
				</div>
				<div className="userInfo-option" onClick={onLogout}>
					Logout
				</div>
			</div>
			{openUserSettings === true ? (
				<UserSettings close={handleCloseUserSettings} />
			) : null}
		</>
	);
};
