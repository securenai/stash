import React from 'react';
import { AiFillPlusSquare } from 'react-icons/ai';
import './CodeStashHeader.css';

export interface CodeStashHeaderProps {
}

const CodeStashHeader: React.FC<CodeStashHeaderProps> = () => <div className="code-stash-add-icon"><AiFillPlusSquare /></div>

export default CodeStashHeader;
