import React from 'react';
import { AiFillPlusSquare } from 'react-icons/ai';
import './CodeStashHeader.css';

export interface CodeStashHeaderProps {
	addItem: () => void;
}

const CodeStashHeader: React.FC<CodeStashHeaderProps> = ({ addItem }) => (
	<div className="code-stash-add-icon" onClick={addItem}>
		<AiFillPlusSquare />
	</div>
);

export default CodeStashHeader;
