import React from 'react';
import ImageStashBody from '../ImageStashBody/ImageStashBody';

export interface ImageStashProps {
	// uploadImage: (data, fileName) => void;
	imageFiles: {
		public_id: string;
		bytes: number;
		fileName: string;
		format: string;
		selected: boolean;
	}[];
	imageClicked: (src: string) => void;
	deleteImage: (src: string) => void;
	pickSelectedImages: (image: any) => void;
	selectedImages: any;
}

const ImageStash: React.FC<ImageStashProps> = ({
	// uploadImage,
	imageFiles,
	imageClicked,
	deleteImage,
	pickSelectedImages,
	selectedImages
}) => {
	return (
		<ImageStashBody
			imageFiles={imageFiles}
			imageClicked={imageClicked}
			deleteImage={deleteImage}
			pickImage={pickSelectedImages}
			selectedImages={selectedImages}
		/>
	);
};

export default ImageStash;
