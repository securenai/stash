import React, { useRef, useEffect, useCallback, useState } from 'react';
import CodeEditor from '../CodeEditor/CodeEditor';
import ScrollTo from '../../../../Widgets/ScrollTo/ScrollTo';
import styled from 'styled-components';
// import './InfinityBg.scss'

const CodeStashContainer = styled.div`
	/* display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-content: flex-start;
	align-items: flex-start;
	flex-wrap: wrap; */
	height: 100vh;
	padding: 20px;
	overflow-y: scroll;
	overflow-x: hidden;
	&::-webkit-scrollbar {
		width: 8px;
		background-color: ${({ theme }) => theme.colors.primary};
		border-radius: 10px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.fontColors.primary};
		border-radius: 10px;
	}
`;

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
		<CodeStashContainer ref={elementRef}>
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
		</CodeStashContainer>
	);
};

export default CodeStash;
