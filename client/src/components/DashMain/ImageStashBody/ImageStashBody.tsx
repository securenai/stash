import React, { useState } from 'react';
import './ImageStashBody.css';
import { Image, Transformation } from 'cloudinary-react';

export interface ImageStashBodyProps {
	imageIds: string[];
}

const ImageStashBody: React.FC<ImageStashBodyProps> = ({ imageIds }) => {
	return (
		<div className="image-stash-body-container">
			{imageIds &&
				imageIds.map((imageId, index) => {
					console.log(imageId);
					// return <div>{imageId}</div>;
					return (
						<Image
							key={index.toString()}
							cloudName="dfkw9hdq3"
							publicId={imageId}>
							<Transformation width="350" fetchFormat="auto" crop="scale" />
						</Image>
					);
				})}
		</div>
	);
};

export default ImageStashBody;
