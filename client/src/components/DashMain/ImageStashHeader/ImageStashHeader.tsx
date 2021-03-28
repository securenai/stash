import React, { useState } from 'react';
// import { Button } from '../../Button/Button';
import './ImageStashHeader.css';

export interface ImageStashHeaderProps {
	stashName: string;
	uploadImage: (data: File, name: string) => void;
}

const ImageStashHeader: React.FC<ImageStashHeaderProps> = ({
	stashName,
	uploadImage
}) => {
	const [imageSrc, setImageSrc] = useState(null);
	const [selectedFile, setSelectedFile] = useState(null);

	const handleFileSelected = (e) => {
		const file = e.target.files[0];
		console.log(file.name);
		setSelectedFile(file);
		const reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]);
		reader.onloadend = () => {
			setImageSrc(reader.result);
		};
	};

	const handleSubmitFile = () => {
		console.log(selectedFile);
		if (!selectedFile) return;
		uploadImage(imageSrc, selectedFile.name.replace(/\.[^/.]+$/, ''));
	};

	return (
		<div className="image-stash-header">
			<div>{stashName}</div>
			<div>
				<input type="file" name="image" onChange={handleFileSelected} />
				<button onClick={handleSubmitFile}>upload</button>
			</div>
		</div>
	);
};

export default ImageStashHeader;
