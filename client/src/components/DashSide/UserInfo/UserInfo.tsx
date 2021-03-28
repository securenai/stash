import React from 'react';
import './UserInfo.css';
import styled from 'styled-components';

export interface UserInfoProps {
	userName: string;
	onLogout: () => void;
}

export const UserInfo: React.FC<UserInfoProps> = ({ userName, onLogout }) => {
	return (
		<div className="userInfo-container">
			<h4 className="userInfo-name">{userName}</h4>
			<div className="userInfo-option">user settings</div>
			<div className="userInfo-option" onClick={onLogout}>
				Logout
			</div>
		</div>
	);
};
