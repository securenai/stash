import React, { useState, useRef } from 'react';
import './AvatarWidget.scss';
import { HiDocumentAdd } from 'react-icons/hi';
import AvatarEdit from './AvatarEdit';

export interface AvatarWidgetProps {
	changeAvatar: (img) => void;
	avatarUrl: string;
}

const AvatarWidget: React.FC<AvatarWidgetProps> = ({ changeAvatar, avatarUrl }) => {
	const inputFile = useRef(null);
	const [avatarImageUrl, setAvatarImageUrl] = useState(avatarUrl);
	const [imageSrc, setImageSrc] = useState(null);
	const [showHoverMask, setShowHoverMask] = useState(false);

	const [test, setTest] = useState(null);

	const handleClick = () => {
		inputFile.current.click();
	};

	const handleFileChange = (e: any) => {
		e.stopPropagation();
		e.preventDefault();
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setImageSrc(reader.result);
		};
	};

	const handleCloseEdit = () => {
		setImageSrc(null);
	};

	const handleApplyImage = (appliedImage) => {
		setImageSrc(null);
		// console.log(appliedImage);
		// console.log(croppedAreaPixels);
		// setTest(appliedImage);
		// setTest(appliedImage);
		setShowHoverMask(false);
		changeAvatar(appliedImage);
	};

	// const test = () => {
	// 	console.log(imageSrc);
	// };

	return (
		<div>
			{imageSrc ? (
				<AvatarEdit
					imageSrc={imageSrc}
					closeEdit={handleCloseEdit}
					applyImage={handleApplyImage}
				/>
			) : (
				<div className="AvatarWidget">
					<div
						className="AvatarWidget__avatar"
						onMouseEnter={() => setShowHoverMask(true)}
						onMouseLeave={() => setShowHoverMask(false)}
						onClick={handleClick}>
						<div className="AvatarWidget__avatar--changeIcon">
							<HiDocumentAdd />
						</div>
						{showHoverMask === true ? (
							<div className="AvatarWidget__avatar--hover">
								<div className="AvatarWidget__avatar--hover--text">
									CHANGE AVATAR
								</div>
							</div>
						) : null}
						<div className="AvatarWidget__avatar--image" 
						     style={{backgroundImage: `url(${avatarUrl})`}}>
					    </div>
						<input
							className="AvatarWidget__avatar--file"
							type="file"
							id="file"
							ref={inputFile}
							onChange={handleFileChange}
							accept="image/*"
						/>
					</div>
					{/* <button onClick={test}>ffff</button> */}
					{/* {imageSrc} */}
					<div className="AvatarWidget__user"></div>
					<div className="AvatarWidget__options"></div>
					<div className="AvatarWidget__imageEdit"></div>
					{/* <img
						src={test}
						style={{ width: 169, height: 169, top: 361, left: 151 }}
					/> */}
				</div>
			)}
		</div>
	);
};

export default AvatarWidget;
