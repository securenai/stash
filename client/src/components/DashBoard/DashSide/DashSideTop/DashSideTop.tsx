import React, { useState, useEffect } from 'react';
import './DashSideTop.scss';
// import './InfinityBg.scss';
import avatar from './assets/avatar.png';

export interface DashSideTopProps {
	userName: string;
	avatarUrl: string;
	openUserOptions: () => void;
}

export const DashSideTop: React.FC<DashSideTopProps> = ({
	userName,
	avatarUrl,
	openUserOptions
}) => {
	const [openUserInfo, setOpenUserInfo] = useState(false);
	const [avatar, setAvatar] = useState(avatarUrl);

	useEffect(() => {
		setAvatar(avatarUrl);
	}, [avatarUrl]);

	return (
		<div className="dashsidetop-container aaa">
			{/* <div className="avatar-mask"></div> */}
			<div
				className="avatar"
				style={{ backgroundImage: `url(${avatar})` }}
				onClick={openUserOptions}>
				{/* <img src={avatar} /> */}
			</div>
			<div className="userName">{userName}</div>
		</div>
	);
};
