import React from 'react';
import CodeEditor from '../CodeEditor/CodeEditor';
import './CodeStash.scss';

export interface CodeStashProps {
	codeList: {
		_id: string;
		owner: string;
		topic: string;
		content: string;
		createDate: string;
		modifiedDate: string;
	}[];
	saveCode: (id: string, topic: string, code: string) => void;
	deleteCode: (id: string) => void;
}

const CodeStash: React.FC<CodeStashProps> = ({
	codeList,
	saveCode,
	deleteCode
}) => (
	<div className="codeStash">
		{codeList === []
			? null
			: codeList.map((code, index) => (
					<CodeEditor
						key={index.toString()}
						codeStash={code}
						saveCode={saveCode}
						deleteCode={deleteCode}
					/>
			  ))}
	</div>
);

export default CodeStash;
