import React from 'react';
import styled from 'styled-components';
import TextItem from './TextItem/TextItem';

const TextStashContainer = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-content: flex-start;
	align-items: flex-start;
	flex-wrap: wrap;
	overflow-y: scroll;
	overflow-x: hidden;
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

export interface TextStashProps {
	fetchIframe: (url: string) => any;
	deleteText: (id: string) => void;
	saveText: (
		id: string,
		textStash: {
			title: string;
			link: string;
		}
	) => void;
	textList: {
		_id: string;
		owner: string;
		createDate: string;
		modifiedDate: string;
		title: string;
		link: string;
		text: string;
	}[];
}

const TextStash: React.FC<TextStashProps> = ({
	fetchIframe,
	textList,
	deleteText,
	saveText
}) => {
	return (
		<TextStashContainer>
			{textList.length > 0 &&
				textList.map((textItem, index) => {
					return (
						<TextItem
							key={textItem._id.toString()}
							content={textItem}
							fetchIframe={fetchIframe}
							deleteText={deleteText}
							saveText={saveText}
						/>
					);
				})}
		</TextStashContainer>
	);
};

export default TextStash;
