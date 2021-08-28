import React from 'react';
import styled from 'styled-components';
import ProfilePreference from './ProfilePreference';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

const Container = styled.div`
	width: 90%;
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
	tabNo: number;
}

const UserSettings: React.FC<UserSettingsProps> = ({
	setThemeMode,
	changeColor,
	currentTheme,
	bannerColor,
	user,
	tabNo
}) => {
	const renderTab = () => {
		if (tabNo === 1) {
			return (
				<ProfilePreference
					user={user}
					currentTheme={currentTheme}
					setThemeMode={setThemeMode}
					bannerColor={bannerColor}
					changeColor={changeColor}
				/>
			);
		} else if (tabNo === 2) {
			return <Tab2 />;
		} else if (tabNo === 3) {
			return <Tab3 />;
		} else {
			return <div></div>;
		}
	};

	return <Container>{renderTab()}</Container>;
};

export default UserSettings;
