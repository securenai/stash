import React from 'react';
import AvatarWidgetContainer from '../../../containers/UserInfo/AvatarWidgetContainer';
import Switch from '../../Widgets/Switch/Switch';
import styled from 'styled-components';
import './Settings.scss';
import CloseButton from '../../Widgets/Button/CloseButtons/CloseButton';
import { useTransition, animated } from 'react-spring';
import UserSettings from './SettingsRight/UserSettings';

export interface SettingsProps {
	currentTheme: string;
	setThemeMode: (mode: boolean) => void;
	close: () => void;
	isOpen: boolean;
}

const A_SettingsMain = styled(animated.div)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	z-index: 2;
	color: ${({ theme }) => theme.fontColors.primary};
`;
const SettingsLeft = styled.div`
	height: 100%;
	min-width: 250px;
	width: 20%;
	background-color: ${({ theme }) => theme.colors.secondary};
`;
const SettingsRight = styled.div`
	flex-grow: 3;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.primary};
	display: flex;
	padding: 15px;
`;

const Settings: React.FC<SettingsProps> = ({
	close,
	isOpen,
	setThemeMode,
	currentTheme
}) => {
	const transition = useTransition(isOpen, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		delay: 100
	});

	return transition(
		(styles, item) =>
			item && (
				<A_SettingsMain style={styles}>
					<SettingsLeft>left</SettingsLeft>
					<SettingsRight>
						<UserSettings
							setThemeMode={setThemeMode}
							currentTheme={currentTheme}
						/>
						<CloseButton onButtonClick={close} />
					</SettingsRight>
				</A_SettingsMain>
			)
	);
};

export default Settings;
