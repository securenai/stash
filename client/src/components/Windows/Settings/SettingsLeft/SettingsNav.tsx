import React, { useState } from 'react';
import './SettingsNav.scss';

export interface SettingsNavProps {
	tabNo: number;
	setTabNo: (tabNo: number) => void;
}

const SettingsNav: React.FC<SettingsNavProps> = ({ tabNo, setTabNo }) => {
	// const [tab, setTab] = useState(1);

	return (
		<nav className="channel__settings_sidebar_nav">
			<div className="channel__settings_sidebar_nav_side">
				<div className="channel__settings_sidebar_nav_side_header">
					<span>
						{/* # {channelData.channelName + ' '} */}
						<span className="channel__settings_sidebar_nav_side_category">
							User Settings
						</span>
					</span>
				</div>
				{[
					'Profile & Preferences',
					'App Settings',
					'Billing & License',
					'Shared History',
					'Support'
				].map((item, index) => {
					return (
						<div
							className={`channel__settings_sidebar_nav_side_item ${
								tabNo === index + 1 ? 'current-tab' : ''
							}`}
							onClick={() => setTabNo(index + 1)}
							key={index.toString()}>
							{item}
						</div>
					);
				})}
				<div className="channel__settings_sidebar_nav_side_separator"></div>
				<div className="channel__settings_sidebar_nav_side_item item_del">
					Delete Account
				</div>
			</div>
		</nav>
	);
};

export default SettingsNav;
