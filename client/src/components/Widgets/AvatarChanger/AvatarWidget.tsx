import React, { useState, useRef } from 'react';
import './AvatarWidget.scss';
import AvatarEdit from './AvatarEdit';

export interface AvatarWidgetProps {
	changeAvatar: (img) => void;
	avatarUrl: string;
}

const AvatarWidget: React.FC<AvatarWidgetProps> = ({
	changeAvatar,
	avatarUrl
}) => {
	const inputFile = useRef(null);
	const [imageSrc, setImageSrc] = useState(null);
	const [showHoverMask, setShowHoverMask] = useState(false);
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
		setShowHoverMask(false);
		changeAvatar(appliedImage);
	};

	return imageSrc ? (
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
					<svg
						className="icon line"
						width="18"
						height="18"
						id="add-user-square"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24">
						<title style={{ strokeWidth: '1.5', stroke: 'rgb(0, 0, 0)' }}>
							add user square
						</title>
						<path
							id="primary"
							d="M21,15v5a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3H19M12,15h0a5,5,0,0,0-5,5v1H17V20A5,5,0,0,0,12,15Zm1-7.87A3.66,3.66,0,0,0,12,7a4,4,0,1,0,3.46,6M17,9h4M19,7v4"
							style={{
								fill: 'none',
								stroke: 'rgb(0, 0, 0)',
								strokeLinecap: 'round',
								strokeLinejoin: 'round',
								strokeWidth: '1.5'
							}}></path>
					</svg>
				</div>
				{showHoverMask === true ? (
					<div className="AvatarWidget__avatar--hover">
						<div className="AvatarWidget__avatar--hover--text">
							CHANGE AVATAR
						</div>
					</div>
				) : null}
				<div
					className="AvatarWidget__avatar--image"
					style={{ backgroundImage: `url(${avatarUrl})` }}></div>
				<input
					className="AvatarWidget__avatar--file"
					type="file"
					id="file"
					ref={inputFile}
					onChange={handleFileChange}
					accept="image/*"
				/>
			</div>
			<div className="AvatarWidget__user"></div>
			<div className="AvatarWidget__options"></div>
			<div className="AvatarWidget__imageEdit"></div>
		</div>
	);
};

export default AvatarWidget;
