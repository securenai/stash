import React, { useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another
// import './CodeEditor.scss';
import styled from 'styled-components';
import { CrudButton } from '../../../../Widgets/Button/CrudButtons/CrudButton';
import IconButtonEdit from '../../../../Widgets/Button/IconButtons/IconButtonEdit';

const CodeEditorContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	border-radius: 10px;
	padding: 5px;
	margin: 20px;
	min-width: 530px;
	width: 40%;
	border: 1px solid silver;
	box-shadow: 20px 20px 50px #474545;
	background-color: ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.fontColors.primary};
`;
const CodeEditorHeader = styled.div`
	width: 98%;
	color: ${({ theme }) => theme.fontColors.primary};
	padding: 5px;
	border-bottom: ${({ theme }) => theme.borders.primary};
	display: flex;
`;
const CodeEditorTitle = styled.span`
	width: 100%;
	padding: 5px;
	flex-grow: 1;
`;
const CodeEditorTitleEditing = styled.input`
	width: 100%;
	color: rgb(253, 60, 53);
`;
const CodeEditorCodeBlock = styled.div`
	min-width: 500px;
	max-height: 500px;
	background-color: #fafafa;
	margin: 10px;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		width: 8px;
		background-color: ${({ theme }) => theme.colors.primary};
		border-radius: 10px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.colors.secondary};
		border-radius: 10px;
	}
`;
const CodeEditorControls = styled.div`
	display: flex;
	flex-direction: row-reverse;
	width: 98%;
	padding: 0 10px 5px 0px;
`;

export interface CodeEditorProps {
	codeStash: {
		_id: string;
		owner: string;
		topic: string;
		content: string;
		createDate: string;
		modifiedDate: string;
	};
	saveCode: (id: string, topic: string, code: string) => void;
	deleteCode: (id: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
	codeStash,
	saveCode,
	deleteCode
}) => {
	const [code, setCode] = React.useState('');
	const [topic, setTopic] = React.useState('');
	const [enableTopicEdit, setEnableTopicEdit] = React.useState(false);

	useEffect(() => {
		setTopic(codeStash.topic);
		setCode(codeStash.content);
	}, []);

	return (
		<>
			<CodeEditorContainer>
				<CodeEditorHeader>
					<CodeEditorTitle>
						{enableTopicEdit === true ? (
							<CodeEditorTitleEditing
								autoFocus
								value={topic}
								onChange={(e) => {
									setTopic(e.target.value);
								}}
							/>
						) : (
							<span>{topic}</span>
						)}
					</CodeEditorTitle>
					<IconButtonEdit
						onClick={() => setEnableTopicEdit(!enableTopicEdit)}
					/>
				</CodeEditorHeader>
				<CodeEditorCodeBlock>
					<Editor
						value={code}
						onValueChange={(code) => setCode(code)}
						highlight={(code) => highlight(code, languages.js)}
						padding={10}
						style={{
							color: 'black',
							fontFamily: '"Fira code", "Fira Mono", monospace',
							fontSize: 13
						}}
					/>
				</CodeEditorCodeBlock>
				<CodeEditorControls>
					<CrudButton
						size="small"
						label="SAVE"
						crudType="save"
						onClick={() => {
							saveCode(codeStash._id, topic, code);
							setEnableTopicEdit(false);
						}}
					/>
					<CrudButton
						size="small"
						label="DELETE"
						crudType="delete"
						onClick={() => deleteCode(codeStash._id)}
					/>
				</CodeEditorControls>
			</CodeEditorContainer>
		</>
	);
};

export default CodeEditor;
