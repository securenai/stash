import React from 'react';
import './ImageStash.css';
import ImageStashHeader from '../ImageStashHeader/ImageStashHeader';
import ImageStashBody from '../ImageStashBody/ImageStashBody';
import DashMainHeader from '../../DashMainHeader/DashMainHeader';

export interface ImageStashProps {
	currentStash: {
		id: string;
		type: string;
		name: string;
	};
	uploadImage: (data, fileName) => void;
	imageFiles: {
		public_id: string;
		bytes: number;
		fileName: string;
		format: string;
	}[];
}

const ImageStash: React.FC<ImageStashProps> = ({
	currentStash,
	uploadImage,
	imageFiles,
}) => {
	return (
		<div className="image-stash-wrapper">
			<div>
				{/* <ImageStashHeader
					stashName={currentStash.name}
					uploadImage={uploadImage}
				/> */}
				<DashMainHeader
					stashType="image"
					stashName={currentStash.name}
					uploadImage={uploadImage}
				/>
				<ImageStashBody imageFiles={imageFiles} />
			</div>
		</div>
	);
};

export default ImageStash;
