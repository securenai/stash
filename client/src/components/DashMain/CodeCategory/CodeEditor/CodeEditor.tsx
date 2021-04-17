import React, { useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another
import './CodeEditor.css';

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

	useEffect(() => {
		console.log(codeStash.content);
		// const kkk = codeStash.content.replace(/ /g, '\n')
		// console.log(kkk)
		setCode(codeStash.content);
	}, []);

	return (
		<div className="code-editor-frame">
			<div className="code-editor-header">
				<span className="code-editor-title">{codeStash.topic}</span>
			</div>
			<div className="code-editor">
				<Editor
					value={code}
					onValueChange={(code) => setCode(code)}
					highlight={(code) => highlight(code, languages.js)}
					padding={10}
					style={{
						fontFamily: '"Fira code", "Fira Mono", monospace',
						fontSize: 13
						//whiteSpace: 'pre'
					}}
				/>
			</div>
			<div className="code-editor-controls">
				<div
					className="code-editor-save"
					onClick={() => saveCode(codeStash._id, codeStash.topic, code)}>
					save
				</div>
				<div
					className="code-editor-del"
					onClick={() => deleteCode(codeStash._id)}>
					delete
				</div>
			</div>
		</div>
	);
};

export default CodeEditor;
