import React, { useState, useEffect } from 'react';
import ImageItem from './ImageItem/ImageItem';
import './ImageStashBody.css';

export interface ImageStashBodyProps {
	imageFiles: {
		public_id: string;
		bytes: number;
		fileName: string;
		format: string;
	}[];
}

const ImageStashBody: React.FC<ImageStashBodyProps> = ({ imageFiles }) => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		setImages(imageFiles);
	}, [imageFiles]);

	return (
		<div className="image-stash-body-container">
			{images &&
				images.map((imageFile) => (
					<ImageItem imageFile={imageFile} key={imageFile.public_id} />
				))}
		</div>
	);
};

export default ImageStashBody;
