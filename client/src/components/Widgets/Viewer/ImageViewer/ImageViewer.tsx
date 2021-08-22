import * as React from 'react';
import { useEffect } from 'react';
import Viewer from 'react-viewer';

export interface ImageViewerProps {
	showViewer: boolean;
	closeViewer: () => void;
	imageSrc: string;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
	imageSrc,
	showViewer,
	closeViewer
}) => {
	const [visible, setVisible] = React.useState(false);

	useEffect(() => {
		console.log('lklk');
		if (showViewer) setVisible(true);
	}, [showViewer]);

	return (
		<div>
			{/* <button
				onClick={() => {
					setVisible(true);
				}}>
				show
			</button> */}
			<Viewer
				visible={visible}
				onClose={() => {
					setVisible(false);
				}}
				changeable={false}
				showTotal={false}
				onMaskClick={() => {
					setVisible(false);
					closeViewer();
				}}
				downloadable={true}
				downloadInNewWindow={true}
				zoomSpeed={0.2}
				images={[
					{
						src:
							'https://res.cloudinary.com/dfkw9hdq3/image/upload/v1/' +
							imageSrc,
						alt: ''
					}
				]}
			/>
		</div>
	);
};

export default ImageViewer;
