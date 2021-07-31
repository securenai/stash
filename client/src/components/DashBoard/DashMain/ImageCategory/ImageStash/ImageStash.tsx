import React from 'react';
import ImageStashBody from '../ImageStashBody/ImageStashBody';

export interface ImageStashProps {
	uploadImage: (data, fileName) => void;
	imageFiles: {
		public_id: string;
		bytes: number;
		fileName: string;
		format: string;
	}[];
}

const ImageStash: React.FC<ImageStashProps> = ({ uploadImage, imageFiles }) => {
	return <ImageStashBody imageFiles={imageFiles} />;
};

export default ImageStash;
