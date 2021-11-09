import React, { useState, useRef, useCallback, useEffect } from 'react';
import Cropper from 'react-easy-crop';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import ImgDialog from './ImgDialog';
import { MdImage } from 'react-icons/md';
import { getCroppedImg, getRotatedImage } from './canvasUtils';
import './AvatarEdit.scss';

export interface ImageEditProps {
	// classes: any;
	imageSrc: any;
	closeEdit: () => void;
	applyImage: (appliedImage) => void;
}

const ImageEdit: React.FC<ImageEditProps> = ({
	imageSrc,
	closeEdit,
	applyImage
}) => {
	const [crop, setCrop] = useState({ x: 0, y: 0 });
	const [rotation, setRotation] = useState(0);
	const [zoom, setZoom] = useState(1);
	const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
	const [croppedImage, setCroppedImage] = useState(null);

	// useEffect(() => {
	// 	document.body.addEventListener('click', onClickOutside);
	// }, []);

	const modalOuter = useRef(null);

	const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
		setCroppedAreaPixels(croppedAreaPixels);
	}, []);

	const onClose = useCallback(() => {
		setCroppedImage(null);
	}, []);

	// const onClickOutside = (e: any) => {
	// 	if (e.target.className === 'modal') {
	// 		e.preventDefault();
	// 		e.stopPropagation();
	// 		closeEdit();
	// 		document.body.removeEventListener('click', onClickOutside);
	// 	}
	// };

	const showCroppedImage = useCallback(async () => {
		try {
			const croppedImage = await getCroppedImg(
				imageSrc,
				croppedAreaPixels,
				rotation
			);
			setCroppedImage(croppedImage);
			// const reader = new FileReader();
			// reader.readAsDataURL(croppedImage);
			// reader.onloadend = function () {
			// 	const base64data = reader.result;
			// };
			applyImage(croppedImage);
		} catch (e) {
			console.error(e);
		}
	}, [imageSrc, croppedAreaPixels, rotation]);

	return (
		<div id="myModal" className="modal" ref={modalOuter}>
			<div className="modal-content">
				<span className="modal-content-title">EDIT IMAGE</span>
				<React.Fragment>
					<div className="cropContainer">
						<Cropper
							image={imageSrc}
							crop={crop}
							rotation={rotation}
							zoom={zoom}
							// aspect={3 / 3}
							aspect={1}
							cropShape="round"
							showGrid={false}
							onCropChange={setCrop}
							onRotationChange={setRotation}
							onCropComplete={onCropComplete}
							onZoomChange={setZoom}
							zoomWithScroll={false}
						/>
					</div>
					<div className="controls">
						<div className="sliderContainer">
							<div className="sliderImageIcon sliderImageIcon1">
								<MdImage />
							</div>
							<div className="sliderBar">
								<Slider
									value={zoom}
									min={1}
									max={2}
									step={0.1}
									aria-labelledby="Zoom"
									classes={{ root: 'slider' }}
									onChange={(e, zoom: number) => setZoom(zoom)}
								/>
							</div>
							<div className="sliderImageIcon sliderImageIcon2">
								<MdImage />
							</div>
						</div>
						<div className="controls-buttons">
							<div className="controls-buttons-close">
								<Button
									onClick={closeEdit}
									variant="contained"
									color="secondary"
									classes={{ root: 'cropButton' }}>
									Close
								</Button>
							</div>
							<div>
								<Button
									onClick={showCroppedImage}
									variant="contained"
									color="primary"
									classes={{ root: 'cropButton' }}>
									Apply
								</Button>
							</div>
						</div>
						{/* <Button
							onClick={showCroppedImage}
							variant="contained"
							color="primary"
							classes={{ root: 'cropButton' }}>
							Show Result
						</Button> */}
					</div>
					<ImgDialog img={croppedImage} onClose={onClose} />
				</React.Fragment>
			</div>
		</div>
	);
};

export default ImageEdit;
// export default withStyles(styles)(ImageEdit);
