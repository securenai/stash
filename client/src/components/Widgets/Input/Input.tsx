import * as React from 'react';
import styled from 'styled-components';

const InputText = styled.input`
	background: transparent;
	outline-width: 0px;
	color: ${({ theme }) => theme.fontColors.secondary};
	border: none;
	font-size: 16px;
	width: 100%;
	/* &:focus {
		border-color: #7289da;
	} */
`;
const InputDiv = styled.div`
	display: flex;
	padding-left: 10px;
	padding-right: 10px;
	height: 40px;
	font-size: 16px;
	width: 95.5%;
	border-radius: 3px;
	/* color: rgb(220, 221, 222); */
	color: ${({ theme }) => theme.fontColors.secondary};
	outline: 0px;
	background-color: rgba(0, 0, 0, 0.1);
	border: 1px solid rgba(0, 0, 0, 0.3);
	transition: border-color 0.2s ease-in-out;
	&:hover {
		border-color: #000000;
	}
	&:focus-within {
		border-color: #7289da;
	}
`;
const Type = styled.span`
	align-self: center;
	font-size: 24px;
	padding-right: 5px;
`;

export interface InputWithIconProps {
	inputValue: string;
	onChangeValue: (e) => void;
}

const Input: React.FC<InputWithIconProps> = ({
	onChangeValue,
	inputValue
}) => {
	return (
		<InputDiv>
			<InputText
				type="text"
				autoFocus
				value={inputValue}
				onChange={onChangeValue}
				spellCheck="false"
			/>
		</InputDiv>
	);
};

export default Input;
