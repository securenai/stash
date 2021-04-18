import React, { useState } from 'react';
// import { Button } from '../../Button/Button';
// import './ImageStashHeader.css';

export interface ImageStashHeaderProps {
	uploadImage: (data: File, name: string) => void;
}

const ImageStashHeader: React.FC<ImageStashHeaderProps> = ({ uploadImage }) => {
	const [imageSrc, setImageSrc] = useState(null);
	const [selectedFile, setSelectedFile] = useState(null);
	const [showUplaodBtn, setShowUplaodBtn] = useState(false);

	const handleFileSelected = (e) => {
		const file = e.target.files[0];
		console.log(file.name);
		setSelectedFile(file);
		const reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]);
		reader.onloadend = () => {
			setImageSrc(reader.result);
			setShowUplaodBtn(true);
		};
	};

	const handleSubmitFile = () => {
		console.log(selectedFile);
		if (!selectedFile) return;
		uploadImage(imageSrc, selectedFile.name.replace(/\.[^/.]+$/, ''));
		setShowUplaodBtn(false);
	};

	return (
		<div>
			<input type="file" name="image" onChange={handleFileSelected} />
			{showUplaodBtn === true ? (
				<button onClick={handleSubmitFile}>upload</button>
			) : null}
		</div>
	);
};

export default ImageStashHeader;