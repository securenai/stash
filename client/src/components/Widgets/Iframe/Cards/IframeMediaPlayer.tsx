import React from 'react';
import styled from 'styled-components';

const PlayerTitle = styled.div`
	padding: 10px;
`;

export interface IframeMediaPlayerProps {
	iframeData: any;
}

const IframeMediaPlayer: React.FC<IframeMediaPlayerProps> = ({
	iframeData
}) => {
	return (
		<div>
			<PlayerTitle>
				<h6>{iframeData.meta.site}</h6>
				<h4>
					<a href={iframeData.meta.author_url} target="_blank">
						{iframeData.meta.author}
					</a>
				</h4>
				<h4>
					<a href={iframeData.meta.canonical} target="_blank">
						{iframeData.meta.title}
					</a>
				</h4>
			</PlayerTitle>
			<div
				dangerouslySetInnerHTML={{
					__html: iframeData.html
				}}
			/>
		</div>
	);
};

export default IframeMediaPlayer;
