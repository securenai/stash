import React, { useEffect, useState } from 'react';
import { CrudButton } from '../../../../Widgets/Button/CrudButtons/CrudButton';
import styled from 'styled-components';
import InputWithIcon from '../../../../Widgets/Input/InputWithIcon';
import RadioItem from '../../../../Widgets/Radio/RadioItem';
import TextDescription from '../../../../Widgets/Text/TextDescription';

export interface StashEditModalProps {
	closeEdit: () => void;
	saveChanges: (
		editInfo: {
			id: string;
			type: string;
			name: string;
		},
		options: boolean[]
	) => void;
	editingData: {
		id: string;
		type: string;
		name: string;
	};
}

const EditStashModal = styled.div`
	background-color: ${({ theme }) => theme.colors.primary};
	margin: auto;
	padding: 20px;
	border: ${({ theme }) => theme.borders.primary};
	border-radius: 5px;
	width: 30%;
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
const Title = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: ${({ theme }) => theme.fontColors.primary};
	font-size: 20px;
	font-weight: 900;
`;
const RadioSet = styled.div`
	display: flex;
	justify-content: space-between;
	height: 30px;
	padding: 15px 10px 0px 10px;
`;
const ModalInfo = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
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

const StashEditModal: React.FC<StashEditModalProps> = ({
	closeEdit,
	saveChanges,
	editingData
}) => {
	const [stashName, setStashName] = useState('');
	const [stashType, setStashType] = useState('text');
	const [radioOptions, setRadioOptions] = useState([true, false, false]);

	useEffect(() => {
		setStashName(editingData.name);
		setStashType(editingData.type);
	}, []);

	const handleRadioClick = (index: number) => {
		index === 0
			? setRadioOptions([true, false, false])
			: index === 1
			? setRadioOptions([false, true, false])
			: setRadioOptions([false, false, true]);
	};

	return (
		<EditStashModal>
			<Title>Manage Stash
				<CloseButton onClick={closeEdit}>&times;</CloseButton>
			</Title>
			<RadioSet>
				<RadioItem
					selected={radioOptions[0]}
					description={'Edit Stash'}
					click={() => handleRadioClick(0)}
				/>
				<RadioItem
					selected={radioOptions[1]}
					description={'Copy Stash'}
					click={() => handleRadioClick(1)}
				/>
				<RadioItem
					selected={radioOptions[2]}
					description={'Delete Stash'}
					click={() => handleRadioClick(2)}
				/>
			</RadioSet>

			<ModalInfo>
				{radioOptions[2] !== true && (
					<>
						<Label>stash name</Label>
						<InputWithIcon
							type={stashType}
							inputValue={stashName}
							onChangeValue={(e) => {
								setStashName(e.target.value);
							}}
						/>
					</>
				)}
				{radioOptions[1] === true && (
					<TextDescription text="You are about to copy this stash and create a new stash with the above name and settings." />
				)}
				{radioOptions[2] === true && (
					<TextDescription text="You are about to delete this stash, all contents in this stash will be deleted, this action cannot be undone." />
				)}
				<ButtonSection>
					{radioOptions[2] !== true && (
						<CrudButton
							size="small"
							label="APPLY"
							crudType="save"
							onClick={() =>
								saveChanges(
									{
										id: editingData.id,
										type: editingData.type,
										name: stashName
									},
									radioOptions
								)
							}
						/>
					)}
					{radioOptions[2] === true && (
						<CrudButton
							size="small"
							label="DELETE"
							crudType="delete"
							onClick={() =>
								saveChanges(
									{
										id: editingData.id,
										type: editingData.type,
										name: stashName
									},
									radioOptions
								)
							}
						/>
					)}
				</ButtonSection>
			</ModalInfo>
		</EditStashModal>
	);
};

export default StashEditModal;
