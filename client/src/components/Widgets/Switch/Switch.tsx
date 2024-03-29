import React, { useState } from 'react';
import './Switch.scss';

export interface SwitchProps {
	className?: string;
	theme?: string;
	label: string;
	noText?: boolean;
	large?: boolean;
	onToggle: (mode: boolean) => void;
	isToggled?: boolean;
}

const Switch: React.FC<SwitchProps> = (props) => {
	const {
		large = false,
		className = 'switch',
		label,
		noText = false,
		theme,
		onToggle,
		isToggled
	} = props;

	const [toggleOn, setToggleOn] = useState(isToggled);

	let switchClass = className;
	let id = label;

	large == true ? (switchClass += ' switch--large') : null;
	noText == true ? (switchClass += ' switch--no-text') : null;
	theme == 'success' ? (switchClass += ' switch--success') : null;

	const handleToggle = () => {
		setToggleOn(!toggleOn);
		onToggle(!toggleOn);
	};

	return (
		<div aria-label={label} className={switchClass}>
			<label className="switch__label" htmlFor={id}>
				<input
					role="switch"
					type="checkbox"
					className="switch__input"
					id={id}
					onChange={handleToggle}
				/>
				{/* <span className="switch__text" data-on="ON" data-off="OFF"></span> */}
				{/* <span className="switch__handle"></span> */}
				<span
					className={toggleOn ? 'switch__text__on' : 'switch__text__off'}
					data-on="ON"
					data-off="OFF"></span>
				<span
					className={
						toggleOn ? 'switch__handle__on' : 'switch__handle__off'
					}></span>
			</label>
		</div>
	);
};

export default Switch;
