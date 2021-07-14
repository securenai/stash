import React from 'react';
import CodeStashHeader from '../CodeCategory/CodeStashHeader/CodeStashHeader';
import ImageStashHeader from '../ImageCategory/ImageStashHeader/ImageStashHeader';
import './DashMainHeader.scss';
import { TiCode } from 'react-icons/ti';
import { TiImage } from 'react-icons/ti';
import { BsFonts } from 'react-icons/bs';

export interface DashMainHeaderProps {
	stashType: string;
	stashName: string;
	uploadImage?: (data: File, name: string) => void;
	addCodeStashItem?: () => void
}

const DashMainHeader: React.FC<DashMainHeaderProps> = ({
	stashType,
	stashName,
	uploadImage,
	addCodeStashItem
}) => {
	const renderStashHeaderTemplate = () => {
		if (stashType === 'text') {
			return <div>hello!</div>;
		} else if (stashType === 'image') {
			return <ImageStashHeader uploadImage={uploadImage} />;
		} else if (stashType === 'code') {
			return <CodeStashHeader />;
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
	}

	return (
		<div className="dash-main-header">
			<div className="dash-main-header-title">
				<div className="dash-main-header-icon">{stashTypeIcon()}</div>
				<div className="dash-main-header-name">{stashName}</div>
			</div>
			<div className="dash-main-header-content"></div>
			<div className="dash-main-header-add-icon" onClick={addCodeStashItem}>
				{renderStashHeaderTemplate()}
			</div>
		</div>
	);
};

export default DashMainHeader;
