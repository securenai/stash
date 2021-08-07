import * as React from 'react';
import styled from 'styled-components';
import { TiCode } from 'react-icons/ti';
import { TiImage } from 'react-icons/ti';
import { BsFonts } from 'react-icons/bs';

const Input = styled.input`
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
	type: string;
	inputValue: string;
	onChangeValue: (e) => void;
}

const InputWithIcon: React.FC<InputWithIconProps> = ({
	type,
	onChangeValue,
	inputValue
}) => {
	const renderStashIcon = () => {
		if (type === 'text') {
			return <BsFonts />;
		} else if (type === 'image') {
			return <TiImage />;
		} else if (type === 'code') {
			return <TiCode />;
		}
	};

	return (
		<InputDiv>
			<Type>{renderStashIcon()}</Type>
			<Input
				type="text"
				autoFocus
				value={inputValue}
				onChange={onChangeValue}
			/>
		</InputDiv>
	);
};

export default InputWithIcon;
