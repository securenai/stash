import React, { useRef, useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

export interface ModalProps {
	showModal: boolean;
	closeModal: () => void;
	children: React.ReactNode;
}

const ModalContainer = styled.div`
	display: flex; /* Hidden by default */
	position: fixed; /* Stay in place */
	z-index: 1; /* Sit on top */
	left: 0;
	top: 0;
	width: 100%; /* Full width */
	height: 100%; /* Full height */
	overflow: auto; /* Enable scroll if needed */
	background-color: rgb(0, 0, 0); /* Fallback color */
	background-color: rgba(0, 0, 0, 0.7); /* Black w/ opacity */
`;

const Modal: React.FC<ModalProps> = ({ showModal, closeModal, children }) => {
	const modalOuter = useRef(null);

	const close = (e) => {
		if (modalOuter.current === e.target) {
			closeModal();
		}
	};

	const keyPress = useCallback(
		(e) => {
			if (e.key === 'Escape' && showModal) {
				closeModal();
			}
		},
		[closeModal, showModal]
	);

	useEffect(() => {
		document.addEventListener('keydown', keyPress);
		return () => document.removeEventListener('keydown', keyPress);
	}, [keyPress]);

	return (
		showModal && (
			<ModalContainer ref={modalOuter} onClick={close}>
				{children}
			</ModalContainer>
		)
	);
};

export default Modal;
