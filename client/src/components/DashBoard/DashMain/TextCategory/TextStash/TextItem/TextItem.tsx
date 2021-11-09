import React, { useState, useEffect, useRef } from 'react';
import InputTitleChanger from '../../../../../Widgets/Input/InputTitleChanger';
import styled from 'styled-components';
import IframeCard from '../../../../../Widgets/Iframe/Cards/IframeCard';
import IframeMediaPlayer from '../../../../../Widgets/Iframe/Cards/IframeMediaPlayer';
import { CrudButton } from '../../../../../Widgets/Button/CrudButtons/CrudButton';
import { useSpring, animated } from 'react-spring';
import IframeTwitter from '../../../../../Widgets/Iframe/Cards/IframeTwitter';
import { Editor, EditorState, ContentState } from 'draft-js';
// import { RichEditorExample } from '../TextItem/TextEditor/TextEditor';
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
const EditorWrapper = styled.div`
	padding: 10px;
`;

export interface TextItemProps {
	content: any;
	deleteText: (id: string) => void;
	saveText: (
		id: string,
		textStash: {
			title: string;
			link: string;
			memo: string;
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
	// const [memo, setMemo] = useState('');
	const [iframe, setIframe] = useState(<div></div>);
	const [editorState, setEditorState] = useState(() =>
		// EditorState.createEmpty()
		EditorState.createWithContent(ContentState.createFromText(''))
	);
	const editor = useRef(null);

	/** effects **/
	const fade = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		delay: 100
	});

	useEffect(() => {
		// editor.current.focus();
		// editorState.getCurrentContent() = memo
		// EditorState.moveFocusToEnd(editorState);
		setTitle(content.title);
		setEmbeded(content.link);
		setEditorState(
			EditorState.createWithContent(ContentState.createFromText(content.memo))
		);
		// setMemo(content.memo);
		// EditorState.createWithContent(ContentState.createFromText(memo));
		renderIframe(content.link);
	}, []);

	const renderIframe = async (embeded: string) => {
		const result = await fetchIframe(embeded);
		if (result) {
			if (result.status === 404) {
				setIframe(<div></div>);
				return;
			} else if (result.meta.site === 'Twitter') {
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
				placeholder="Memo Title"
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
				placeholder="embedded links"
			/>
			{iframe}
			<EditorWrapper>
				<Editor
					editorState={editorState}
					onChange={setEditorState}
					autoFocus
					// placeholder="Tell a story..."
					ref={editor}
				/>
			</EditorWrapper>
			<CodeEditorControls>
				<CrudButton
					size="small"
					label="SAVE"
					crudType="save"
					onClick={() => {
						saveText(content._id, {
							title: title,
							link: embeded,
							memo: editorState.getCurrentContent().getPlainText()
						});
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
