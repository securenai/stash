import React from 'react';
import AvatarWidgetContainer from '../../../containers/UserInfo/AvatarWidgetContainer';
// import AvatarWidget from './AvatarWidget/AvatarWidget';
import './UserSettings.scss';

export interface UserSettingsProps {
	close: () => void;
}

const UserSettings: React.FC<UserSettingsProps> = ({ close }) => {
	return (
		<div className="userSettings">
			<div className="userSettings__left">left</div>
			<div className="userSettings__right">
				<div className="userSettings__right__main">
					<div>
						{/* <AvatarWidget /> */}
						<AvatarWidgetContainer />
					</div>
				</div>
				<div className="userSettings__right__close">
					<div className="userSettings__right__close--button" onClick={close}>
						<svg
							className="userSettings__right__close--close_svg"
							aria-hidden="true"
							width="18"
							height="18"
							viewBox="0 0 24 24">
							<path
								fill="#dcddde"
								d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6
                                   20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserSettings;
