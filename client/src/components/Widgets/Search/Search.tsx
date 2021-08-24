import React, { useState, useRef } from 'react';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import styled from 'styled-components';

export interface SearchProps {
	placeholder: string;
	onInputChange: (inputValue: string) => void;
}

const SearchWidget = styled.div<{inputOnFocus:any}>`
	display: flex;
	align-items: center;
	color: gray;
	border-radius: 5px;
	padding: 3px;
	/* background: #202225; */
	background-color: ${({ theme }) => theme.colors.primary};
	border: ${(props) => (props.inputOnFocus.hasFocus ? '2px solid' : 'none')};
	& > .MuiSvgIcon-root {
		font-size: 20px;
	}
	& > input {
		padding: 0 10px;
		width: 100%;
		background: transparent;
		outline-width: 0;
		color: ${({ theme }) => theme.fontColors.primary};
		border: none;
		/* font-weight: 700; */
	}
`;

const Search: React.FC<SearchProps> = ({ placeholder, onInputChange }) => {
	// const ref = useRef();
	const [hasFocus, setFocus] = useState(false);
	const [inputValue, setInputValue] = useState('');

	const handleOnChange = (val: string) => {
		setInputValue(val);
		onInputChange(val);
	};

	return (
		<SearchWidget inputOnFocus={{ hasFocus }}>
			<input
				placeholder={placeholder}
				value={inputValue}
				onChange={(e) => handleOnChange(e.target.value)}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
			/>
			<SearchRoundedIcon />
		</SearchWidget>
	);
};

export default Search;
