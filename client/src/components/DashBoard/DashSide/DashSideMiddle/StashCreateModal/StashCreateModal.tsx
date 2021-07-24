import React, { useRef, useEffect, useState } from 'react';
import { CrudButton } from '../../../../Widgets/Button/CrudButtons/CrudButton';
import styled from 'styled-components';
import './StashCreateModal.scss';

export interface StashCreateModalProps {
	closeCreate: () => void;
	createStash: (stashName: string, stashType: string) => void;
}

const Modal = styled.div`
    background-color: ${({theme}) => {
		console.log(theme)
		return theme.colors.primary
	}};
	margin: auto;
	padding: 20px;
	border: ${({theme}) => theme.borders.primary};
	border-radius: 5px;
	width: 30%;
	height: 30%;
	min-height: 210px;
	min-width: 350px;
	/* font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif; */
`;
const ModalTitle = styled.div`
    color: ${({theme}) => theme.fontColors.primary};
	font-size: 20px;
	font-weight: 900;
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

	useEffect(() => {
		document.body.addEventListener('click', onClickOutside);
	}, []);

	const modalOuter = useRef(null);

	const onClickOutside = (e: any) => {
		console.log('close');
		if (e.target.className === 'modal') {
			e.preventDefault();
			e.stopPropagation();
			closeCreate();
			document.body.removeEventListener('click', onClickOutside);
		}
	};

	return (
		<div id="createStashModal" className="modal" ref={modalOuter}>
			<Modal>
				<span className="close" onClick={closeCreate}>
					&times;
				</span>

				<ModalTitle>Create Stash</ModalTitle>
				<div className="modal-info">
					<h5>stash name</h5>
					<div className="stash-name-wrapper">
						<span className="stash-type">#</span>
						<input
							className="stash-name-input"
							type="text"
							autoFocus
							value={stashName}
							onChange={(e) => {
								setStashName(e.target.value);
							}}
						/>
					</div>
					<h5>stash type</h5>
					<select onChange={(e) => setStashType(e.target.value)}>
						<option>text</option>
						<option>code</option>
						<option>image</option>
					</select>
					<div className="stash-buttons">
						<CrudButton
							size="small"
							label="SAVE"
							crudType="save"
							onClick={handleCreateStash}
						/>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default StashCreateModal;
