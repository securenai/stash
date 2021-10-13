import React from 'react';
import styled from 'styled-components';

const ToolBarWrapper = styled.div`
	width: 410px;
	height: 20px;
	border: 1px solid white;
	border-radius: 5px;
	background-color: #1c1c1c;
	color: white;
	display: flex;
	flex-direction: row;
	padding: 10px;
	margin-right: 10px;
`;
const SelectedCount = styled.div`
	align-self: center;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 105px;
	margin-right: 20px;
`;
const MultiDelete = styled.div`
	cursor: pointer;
	align-self: center;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 75px;
	margin-right: 20px;
`;
const ClearAll = styled.div`
	cursor: pointer;
	align-self: center;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 90px;
`;
const SelectAll = styled.div`
	cursor: pointer;
	align-self: center;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-left: 10px;
	width: 100px;
`;

interface ImageMultiSelectToolBarProps {
	selectedImages: any;
	batchDelete: () => void;
	batchClear: () => void;
	batchSelect: () => void;
}

const ImageMultiSelectToolBar: React.FC<ImageMultiSelectToolBarProps> = ({
	selectedImages,
	batchDelete,
	batchClear,
	batchSelect
}) => {
	return (
		<ToolBarWrapper>
			<SelectedCount>
				<svg
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
							stroke: 'rgb(250, 250, 250)',
							strokeLinecap: 'round',
							strokeLinejoin: 'round',
							strokeWidth: '1'
						}}></circle>
					<polyline
						points="8 12 11 15 16 10"
						style={{
							fill: 'none',
							stroke: 'rgb(250, 250, 250)',
							strokeLinecap: 'round',
							strokeLinejoin: 'round',
							strokeWidth: '1'
						}}></polyline>
				</svg>
				<span>{selectedImages.length} selected</span>
			</SelectedCount>
			<MultiDelete onClick={batchDelete}>
				<svg
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
							stroke: 'rgb(255, 255, 255)',
							strokeLinecap: 'round',
							strokeLinejoin: 'round',
							strokeWidth: '1'
						}}></path>
					<path
						d="M6,7H18a0,0,0,0,1,0,0V20a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V7A0,0,0,0,1,6,7Z"
						style={{
							fill: 'none',
							stroke: 'rgb(255, 255, 255)',
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
							stroke: 'rgb(255, 255, 255)',
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
							stroke: 'rgb(255, 255, 255)',
							strokeLinecap: 'round',
							strokeLinejoin: 'round',
							strokeWidth: '1'
						}}></line>
				</svg>
				<span>Delete</span>
			</MultiDelete>
			<ClearAll onClick={batchClear}>
				<svg
					className="icon line"
					width="24"
					height="24"
					id="cross-circle"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24">
					<circle
						cx="12"
						cy="12"
						r="9"
						style={{
							fill: 'none',
							stroke: 'rgb(255, 255, 255)',
							strokeLinecap: 'round',
							strokeLinejoin: 'round',
							strokeWidth: '1'
						}}></circle>
					<line
						x1="15"
						y1="15"
						x2="9"
						y2="9"
						style={{
							fill: 'none',
							stroke: 'rgb(255, 255, 255)',
							strokeLinecap: 'round',
							strokeLinejoin: 'round',
							strokeWidth: '1'
						}}></line>
					<line
						x1="15"
						y1="9"
						x2="9"
						y2="15"
						style={{
							fill: 'none',
							stroke: 'rgb(255, 255, 255)',
							strokeLinecap: 'round',
							strokeLinejoin: 'round',
							strokeWidth: '1'
						}}></line>
				</svg>
				<span>Clear All</span>
			</ClearAll>
			<SelectAll onClick={batchSelect}>
				<svg
					className="icon line"
					width="24"
					height="24"
					id="check-lists"
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24">
					<title style={{ strokeWidth: '1', stroke: 'rgb(255, 255, 255)' }}>
						check lists
					</title>
					<path
						id="primary"
						d="M7,4,4.33,7,3,5.5M11,6H21M3,11.5,4.33,13,7,10m4,2H21M3,17.5,4.33,19,7,16m4,2H21"
						style={{
							fill: 'none',
							stroke: 'rgb(255, 255, 255)',
							strokeLinecap: 'round',
							strokeLinejoin: 'round',
							strokeWidth: '1'
						}}></path>
				</svg>
				<span>Select All</span>
			</SelectAll>
		</ToolBarWrapper>
	);
};

export default ImageMultiSelectToolBar;
