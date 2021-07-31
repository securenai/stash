import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
import './ImageItem.scss';
import styled from 'styled-components';

const ImagePlaceholder = styled.div`
	margin: 10px;
	width: 235px;
	height: 195px;
	border: 1px solid black;
	object-fit: fill;
	background-color: ${({ theme }) => theme.colors.primary};
	display: flex;
	align-items: flex-start;
	cursor: pointer;
	display: flex;
	flex-direction: column;
`;
const CloudinaryImagePlaceholder = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 158px;
	margin: auto;
`;
const ImageName = styled.div`
	background-color: ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.fontColors.secondary};
	border-bottom: ${({ theme }) => theme.borders.primary};
	width: 229px;
	font-weight: 600;
	padding: 3px;
	font-size: 10px;
	height: 12px;
`;
const ImageDesc = styled.div`
	background-color: ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.fontColors.secondary};
	width: 229px;
	font-weight: 600;
	padding: 3px;
	font-size: 10px;
	height: 12px;
`;

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
		<ImagePlaceholder>
			<CloudinaryImagePlaceholder>
				<Image
					className="cloudinary-img"
					cloudName="dfkw9hdq3"
					publicId={imageFile.public_id}>
					<Transformation width="350" fetchFormat="auto" crop="scale" />
				</Image>
			</CloudinaryImagePlaceholder>
			<ImageName>
				{imageFile.fileName.length > 36
					? `${imageFile.fileName.substring(0, 33)}...`
					: imageFile.fileName}
			</ImageName>
			<ImageDesc>
				{imageFile.format} - {imageFile.bytes}bytes
			</ImageDesc>
		</ImagePlaceholder>
	);
};

export default ImageItem;
