import React, { useState } from 'react';
// import { Button } from '../../Button/Button';
// import './CodeStashHeader.css';

export interface CodeStashHeaderProps {}

const CodeStashHeader: React.FC<CodeStashHeaderProps> = ({}) => {
	// const [imageSrc, setImageSrc] = useState(null);
	// const [selectedFile, setSelectedFile] = useState(null);
	// const [showUplaodBtn, setShowUplaodBtn] = useState(false);

	const handleFileSelected = (e) => {
		// const file = e.target.files[0];
		// console.log(file.name);
		// setSelectedFile(file);
		// const reader = new FileReader();
		// reader.readAsDataURL(e.target.files[0]);
		// reader.onloadend = () => {
		// 	setImageSrc(reader.result);
		// 	setShowUplaodBtn(true);
		// };
	};

	const handleSubmitFile = () => {
		// console.log(selectedFile);
		// if (!selectedFile) return;
		// uploadImage(imageSrc, selectedFile.name.replace(/\.[^/.]+$/, ''));
		// setShowUplaodBtn(false);
	};

	return <div>hello!!!</div>;
};

export default CodeStashHeader;
