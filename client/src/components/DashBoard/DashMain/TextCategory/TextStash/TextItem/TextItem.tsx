import React, { useState, useEffect } from 'react';
import InputTitleChanger from '../../../../../Widgets/Input/InputTitleChanger';
import styled from 'styled-components';
import IframeCard from '../../../../../Widgets/Iframe/Cards/IframeCard';
import IframeMediaPlayer from '../../../../../Widgets/Iframe/Cards/IframeMediaPlayer';
import { CrudButton } from '../../../../../Widgets/Button/CrudButtons/CrudButton';
import { useSpring, animated } from 'react-spring';
import IframeTwitter from '../../../../../Widgets/Iframe/Cards/IframeTwitter';

/** styles **/
const A_TextItemContainer = styled(animated.div)`
	width: 380px;
	margin: 10px;
	border: 1px solid ${({ theme }) => theme.borders.secondary};
	background-color: ${({ theme }) => theme.colors.secondary};
`;
const CodeEditorControls = styled.div`
	display: flex;
	flex-direction: row-reverse;
	padding: 5px 10px 5px 0px;
`;

export interface TextItemProps {
	content: any;
	deleteText: (id: string) => void;
	saveText: (
		id: string,
		textStash: {
			title: string;
			link: string;
		}
	) => void;
	fetchIframe: (url: string) => any;
}

const TextItem: React.FC<TextItemProps> = ({
	content,
	saveText,
	fetchIframe,
	deleteText
}) => {
	const [title, setTitle] = React.useState('Title');
	const [enableTitleEdit, setEnableTitleEdit] = React.useState(false);
	const [enableLinkEdit, setEnableLinkEdit] = React.useState(false);
	const [embeded, setEmbeded] = useState('');
	const [iframe, setIframe] = useState(<div></div>);

	/** effects **/
	const fade = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		delay: 100
	});

	useEffect(() => {
		// console.log(content);
		setTitle(content.title);
		setEmbeded(content.link);
		renderIframe(content.link);
	}, []);

	const renderIframe = async (embeded: string) => {
		const result = await fetchIframe(embeded);
		console.log(result.status);
		if (result) {
			if (result.status === 404) {
				setIframe(<div></div>);
				return;
			} else if (result.meta.site === 'Twitter') {
				console.log('istwitter');
				setIframe(<IframeTwitter iframeData={result} />);
			} else if (
				result.rel.includes('summary') ||
				result.rel.includes('card')
			) {
				setIframe(<IframeCard iframeData={result} />);
				return;
			} else {
				setIframe(<IframeMediaPlayer iframeData={result} />);
			}
		}
	};

	return (
		<A_TextItemContainer style={fade}>
			<InputTitleChanger
				enableTextEdit={enableTitleEdit}
				title={title}
				onChangeValue={(e) => {
					setTitle(e.target.value);
				}}
				onClickEdit={() => setEnableTitleEdit(!enableTitleEdit)}
			/>
			<InputTitleChanger
				enableTextEdit={enableLinkEdit}
				title={embeded}
				onChangeValue={(e) => {
					setEmbeded(e.target.value);
					if (
						e.target.value.length > 10 &&
						/^https?:\/\//i.test(e.target.value)
					) {
						renderIframe(e.target.value);
					}
				}}
				onClickEdit={() => setEnableLinkEdit(!enableLinkEdit)}
			/>
			{iframe}
			<CodeEditorControls>
				<CrudButton
					size="small"
					label="SAVE"
					crudType="save"
					onClick={() => {
						saveText(content._id, { title: title, link: embeded });
						setEnableTitleEdit(false);
						setEnableLinkEdit(false);
					}}
				/>
				<CrudButton
					size="small"
					label="DELETE"
					crudType="delete"
					onClick={() => deleteText(content._id)}
				/>
			</CodeEditorControls>
		</A_TextItemContainer>
	);
};

export default TextItem;
