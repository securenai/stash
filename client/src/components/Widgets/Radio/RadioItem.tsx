import React from 'react';
import styled from 'styled-components';

const RadioContainer = styled.div`
	background-color: ${(props) =>
		props.selected === true
			? props.theme.colors.secondary
			: props.theme.colors.primary};
	border-radius: 5px;
	width: 30%;
	height: 20px;
	padding: 5px 0px 5px 10px;
	margin-right: 10px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-size: 15px;
	&:hover {
		border: 1px solid #4c67fd;
		/* background-color: black; */
		cursor: pointer;
	}
`;
const RadioDesc = styled.div`
	margin-left: 5px;
`;

export interface RadioItemProps {
	selected: boolean;
	description: string;
	click: () => void;
}

const RadioItem: React.FC<RadioItemProps> = ({
	selected,
	description,
	click
}) => {
	return (
		<RadioContainer onClick={click} selected={selected}>
			<svg aria-hidden="false" width="18" height="18" viewBox="0 0 24 24">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
					fill="currentColor"></path>
				{selected && (
					<circle
						cx="12"
						cy="12"
						r="5"
						className="radioIconForeground"
						fill="#1bd666"></circle>
				)}
			</svg>
			<RadioDesc>{description}</RadioDesc>
		</RadioContainer>
	);
};

export default RadioItem;
