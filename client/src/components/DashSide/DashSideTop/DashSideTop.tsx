import React, { useState, useEffect } from 'react';
import './DashSideTop.scss';
import avatar from './assets/avatar.png';
import UserInfoContainer from '../../../containers/UserInfo/UserInfoContainer';

export interface DashSideTopProps {
	userName: string;
	avatarUrl:string;
}

export const DashSideTop: React.FC<DashSideTopProps> = ({ userName, avatarUrl }) => {
	const [openUserInfo, setOpenUserInfo] = useState(false);
	const [avatar, setAvatar] = useState(avatarUrl);

	useEffect(() => {
		setAvatar(avatarUrl)
	}, [avatarUrl])

	return (
		<div className="dashsidetop-container">
			<div className="avatar"
			 	 style={{backgroundImage: `url(${avatar})`}}
				 onClick={() => setOpenUserInfo(!openUserInfo)}>
				{/* <img src={avatar} /> */}
			</div>
			<div className="userName">{userName}</div>
			<>
				{openUserInfo === true ? (
					<UserInfoContainer userName={userName} />
				) : null}
			</>
		</div>
	);
};
