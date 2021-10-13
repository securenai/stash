import React, { useRef, useEffect, useCallback, useState } from 'react';
import ImageItem from './ImageItem/ImageItem';
import styled from 'styled-components';
import ScrollTo from '../../../../Widgets/ScrollTo/ScrollTo';
import _ from 'lodash';

const ImageStashBodyContainer = styled.div`
	padding: 20px;
	overflow-y: scroll;
	overflow-x: hidden;
	&::-webkit-scrollbar {
		width: 8px;
		background-color: ${({ theme }) => theme.colors.primary};
		border-radius: 10px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.fontColors.secondary};
		border-radius: 10px;
	}
`;
const ImageItemWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-content: flex-start;
	flex-wrap: wrap;
`;

export interface ImageStashBodyProps {
	imageFiles: {
		public_id: string;
		bytes: number;
		fileName: string;
		format: string;
		selected: boolean;
	}[];
	imageClicked: (src: string) => void;
	deleteImage: (src: string) => void;
	pickImage: (image: any) => void;
	selectedImages: any;
}

const ImageStashBody: React.FC<ImageStashBodyProps> = ({
	imageFiles,
	imageClicked,
	deleteImage,
	pickImage,
	selectedImages
}) => {
	const [images, setImages] = useState([]);
	const elementRef = useRef(null);
	const [show, setShow] = useState(false);

	const handleScroll = useCallback(() => {
		const target = elementRef.current.firstChild;
		setShow(target.getBoundingClientRect().bottom < target.offsetHeight);
		// console.log('----------------------------------');
		// console.log(target.scrollHeight);
		// console.log(target.getBoundingClientRect().bottom);
		// console.log(target.getBoundingClientRect().top);
		// console.log(target.offsetHeight);
	}, []);

	const handleClick = () => {
		elementRef.current.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	useEffect(() => {
		setImages(imageFiles);
		const divElement = elementRef.current;
		divElement.addEventListener('scroll', handleScroll);
		return () => divElement.removeEventListener(`scroll`, handleScroll);
	}, [imageFiles]);

	return (
		<ImageStashBodyContainer ref={elementRef}>
			<ImageItemWrapper>
				{images &&
					images.map((imageFile) => (
						<ImageItem
							imageFile={imageFile}
							key={imageFile.public_id}
							imageClicked={imageClicked}
							deleteImage={deleteImage}
							pickImage={pickImage}
							selectedImage={_.filter(selectedImages, (item) => {
								return item.public_id === imageFile.public_id;
							})}
						/>
					))}
			</ImageItemWrapper>
			{show && <ScrollTo click={handleClick} />}
		</ImageStashBodyContainer>
	);
};

export default ImageStashBody;
