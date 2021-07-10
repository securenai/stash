import React, { useState, useEffect, useRef } from 'react';
import './UserOptionsModal.scss';
import styled from 'styled-components';
import UserOptionListItem from '../../../Widgets/ListItems/UserOptionListItem';

export interface UserOptionsModalProps {
	userName: string;
	closeModal: () => void;
	openUserSettings: () => void;
	onLogout: () => void;
}

export const UserOptionsModal: React.FC<UserOptionsModalProps> = ({
	userName,
	closeModal,
	openUserSettings,
	onLogout
}) => {
	useEffect(() => {
		document.body.addEventListener('click', onClickOutside);
	}, []);

	const modalOuter = useRef(null);

	const onClickOption = (doTask: () => void) => {
		closeModal();
		doTask();
	};

	const onClickOutside = (e: any) => {
		console.log('close');
		if (e.target.className === 'modal2') {
			e.preventDefault();
			e.stopPropagation();
			closeModal();
			document.body.removeEventListener('click', onClickOutside);
		}
	};

	return (
		<div id="userOptionsModal" className="modal2" ref={modalOuter}>
			<div className="userOptions-container">
				<h4 className="userOptions-name">{userName}</h4>
				<UserOptionListItem
					doTask={() => onClickOption(openUserSettings)}
					iconType={'Settings'}
				/>
				<UserOptionListItem
					doTask={() => onClickOption(onLogout)}
					iconType={'Log Out'}
				/>
			</div>
		</div>
	);
};
