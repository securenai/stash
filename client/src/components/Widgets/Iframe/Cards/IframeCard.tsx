import React from 'react';
import ReactDOMServer from 'react-dom/server';
import styled from 'styled-components';

const Card = styled.div`
	padding: 10px;
`;
const CardHeader = styled.div`
	display: flex;
	justify-content: space-between;
`;
const ThumbnailPlaceholder = styled.div`
	height: 60px;
`;
const CardImagePlaceholder = styled.div`
	height: 235px;
`;
const Thumbnail = styled.img`
	max-height: 100%;
`;
const CardImage = styled.img`
	max-height: 100%;
	max-width: 100%;
`;
export interface IframeCardProps {
	iframeData: any;
}

const IframeCard: React.FC<IframeCardProps> = ({ iframeData }) => {
	const isCard: boolean = iframeData.options;
	return (
		<div
			dangerouslySetInnerHTML={{
				__html: ReactDOMServer.renderToString(
					<Card>
						<CardHeader>
							<h5>
								<a href={iframeData.meta.canonical} target="_blank">
									{iframeData.meta.site}
								</a>
							</h5>
							{!isCard && (
								<ThumbnailPlaceholder>
									<Thumbnail src={iframeData.links.thumbnail[0].href} />
								</ThumbnailPlaceholder>
							)}
						</CardHeader>

						<h4>
							<a href={iframeData.url} target="_blank">
								{iframeData.meta.title}
							</a>
						</h4>
						<h6>{iframeData.meta.description}</h6>
						{isCard && (
							<CardImagePlaceholder>
								<CardImage src={iframeData.links.thumbnail[0].href} />
							</CardImagePlaceholder>
						)}
					</Card>
				)
			}}
		/>
	);
};

export default IframeCard;
