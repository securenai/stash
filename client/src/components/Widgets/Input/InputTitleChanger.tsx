import React from 'react';
import styled from 'styled-components';
import IconButtonEdit from '../Button/IconButtons/IconButtonEdit';

const TitleContainer = styled.div`
	width: 98%;
	color: ${({ theme }) => theme.fontColors.primary};
	padding: 5px;
	border-bottom: ${({ theme }) => theme.borders.primary};
	display: flex;
`;
const Title = styled.span`
	width: 100%;
	padding: 5px;
	flex-grow: 1;
`;
const TitleEditing = styled.input`
	width: 100%;
	/* color: rgb(253, 60, 53); */
	background-color: indianred;
`;

export interface InputTitleChangerProps {
	enableTextEdit: boolean;
	title: string;
	onChangeValue: (e) => void;
	onClickEdit: () => void;
}

const InputTitleChanger: React.FC<InputTitleChangerProps> = ({
	enableTextEdit,
	title,
	onChangeValue,
	onClickEdit
}) => {
	return (
		<TitleContainer>
			<Title>
				{enableTextEdit === true ? (
					<TitleEditing
						autoFocus
						value={title}
						onChange={onChangeValue}
						spellCheck="false"
					/>
				) : (
					<span>{title}</span>
				)}
			</Title>
			<IconButtonEdit onClick={onClickEdit} />
		</TitleContainer>
	);
};

export default InputTitleChanger;
