import React from 'react';
import './ImageStash.css';
import ImageStashHeader from '../ImageStashHeader/ImageStashHeader';
import ImageStashBody from '../ImageStashBody/ImageStashBody';

export interface ImageStashProps {
	currentStash: {
		id: string;
		type: string;
		name: string;
	};
	uploadImage: (data, fileName) => void;
	imageIds: string[];
}

const ImageStash: React.FC<ImageStashProps> = ({
	currentStash,
	uploadImage,
	imageIds
}) => {
	return (
		<div className="image-stash-wrapper">
			<div>
				<ImageStashHeader
					stashName={currentStash.name}
					uploadImage={uploadImage}
				/>
				<ImageStashBody imageIds={imageIds} />
			</div>
		</div>
	);
};

export default ImageStash;
