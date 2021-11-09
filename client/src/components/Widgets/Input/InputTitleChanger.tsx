import React from 'react';
import styled from 'styled-components';
import IconButtonEdit from '../Button/IconButtons/IconButtonEdit';

const TitleContainer = styled.div`
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
	color: ${({ theme }) => theme.fontColors.primary};
	/* background-color: indianred; */
`;
const TitlePlaceholder = styled.span`
	opacity: 0.5;
`;

export interface InputTitleChangerProps {
	enableTextEdit: boolean;
	title: string;
	placeholder?: string;
	onChangeValue: (e) => void;
	onClickEdit: () => void;
}

const InputTitleChanger: React.FC<InputTitleChangerProps> = ({
	enableTextEdit,
	title,
	placeholder,
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
						placeholder={placeholder}
					/>
				) : (
					<TitlePlaceholder>
						{title === undefined || title === ''
							? placeholder
							: title.length > 30
							? title.substring(0, 30) + '...'
							: title}
					</TitlePlaceholder>
				)}
			</Title>
			<IconButtonEdit onClick={onClickEdit} />
		</TitleContainer>
	);
};

export default InputTitleChanger;
