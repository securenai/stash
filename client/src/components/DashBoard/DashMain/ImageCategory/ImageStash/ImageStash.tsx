import React from 'react';
import ImageStashBody from '../ImageStashBody/ImageStashBody';

export interface ImageStashProps {
	// uploadImage: (data, fileName) => void;
	imageFiles: {
		public_id: string;
		bytes: number;
		fileName: string;
		format: string;
	}[];
	imageClicked: (src: string) => void;
	deleteImage: (src: string) => void;
}

const ImageStash: React.FC<ImageStashProps> = ({
	// uploadImage,
	imageFiles,
	imageClicked,
	deleteImage
}) => {
	return (
		<ImageStashBody
			imageFiles={imageFiles}
			imageClicked={imageClicked}
			deleteImage={deleteImage}
		/>
	);
};

export default ImageStash;
