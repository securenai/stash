import React from 'react';
import styled from 'styled-components';

const Selector = styled.select`
	padding-left: 10px;
	padding-right: 10px;
	height: 35px;
	font-size: 16px;
	width: 100%;
	border-radius: 3px;
	outline: 0px;
	/* background-color: rgba(0, 0, 0, 0.1); */
	border: 1px solid rgba(0, 0, 0, 0.3);
	transition: border-color 0.2s ease-in-out;
	background-color: rgba(0, 0, 0, 0.1);
	color: ${({ theme }) => theme.fontColors.secondary};
`;
const Option = styled.option`
	background-color: ${({ theme }) => theme.colors.primary};
`;

export interface SelectProps {
	options: string[];
	onSelectChange: (e) => void;
}

const Select: React.FC<SelectProps> = ({ options, onSelectChange }) => {
	return (
		<Selector onChange={onSelectChange}>
			{options.map((option, index) => (
				<Option key={index.toString()}>{option}</Option>
			))}
		</Selector>
	);
};

export default Select;
