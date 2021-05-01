import React from 'react';
import CodeStashHeader from '../CodeCategory/CodeStashHeader/CodeStashHeader';
import ImageStashHeader from '../ImageCategory/ImageStashHeader/ImageStashHeader';
import './DashMainHeader.scss';

export interface DashMainHeaderProps {
	stashType: string;
	stashName: string;
	uploadImage?: (data: File, name: string) => void;
}

const DashMainHeader: React.FC<DashMainHeaderProps> = ({
	stashType,
	stashName,
	uploadImage
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

	return (
		<div className="dash-main-header">
			<div>{stashName}</div>
			{renderStashHeaderTemplate()}
		</div>
	);
};

export default DashMainHeader;
