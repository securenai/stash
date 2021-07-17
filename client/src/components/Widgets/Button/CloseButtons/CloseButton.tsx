import React from 'react';
import styled from 'styled-components';

export interface CloseButtonProps {
	onButtonClick: () => void;
}

const Button = styled.div`
	border-width: 2px;
	border-style: solid;
	border-radius: 50%;
	width: 32px;
	height: 32px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	border-color: #72767d;
	&:hover {
		background-color: #484c52;
	}
`;
const Svg = styled.div`
	margin-top: 7px;
`;

const CloseButton: React.FC<CloseButtonProps> = ({ onButtonClick }) => {
	return (
		<Button onClick={onButtonClick}>
			<Svg>
				<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24">
					<path
						fill="#a7b3c0"
						d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6
                    20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
				</svg>
			</Svg>
		</Button>
	);
};

export default CloseButton;
