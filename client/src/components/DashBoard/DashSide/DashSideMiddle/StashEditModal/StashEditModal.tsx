import React, { useRef, useEffect, useState } from 'react';
import { CrudButton } from '../../../../Widgets/Button/CrudButtons/CrudButton';
import styled from 'styled-components';
import './StashEditModal.scss';
import InputWithIcon from '../../../../Widgets/Input/InputWithIcon';
import Select from '../../../../Widgets/Select/Select';
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

const Modal = styled.div`
	background-color: ${({ theme }) => {
		/* console.log(theme); */
		return theme.colors.primary;
	}};
	margin: auto;
	padding: 20px;
	border: ${({ theme }) => theme.borders.primary};
	border-radius: 5px;
	width: 30%;
	min-width: 430px;
	/* font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif; */
`;
const ModalTitle = styled.div`
	color: ${({ theme }) => theme.fontColors.primary};
	font-size: 20px;
	font-weight: 900;
`;
const Title = styled.h5`
	color: ${({ theme }) => theme.fontColors.primary};
	margin-bottom: 8px;
	font-size: 12px;
	font-weight: 600;
	text-transform: uppercase;
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
		document.body.addEventListener('click', onClickOutside);
	}, []);

	const modalOuter = useRef(null);

	const onClickOutside = (e: any) => {
		if (e.target.className === 'modal') {
			e.preventDefault();
			e.stopPropagation();
			closeEdit();
			document.body.removeEventListener('click', onClickOutside);
		}
	};

	const handleRadioClick = (index: number) => {
		index === 0
			? setRadioOptions([true, false, false])
			: index === 1
			? setRadioOptions([false, true, false])
			: setRadioOptions([false, false, true]);
	};

	return (
		<div id="saveChangesModal" className="modal" ref={modalOuter}>
			<Modal>
				<span className="close" onClick={closeEdit}>
					&times;
				</span>
				<ModalTitle>Manage Stash</ModalTitle>
				<div className="modal-radio-set">
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
				</div>

				<div className="modal-info">
					{radioOptions[2] !== true && (
						<div>
							<Title>stash name</Title>
							<InputWithIcon
								type={stashType}
								inputValue={stashName}
								onChangeValue={(e) => {
									setStashName(e.target.value);
								}}
							/>
						</div>
					)}
					{radioOptions[1] === true && (
						<TextDescription text="You are about to copy this stash and create a new stash with the above name and settings." />
					)}
					{radioOptions[2] === true && (
						<TextDescription text="You are about to delete this stash, all contents in this stash will be deleted, this action cannot be undone." />
					)}

					{/* <Title>stash type</Title>
					<Select
						onSelectChange={(e) => setStashType(e.target.value)}
						options={['text', 'code', 'image']}
					/> */}

					<div className="stash-buttons">
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
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default StashEditModal;
