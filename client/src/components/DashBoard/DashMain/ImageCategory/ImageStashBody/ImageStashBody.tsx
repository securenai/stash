import React, { useRef, useEffect, useCallback, useState } from 'react';
import ImageItem from './ImageItem/ImageItem';
import styled from 'styled-components';
import ScrollTo from '../../../../Widgets/ScrollTo/ScrollTo';

const ImageStashBodyContainer = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-content: flex-start;
	flex-wrap: wrap;
	overflow-y: scroll;
	overflow-x: hidden;
	height: 600px;
	&::-webkit-scrollbar {
		width: 8px;
		background-color: ${({ theme }) => theme.colors.primary};
		border-radius: 10px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.fontColors.primary};
		border-radius: 10px;
	}
`;

export interface ImageStashBodyProps {
	imageFiles: {
		public_id: string;
		bytes: number;
		fileName: string;
		format: string;
	}[];
}

const ImageStashBody: React.FC<ImageStashBodyProps> = ({ imageFiles }) => {
	const [images, setImages] = useState([]);
	const elementRef = useRef(null);
	const [show, setShow] = useState(false);

	const handleScroll = useCallback(() => {
		const target = elementRef.current.firstChild;
		setShow(target.getBoundingClientRect().bottom < target.offsetHeight);
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
			{images &&
				images.map((imageFile) => (
					<ImageItem imageFile={imageFile} key={imageFile.public_id} />
				))}
			{show && <ScrollTo click={handleClick} />}
		</ImageStashBodyContainer>
	);
};

export default ImageStashBody;
