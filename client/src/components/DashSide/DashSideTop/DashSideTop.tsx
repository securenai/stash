import React, { useState } from 'react';
import './DashSideTop.scss';
import avatar from './assets/avatar.png';
import UserInfoContainer from '../../../containers/UserInfo/UserInfoContainer';

export interface DashSideTopProps {
	userName: string;
}

export const DashSideTop: React.FC<DashSideTopProps> = ({ userName }) => {
	const [openUserInfo, setOpenUserInfo] = useState(false);

	return (
		<div className="dashsidetop-container">
			<div className="avatar" onClick={() => setOpenUserInfo(!openUserInfo)}>
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
