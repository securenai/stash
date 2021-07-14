import React from 'react';

export interface ErrorDisplayProps {
	errMsg: String;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ errMsg }) => {
	return <div>{errMsg}</div>;
};

export default ErrorDisplay;
