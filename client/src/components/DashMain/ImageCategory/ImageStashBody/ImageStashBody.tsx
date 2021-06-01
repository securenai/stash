import React, { useState } from 'react';
import './ImageStashBody.css';
import { Image, Transformation } from 'cloudinary-react';

export interface ImageStashBodyProps {
	imageFiles: {
		public_id: string;
		bytes: number;
		fileName: string;
		format: string;
	}[];
}

const ImageStashBody: React.FC<ImageStashBodyProps> = ({ imageFiles }) => {
	return (
		<div className="image-stash-body-container">
			{imageFiles &&
				imageFiles.map((imageFile, index) => {
					// console.log(imageId);
					// return <div>{imageId}</div>;
					return (
						<div className="image-placeholder" key={index.toString()}>
							<div className="cloudinary-img-placeholder">
								<Image
									className="cloudinary-img"
									cloudName="dfkw9hdq3"
									publicId={imageFile.public_id}>
									<Transformation width="350" fetchFormat="auto" crop="scale" />
								</Image>
							</div>
							<div className="img-name">{imageFile.fileName}</div>
							<div className="img-desc">
								{imageFile.format} - {imageFile.bytes}bytes
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default ImageStashBody;
