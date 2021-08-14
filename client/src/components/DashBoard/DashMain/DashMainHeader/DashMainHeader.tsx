import React from 'react';
import CodeStashHeader from '../CodeCategory/CodeStashHeader/CodeStashHeader';
import ImageStashHeader from '../ImageCategory/ImageStashHeader/ImageStashHeader';
import './DashMainHeader.scss';
import styled from 'styled-components';
import { TiCode } from 'react-icons/ti';
import { TiImage } from 'react-icons/ti';
import { BsFonts } from 'react-icons/bs';
import TextStashHeader from '../TextCategory/TextStashHeader/TextStashHeader';

const DashHeaderMain = styled.div`
	height: 40px;
	display: flex;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.fontColors.primary};
	border-bottom: ${({ theme }) => theme.borders.primary};
	padding: 20px 20px 20px 20px;
`;

export interface DashMainHeaderProps {
	stashType: string;
	stashName: string;
	uploadImage?: (data: File, name: string) => void;
	addCodeStashItem?: () => void;
	addTextStashItem?: () => void;
}

const DashMainHeader: React.FC<DashMainHeaderProps> = ({
	stashType,
	stashName,
	uploadImage,
	addCodeStashItem,
	addTextStashItem
}) => {
	const renderStashHeaderTemplate = () => {
		if (stashType === 'text') {
			return <TextStashHeader addItem={addTextStashItem} />;
		} else if (stashType === 'image') {
			return <ImageStashHeader uploadImage={uploadImage} />;
		} else if (stashType === 'code') {
			return <CodeStashHeader addItem={addCodeStashItem} />;
		}
	};
	const stashTypeIcon = () => {
		if (stashType === 'text') {
			return <BsFonts />;
		} else if (stashType === 'image') {
			return <TiImage />;
		} else if (stashType === 'code') {
			return <TiCode />;
		}
	};

	return (
		<DashHeaderMain>
			<div className="dash-main-header-title">
				<div className="dash-main-header-icon">{stashTypeIcon()}</div>
				<div className="dash-main-header-name">{stashName}</div>
			</div>
			<div className="dash-main-header-content"></div>
			<div className="dash-main-header-add-icon">
				{renderStashHeaderTemplate()}
			</div>
		</DashHeaderMain>
	);
};

export default DashMainHeader;
