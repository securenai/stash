import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Image, Transformation } from 'cloudinary-react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import _ from 'lodash';
// import ImageViewer from '../../../../../Widgets/Viewer/ImageViewer/ImageViewer';

const useStyles = makeStyles(() => ({
	cloudinaryImg: {
		maxWidth: '100%',
		maxHeight: '100%',
		alignSelf: 'center'
	}
}));

const A_ImagePlaceholder = styled(animated.div)`
	margin: 10px;
	width: 224px;
	height: 195px;
	border: 1px solid black;
	object-fit: fill;
	background-color: ${({ theme }) => theme.colors.primary};
	display: flex;
	align-items: flex-start;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	position: relative;
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
	width: 218px;
	font-weight: 600;
	padding: 3px;
	font-size: 10px;
	height: 12px;
`;
const ImageDesc = styled.div`
	background-color: ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.fontColors.secondary};
	width: 218px;
	font-weight: 600;
	padding: 3px;
	font-size: 10px;
	height: 12px;
`;
const ImageOptions = styled.div`
	display: flex;
	justify-content: space-between;
	position: absolute;
	height: 15%;
	background-color: #0202028b;
	box-shadow: black;
	width: 100%;
`;
const OptionIcon = styled.div`
	padding: 2px 5px;
`;

export interface ImageItemProps {
	imageFile: {
		public_id: string;
		bytes: number;
		fileName: string;
		format: string;
		selected: boolean;
	};
	imageClicked: (src: string) => void;
	deleteImage: (src: string) => void;
	pickImage: (image: any) => void;
	selectedImage: any;
}

// const openImageViewer = (imageFile) => {
// 	console.log(imageFile);
// };

const ImageItem: React.FC<ImageItemProps> = ({
	imageFile,
	imageClicked,
	deleteImage,
	pickImage,
	selectedImage
}) => {
	const [showOptions, setShowOptions] = useState(false);
	// const [imageSelected, setImageSelected] = useState(selected);

	const classes = useStyles();
	/** effects **/
	const fade = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		delay: 100
	});

	// useEffect(() => {
	// 	console.log('ppp');
	// 	setImageSelected(selected);
	// }, [selected]);

	const aaa = (toggle) => {
		// if (toggle !== 'on' && toggle !== 'off') {
		// 	console.log('dddddd');
		// 	return '1';
		// }
		// if ((toggle = 'on' && selectedImages.length === 0)) {
		// 	setImageSelected(false);
		// } else if ((toggle = 'on')) {
		// 	_.forEach(selectedImages, (item) => {
		// 		// console.log(item);
		// 		if (item.public_id === imageFile.public_id && item.selected === false) {
		// 			// console.log('kkk1');
		// 			return '1';
		// 		}
		// 	});
		// }
		// if ((toggle = 'off')) {
		// 	_.forEach(selectedImages, (item) => {
		// 		// console.log(item);
		// 		if (item.public_id === imageFile.public_id && item.selected === true) {
		// 			// console.log('kkk1');
		// 			console.log(item.selected);
		// 			return '2';
		// 		}
		// 	});
		// }
		// return '2';
		// return '2';
		// console.log(selectedImages);
		// console.log(imageFile);
	};

	return (
		<A_ImagePlaceholder
			style={fade}
			onMouseEnter={() => setShowOptions(true)}
			onMouseLeave={() => setShowOptions(false)}>
			<CloudinaryImagePlaceholder>
				<Image
					className={classes.cloudinaryImg}
					onClick={() => imageClicked(imageFile.public_id)}
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
			{showOptions && (
				<ImageOptions>
					<OptionIcon>
						{!imageFile.selected && (
							<svg
								onClick={() => {
									pickImage(imageFile);
									// aaa('on')
									// setImageSelected(!imageSelected);
								}}
								className="icon line"
								width="24"
								height="24"
								id="check-circle"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24">
								<circle
									cx="12"
									cy="12"
									r="9"
									style={{
										fill: 'none',
										stroke: 'rgb(197, 191, 191)',
										strokeLinecap: 'round',
										strokeLinejoin: 'round',
										strokeWidth: '1'
									}}></circle>
								<polyline
									points="8 12 11 15 16 10"
									style={{
										fill: 'none',
										stroke: 'rgb(197, 191, 191)',
										strokeLinecap: 'round',
										strokeLinejoin: 'round',
										strokeWidth: '1'
									}}></polyline>
							</svg>
						)}
					</OptionIcon>
					<OptionIcon>
						<svg
							onClick={() => deleteImage(imageFile.public_id)}
							className="icon line"
							width="24"
							height="24"
							id="delete-alt"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24">
							<path
								d="M4,7H20M16,7V4a1,1,0,0,0-1-1H9A1,1,0,0,0,8,4V7"
								style={{
									fill: 'none',
									stroke: 'rgb(197, 191, 191)',
									strokeLinecap: 'round',
									strokeLinejoin: 'round',
									strokeWidth: '1'
								}}></path>
							<path
								d="M6,7H18a0,0,0,0,1,0,0V20a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V7A0,0,0,0,1,6,7Z"
								style={{
									fill: 'none',
									stroke: 'rgb(197, 191, 191)',
									strokeLinecap: 'round',
									strokeLinejoin: 'round',
									strokeWidth: '1'
								}}></path>
							<line
								x1="10"
								y1="11"
								x2="10"
								y2="17"
								style={{
									fill: 'none',
									stroke: 'rgb(197, 191, 191)',
									strokeLinecap: 'round',
									strokeLinejoin: 'round',
									strokeWidth: '1'
								}}></line>
							<line
								x1="14"
								y1="11"
								x2="14"
								y2="17"
								style={{
									fill: 'none',
									stroke: 'rgb(197, 191, 191)',
									strokeLinecap: 'round',
									strokeLinejoin: 'round',
									strokeWidth: '1'
								}}></line>
						</svg>
					</OptionIcon>
				</ImageOptions>
			)}
			{imageFile.selected && (
				<svg
					onClick={() => {
						// setImageSelected(!imageSelected);
						// aaa('off')
						pickImage(imageFile);
					}}
					style={{ position: 'absolute', padding: '2px 5px' }}
					className="icon multi-color"
					width="24"
					height="24"
					id="check-circle"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24">
					<ellipse
						id="secondary-fill"
						cx="10.5"
						cy="12"
						rx="7.5"
						ry="8.88"
						style={{
							fill: 'rgb(201, 64, 98)',
							strokeWidth: '2'
						}}></ellipse>
					<path
						id="primary-stroke"
						d="M21,12a9,9,0,1,1-9-9A9,9,0,0,1,21,12ZM8,12l3,3,5-5"
						style={{
							fill: 'none',
							stroke: 'rgb(197, 191, 191)',
							strokeLinecap: 'round',
							strokeLinejoin: 'round',
							strokeWidth: '1'
						}}></path>
				</svg>
			)}
		</A_ImagePlaceholder>
	);
};

export default ImageItem;
