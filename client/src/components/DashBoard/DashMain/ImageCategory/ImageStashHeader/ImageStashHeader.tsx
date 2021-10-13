import React, { useEffect, useState } from 'react';
import { VscFileMedia } from 'react-icons/vsc';
import { CrudButton } from '../../../../Widgets/Button/CrudButtons/CrudButton';
import './ImageStashHeader.scss';
import styled from 'styled-components';
import ImageMultiSelectToolBar from './ImageMultiSelectToolBar/ImageMultiSelectToolBar';

const Header = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const UpLoadWrapper = styled.div`
	padding: 0px 10px;
	border: 1px solid #d3caca;
	background-color: black;
	position: relative;
`;
const UploadFileName = styled.span`
	font-family: 'Calamity-Regular';
	font-size: 14px;
`;
const CloseUpload = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 15px;
	height: 15px;
	background-color: #b85454;
	border: 1px solid white;
	border-radius: 50%;
	position: absolute;
	top: -9px;
	left: -8px;
	cursor: pointer;
	&:hover {
		background-color: #b66262;
	}
`;
const CloseUploadIcon = styled.div`
	margin-bottom: 3px;
	margin-right: 1px;
	font-size: 14px;
`;

export interface ImageStashHeaderProps {
	stashId: string;
	uploadImage: (data: File, name: string) => void;
	selectedImages: any;
	batchDelete: () => void;
	batchClear: () => void;
	batchSelect: () => void;
}

const ImageStashHeader: React.FC<ImageStashHeaderProps> = ({
	uploadImage,
	stashId,
	selectedImages,
	batchDelete,
	batchClear,
	batchSelect
}) => {
	const [imageSrc, setImageSrc] = useState(null);
	const [selectedFile, setSelectedFile] = useState(null);
	const [showUploadBtn, setShowUploadBtn] = useState(false);

	useEffect(() => {
		setShowUploadBtn(false);
	}, [stashId]);

	const handleFileSelected = (e) => {
		console.log(e.target.files[0]);
		const file = e.target.files[0];
		setSelectedFile(file);
		const reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]);
		reader.onloadend = () => {
			setImageSrc(reader.result);
			setShowUploadBtn(true);
		};
		e.target.value = null;
	};

	const handleSubmitFile = () => {
		if (!selectedFile) return;
		uploadImage(imageSrc, selectedFile.name.replace(/\.[^/.]+$/, ''));
		setShowUploadBtn(false);
	};

	return (
		<Header>
			{selectedImages.length > 0 && (
				<ImageMultiSelectToolBar
					selectedImages={selectedImages}
					batchDelete={batchDelete}
					batchClear={batchClear}
					batchSelect={batchSelect}
				/>
			)}
			<input
				type="file"
				name="image"
				id="actual-btn"
				onChange={handleFileSelected}
				hidden
			/>
			{showUploadBtn === true ? (
				<UpLoadWrapper>
					<UploadFileName>
						{selectedFile.name.length > 25
							? selectedFile.name.substring(0, 25) + '...'
							: selectedFile.name}
					</UploadFileName>
					<CrudButton
						crudType="upload"
						label="upload"
						onClick={handleSubmitFile}
					/>
					<CloseUpload
						onClick={() => {
							setShowUploadBtn(false);
							setSelectedFile(null);
						}}>
						<CloseUploadIcon>x</CloseUploadIcon>
					</CloseUpload>
				</UpLoadWrapper>
			) : null}
			{!showUploadBtn && (
				<label className="image-upload-btn" htmlFor="actual-btn">
					<VscFileMedia />
				</label>
			)}
		</Header>
	);
};

export default ImageStashHeader;
