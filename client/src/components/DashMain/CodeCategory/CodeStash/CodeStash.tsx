import React from 'react';
import DashMainHeader from '../../DashMainHeader/DashMainHeader';
import CodeEditor from '../CodeEditor/CodeEditor';
import CodeStashHeader from '../CodeStashHeader/CodeStashHeader';
import './CodeStash.css';

export interface CodeStashProps {
	currentStash: {
		id: string;
		type: string;
		name: string;
	};
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
	currentStash,
	codeList,
	saveCode,
	deleteCode
}) => {
	// console.log(codeList);
	return (
		<div className="code-stash">
			<DashMainHeader stashType="code" stashName={currentStash.name} />
			<div className="code-stash-wrapper">
				{codeList === []
					? null
					: codeList.map((code, index) => {
							return (
								<CodeEditor
									key={index.toString()}
									codeStash={code}
									saveCode={saveCode}
									deleteCode={deleteCode}
								/>
							);
					  })}
			</div>
		</div>
	);
};

export default CodeStash;
