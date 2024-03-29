import React from 'react';
import CodeStashHeader from '../CodeCategory/CodeStashHeader/CodeStashHeader';
import ImageStashHeader from '../ImageCategory/ImageStashHeader/ImageStashHeader';
import TextStashHeader from '../TextCategory/TextStashHeader/TextStashHeader';
import styled from 'styled-components';
import { TiCode, TiImage } from 'react-icons/ti';
import { BsFonts } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';

const DashHeaderMain = styled.div`
	height: 40px;
	display: flex;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.fontColors.primary};
	border-bottom: ${({ theme }) => theme.borders.primary};
	padding: 20px 20px 20px 20px;
`;
const DashHeaderTitle = styled.div`
	align-items: center;
	height: 40px;
	display: flex;
	font-size: 20px;
	width: 35%;
`;
const TitleIcon = styled.div`
	padding: 10px 10px 5px 10px;
`;
const ShowStashListIcon = styled.div`
	cursor: pointer;
`;
export interface DashMainHeaderProps {
	stashId: string;
	stashType: string;
	stashName: string;
	uploadImage?: (data: File, name: string) => void;
	addCodeStashItem?: () => void;
	addTextStashItem?: () => void;
	sideBarClosed: boolean;
	openStashList: () => void;
	selectedImages?: any;
	batchDelete?: () => void;
	batchClear?: () => void;
	batchSelect?: () => void;
	queryImageFiles?: (showProgressBar: boolean) => Promise<void>;
}

const DashMainHeader: React.FC<DashMainHeaderProps> = ({
	stashId,
	stashType,
	stashName,
	uploadImage,
	addCodeStashItem,
	addTextStashItem,
	sideBarClosed,
	openStashList,
	selectedImages,
	batchDelete,
	batchClear,
	batchSelect,
	queryImageFiles
}) => {
	const renderStashHeaderTemplate = () => {
		if (stashType === 'text') {
			return <TextStashHeader stashId={stashId} addItem={addTextStashItem} />;
		} else if (stashType === 'image') {
			return (
				<ImageStashHeader
					stashId={stashId}
					uploadImage={uploadImage}
					selectedImages={selectedImages}
					batchDelete={batchDelete}
					batchClear={batchClear}
					batchSelect={batchSelect}
					queryImageFiles={() => queryImageFiles(true)}
				/>
			);
		} else if (stashType === 'code') {
			return <CodeStashHeader stashId={stashId} addItem={addCodeStashItem} />;
		}
	};
	const stashTypeIcon = () => {
		if (stashType === 'text') {
			return <BsFonts />;
		} else if (stashType === 'image') {
			return <TiImage />;
		} else if (stashType === 'code') {
			return <TiCode />;
		}
	};

	return (
		<DashHeaderMain>
			<DashHeaderTitle>
				{sideBarClosed && (
					<ShowStashListIcon onClick={openStashList}>
						<AiOutlineMenu />
					</ShowStashListIcon>
				)}
				<TitleIcon>{stashTypeIcon()}</TitleIcon>
				<div>{stashName}</div>
			</DashHeaderTitle>
			{renderStashHeaderTemplate()}
		</DashHeaderMain>
	);
};

export default DashMainHeader;
