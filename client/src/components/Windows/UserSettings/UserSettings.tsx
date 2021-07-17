import React from 'react';
import AvatarWidgetContainer from '../../../containers/UserInfo/AvatarWidgetContainer';
import Switch from '../../Widgets/Switch/Switch';
import styled from 'styled-components';
import './UserSettings.scss';
import CloseButton from '../../Widgets/Button/CloseButtons/CloseButton';

export interface UserSettingsProps {
	currentTheme: string;
	setThemeMode: (mode: boolean) => void;
	close: () => void;
}

const UserSettingsMain = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	z-index: 1;
	color: ${({ theme }) => theme.fontColors.primary};
`;
const UserSettingsLeft = styled.div`
	height: 100%;
	width: 30%;
	background-color: ${({ theme }) => theme.colors.secondary};
`;
const UserSettingsRight = styled.div`
	flex-grow: 3;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.primary};
	display: flex;
	padding: 2%;
`;

const UserSettings: React.FC<UserSettingsProps> = ({
	close,
	setThemeMode,
	currentTheme
}) => {
	return (
		<UserSettingsMain>
			<UserSettingsLeft>
				left
				<div className="label1">
					<div className="label1-title">Dark Mode </div>
					<Switch
						label="Switch One"
						onToggle={setThemeMode}
						isToggled={currentTheme === 'DARK'}
					/>
				</div>
			</UserSettingsLeft>
			<UserSettingsRight>
				<div className="userSettings__right__main">
					<AvatarWidgetContainer />
				</div>
				<CloseButton onButtonClick={close} />
			</UserSettingsRight>
		</UserSettingsMain>
	);
};

export default UserSettings;
