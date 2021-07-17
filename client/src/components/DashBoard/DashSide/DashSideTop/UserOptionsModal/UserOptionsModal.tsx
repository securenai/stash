import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import UserOptionListItem from '../../../../Widgets/ListItems/UserOptionListItem';

const Modal = styled.div`
	display: flex; /* Hidden by default */
	position: fixed; /* Stay in place */
	z-index: 1; /* Sit on top */
	left: 0;
	top: 0;
	width: 100%; /* Full width */
	height: 100%; /* Full height */
	overflow: auto; /* Enable scroll if needed */
`;
const UserOptionsModalContainer = styled.div`
	border-radius: 5px;
	background-color: #fff;
	position: absolute;
	top: 100px;
	left: 35px;
	padding: 0px 0px 25px 0px;
	width: 180px;
	border: ${({ theme }) => theme.borders.primary};
	border-width: 2px;
`;
const UserName = styled.h4`
	text-align: center;
	color: black;
	/* color: ${({ theme }) => theme.fontColors.primary}; */
`;

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
		if (e.target.classList.contains('userOptionsModal')) {
			e.preventDefault();
			e.stopPropagation();
			closeModal();
			document.body.removeEventListener('click', onClickOutside);
		}
	};

	return (
		<Modal className="userOptionsModal" ref={modalOuter}>
			<UserOptionsModalContainer>
				<UserName>{userName}</UserName>
				<UserOptionListItem
					doTask={() => onClickOption(openUserSettings)}
					iconType={'Settings'}
				/>
				<UserOptionListItem
					doTask={() => onClickOption(onLogout)}
					iconType={'Log Out'}
				/>
			</UserOptionsModalContainer>
		</Modal>
	);
};
