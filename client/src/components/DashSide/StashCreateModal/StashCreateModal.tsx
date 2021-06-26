import React, { useRef, useEffect, useState } from 'react';
import { CrudButton } from '../../Widgets/Button/CrudButtons/CrudButton';
import './StashCreateModal.scss';

export interface StashCreateModalProps {
	closeCreate: () => void;
	createStash: (stashName: string, stashType: string) => void;
}

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
		<div id="myModal" className="modal" ref={modalOuter}>
			<div className="modal-content">
				<span className="close" onClick={closeCreate}>
					&times;
				</span>
				<div className="modal-title">Create Stash</div>
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
			</div>
		</div>
	);
};

export default StashCreateModal;
