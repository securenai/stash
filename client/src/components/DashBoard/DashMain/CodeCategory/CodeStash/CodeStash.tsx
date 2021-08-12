import React, { useRef, useEffect, useCallback, useState } from 'react';
import CodeEditor from '../CodeEditor/CodeEditor';
import './CodeStash.scss';
import ScrollTo from '../../../../Widgets/ScrollTo/ScrollTo';
// import './InfinityBg.scss'

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
}) => {
	const elementRef = useRef(null);
	const [show, setShow] = useState(false);

	const handleScroll = useCallback(() => {
		const target = elementRef.current.firstChild;
		setShow(target.getBoundingClientRect().bottom < target.offsetHeight);
	}, []);

	const handleClick = () => {
		elementRef.current.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	useEffect(() => {
		const divElement = elementRef.current;
		divElement.addEventListener('scroll', handleScroll);
		return () => divElement.removeEventListener(`scroll`, handleScroll);
	}, []);

	return (
		<div className="codeStash bbb" ref={elementRef}>
			{codeList.length > 0 &&
				codeList.map((code, index) => {
					return (
						<CodeEditor
							key={code._id.toString()}
							codeStash={code}
							saveCode={saveCode}
							deleteCode={deleteCode}
						/>
					);
				})}
			{show && <ScrollTo click={handleClick} />}
		</div>
	);
};

export default CodeStash;
