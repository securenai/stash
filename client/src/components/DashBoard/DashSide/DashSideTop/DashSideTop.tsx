import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import './InfinityBg.scss';

const DashSideTopContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	position: relative;
`;
interface BannerProps {
	bannerColor: { r: number; g: number; b: number; a: number };
}
const Banner = styled.div<BannerProps>`
	position: absolute;
	height: 55px;
	background-color: ${(props) =>
		props.bannerColor
			? `rgba(${props.bannerColor.r},${props.bannerColor.g},${props.bannerColor.b},${props.bannerColor.a})`
			: props.theme.colors.secondary};
	top: 0;
	width: 100%;
`;
const Avatar = styled.div`
	width: 70px;
	height: 70px;
	border: solid rgb(102, 95, 95) 2px;
	border-radius: 50%;
	background-size: 70px 70px;
	cursor: pointer;
	z-index: 1;
	&:hover {
		border-color: ${({ theme }) => theme.fontColors.primary};
	}
`;
const UserName = styled.div`
	margin-top: 10px;
	font-weight: 600;
`;
export interface DashSideTopProps {
	userName: string;
	avatarUrl: string;
	bannerColor: { r: number; g: number; b: number; a: number };
	openUserOptions: () => void;
}

export const DashSideTop: React.FC<DashSideTopProps> = ({
	userName,
	avatarUrl,
	bannerColor,
	openUserOptions
}) => {
	const [avatar, setAvatar] = useState(avatarUrl);

	useEffect(() => {
		setAvatar(avatarUrl);
	}, [avatarUrl]);

	return (
		<DashSideTopContainer>
			<Banner bannerColor={bannerColor}></Banner>
			<Avatar
				style={{ backgroundImage: `url(${avatar})` }}
				onClick={openUserOptions}></Avatar>
			<UserName>{userName}</UserName>
		</DashSideTopContainer>
	);
};
