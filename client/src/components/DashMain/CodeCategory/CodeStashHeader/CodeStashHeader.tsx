import React from 'react';
import { AiFillPlusSquare } from 'react-icons/ai';
import './CodeStashHeader.css';

export interface CodeStashHeaderProps {
	addCodeStashItem: () => void;
}

const CodeStashHeader: React.FC<CodeStashHeaderProps> = ({
	addCodeStashItem
}) => {
	return (
		<div className="code-stash-item-add-icon" onClick={addCodeStashItem}>
			<AiFillPlusSquare />
		</div>
	);
};

export default CodeStashHeader;
