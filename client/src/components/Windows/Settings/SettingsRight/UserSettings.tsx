import React from 'react';
import styled from 'styled-components';
import AvatarWidgetContainer from '../../../../containers/UserInfo/AvatarWidgetContainer';
import ColorPicker from '../../../Widgets/ColorPicker/ColorPicker';
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
	min-width: 310px;
`;
interface ProfileHeaderProps {
	bannerColor: { r: number; g: number; b: number; a: number };
}
const ProfileHeader = styled.div<ProfileHeaderProps>`
	height: 55px;
	background: ${(props) =>
		`rgba(${props.bannerColor.r},${props.bannerColor.g},${props.bannerColor.b},${props.bannerColor.a})` ||
		`rgba(111,111,111,0.3)`};
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	display: flex;
	justify-content: flex-end;
`;
const ProfileBody = styled.div``;
const AvatarWrapper = styled.div`
	position: absolute;
	margin-left: 50px;
	margin-top: 25px;
`;
const UserInfo = styled.div`
	display: flex;
	justify-content: space-between;
	font-family: 'Calamity-Regular';
	padding: 10px;
	align-items: baseline;
`;
const UserName = styled.div`
	margin-left: 125px;
	font-size: 16px;
`;
const UserJoinedDate = styled.div`
	margin-right: 5px;
	font-size: 12px;
`;
const UserControls = styled.div`
	height: 25px;
	display: flex;
	justify-content: flex-end;
	flex-wrap: wrap;
	align-items: center;
`;
const Label = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 160px;
	justify-content: space-evenly;
`;
const LabelTitle = styled.div`
	font-family: 'Calamity-Regular';
	font-size: 12px;
`;

export interface UserSettingsProps {
	currentTheme: string;
	bannerColor: { r: number; g: number; b: number; a: number };
	setThemeMode: (mode: boolean) => void;
	changeColor: (rgba: { r: number; g: number; b: number; a: number }) => void;
	user: {
		name: string;
		createDate: string;
	};
}

const UserSettings: React.FC<UserSettingsProps> = ({
	setThemeMode,
	changeColor,
	currentTheme,
	bannerColor,
	user
}) => {
	// console.log(user.themeColor);
	return (
		<Container>
			<div>
				<Profile>
					<AvatarWrapper>
						<AvatarWidgetContainer />
					</AvatarWrapper>
					<ProfileHeader bannerColor={bannerColor}></ProfileHeader>
					<ProfileBody>
						<UserInfo>
							<UserName>{user.name}</UserName>
							<UserJoinedDate>Joined {user.createDate}</UserJoinedDate>
						</UserInfo>
						<UserControls>
							<Label>
								<LabelTitle>Dark Mode </LabelTitle>
								<Switch
									label="Switch One"
									onToggle={setThemeMode}
									isToggled={currentTheme === 'DARK'}
								/>
							</Label>
							<Label>
								<LabelTitle>Banner Color </LabelTitle>
								<ColorPicker
									initialColor={bannerColor}
									changeColor={changeColor}
								/>
							</Label>
						</UserControls>
					</ProfileBody>
				</Profile>
			</div>
		</Container>
	);
};

export default UserSettings;
