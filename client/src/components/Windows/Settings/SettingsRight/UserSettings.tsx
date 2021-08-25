import React from 'react';
import styled from 'styled-components';
import AvatarWidgetContainer from '../../../../containers/UserInfo/AvatarWidgetContainer';
import Switch from '../../../Widgets/Switch/Switch';

const Container = styled.div`
	width: 90%;
`;
const Profile = styled.div`
	height: 150px;
	margin: 10px 20px;
	background-color: ${({ theme }) => theme.colors.secondary};
	position: relative;
	border-radius: 10px;
`;
const ProfileHeader = styled.div`
	height: 55px;
	background: cadetblue;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;
const ProfileBody = styled.div``;
const AvatarWrapper = styled.div`
	position: absolute;
	margin-left: 50px;
	margin-top: 15px;
`;

export interface UserSettingsProps {
	currentTheme: string;
	setThemeMode: (mode: boolean) => void;
}

const UserSettings: React.FC<UserSettingsProps> = ({
	setThemeMode,
	currentTheme
}) => {
	return (
		<Container>
			<div>
				<Profile>
					<AvatarWrapper>
						<AvatarWidgetContainer />
					</AvatarWrapper>
					<ProfileHeader></ProfileHeader>
					<ProfileBody></ProfileBody>
				</Profile>

				<div className="label1">
					<div className="label1-title">Dark Mode </div>
					<Switch
						label="Switch One"
						onToggle={setThemeMode}
						isToggled={currentTheme === 'DARK'}
					/>
				</div>
			</div>
		</Container>
	);
};

export default UserSettings;
