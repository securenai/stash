import React, { useState } from 'react';
import { CrudButton } from '../../../../Widgets/Button/CrudButtons/CrudButton';
import styled from 'styled-components';
import InputWithIcon from '../../../../Widgets/Input/InputWithIcon';
import Select from '../../../../Widgets/Select/Select';

export interface StashCreateModalProps {
	closeCreate: () => void;
	createStash: (stashName: string, stashType: string) => void;
}

const CreateStashModal = styled.div`
	background-color: ${({ theme }) => {
		/* console.log(theme); */
		return theme.colors.primary;
	}};
	margin: auto;
	padding: 20px;
	border: ${({ theme }) => theme.borders.primary};
	border-radius: 5px;
	width: 30%;
	height: 30%;
	min-height: 210px;
	min-width: 430px;
`;
const CloseButton = styled.span`
	color: #aaaaaa;
	float: right;
	font-size: 28px;
	font-weight: bold;
	&:hover {
		color: ${({ theme }) => theme.fontColors.primary};
		text-decoration: none;
		cursor: pointer;
	}
`;
const ModalInfo = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
`;
const Title = styled.div`
	color: ${({ theme }) => theme.fontColors.primary};
	font-size: 20px;
	font-weight: 900;
`;
const Label = styled.h5`
	color: ${({ theme }) => theme.fontColors.primary};
	margin-bottom: 8px;
	font-size: 12px;
	font-weight: 600;
	text-transform: uppercase;
`;
const ButtonSection = styled.div`
	margin-top: 15px;
	display: flex;
	flex-direction: row-reverse;
`;

const StashCreateModal: React.FC<StashCreateModalProps> = ({
	closeCreate,
	createStash
}) => {
	const [stashName, setStashName] = useState('');
	const [stashType, setStashType] = useState('text');

	const handleCreateStash = () => {
		if (stashName !== '') {
			closeCreate();
			// const stashId = stashName + new Date().toLocaleString();
			createStash(stashName, stashType);
		}
	};

	return (
		<CreateStashModal>
			<CloseButton onClick={closeCreate}>&times;</CloseButton>
			<Title>Create Stash</Title>
			<ModalInfo>
				<Label>stash name</Label>
				<InputWithIcon
					type={stashType}
					inputValue={stashName}
					onChangeValue={(e) => {
						setStashName(e.target.value);
					}}
				/>
				<Label>stash type</Label>
				<Select
					onSelectChange={(e) => setStashType(e.target.value)}
					options={['text', 'code', 'image']}
				/>
				<ButtonSection>
					<CrudButton
						size="small"
						label="SAVE"
						crudType="save"
						onClick={handleCreateStash}
					/>
				</ButtonSection>
			</ModalInfo>
		</CreateStashModal>
	);
};

export default StashCreateModal;
