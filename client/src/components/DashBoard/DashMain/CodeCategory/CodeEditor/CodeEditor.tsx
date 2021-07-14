import React, { useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another
import './CodeEditor.scss';
import { CrudButton } from '../../../../Widgets/Button/CrudButtons/CrudButton';
import IconButtonEdit from '../../../../Widgets/Button/IconButtons/IconButtonEdit';

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
		<div className="codeEditor">
			<div className="codeEditor__header">
				<span className="codeEditor__title">
					{enableTopicEdit === true ? (
						<input
							autoFocus
							className="codeEditor__title--editing"
							value={topic}
							onChange={(e) => {
								setTopic(e.target.value);
							}}
						/>
					) : (
						<span className="codeEditor__title--text">{topic}</span>
					)}
				</span>
				<IconButtonEdit onClick={() => setEnableTopicEdit(!enableTopicEdit)} />
			</div>
			<div className="codeEditor__codeBlock">
				<Editor
					value={code}
					onValueChange={(code) => setCode(code)}
					highlight={(code) => highlight(code, languages.js)}
					padding={10}
					style={{
						fontFamily: '"Fira code", "Fira Mono", monospace',
						fontSize: 13
					}}
				/>
			</div>
			<div className="codeEditor__controls">
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
			</div>
		</div>
	);
};

export default CodeEditor;
