import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
import './ImageItem.scss';

export interface ImageItemProps {
	imageFile: {
		public_id: string;
		bytes: number;
		fileName: string;
		format: string;
	};
}

const ImageItem: React.FC<ImageItemProps> = ({ imageFile }) => {
	return (
		<div className="image-placeholder">
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
};

export default ImageItem;
