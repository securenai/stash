import React from 'react';

export interface SuccessDisplayProps {
	successMsg: String;
}

const SuccessDisplay: React.FC<SuccessDisplayProps> = ({ successMsg }) => {
	return <div>{successMsg}</div>;
};

export default SuccessDisplay;
