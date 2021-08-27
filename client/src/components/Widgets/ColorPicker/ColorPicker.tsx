import React, { useEffect, useState } from 'react';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';

export interface ColorPickerProps {
	initialColor: { r: number; g: number; b: number; a: number };
	changeColor: (rgba: { r: number; g: number; b: number; a: number }) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
	initialColor,
	changeColor
}) => {
	useEffect(() => {
		setColor(initialColor);
	}, []);

	const [displayColorPicker, setDisplayColorPicker] = useState(false);
	const [color, setColor] = useState({
		r: 255,
		g: 255,
		b: 255,
		a: 1
	});

	const handleClick = () => {
		setDisplayColorPicker(!displayColorPicker);
	};

	const handleClose = () => {
		setDisplayColorPicker(false);
	};

	const handleChange = (color) => {
		setColor(color.rgb);
		changeColor(color.rgb);
	};

	const styles = reactCSS({
		default: {
			color: {
				background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
				width: '36px',
				height: '14px',
				borderRadius: '2px'
			},
			swatch: {
				padding: '1px',
				margin: '3px',
				marginBottom: '-1px',
				background: 'rgb(102, 95, 95)',
				// borderRadius: '5px',
				boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
				display: 'inline-block',
				cursor: 'pointer'
			},
			popover: {
				position: 'absolute',
				zIndex: '2',
				right: '-75px'
			},
			cover: {
				position: 'fixed',
				top: '0px',
				right: '0px',
				bottom: '0px',
				left: '0px'
			}
		}
	});

	return (
		<div>
			<div style={styles.swatch} onClick={handleClick}>
				<div style={styles.color} />
			</div>
			{displayColorPicker ? (
				<div style={styles.popover}>
					<div style={styles.cover} onClick={handleClose} />
					<SketchPicker color={color} onChange={handleChange} />
				</div>
			) : null}
		</div>
	);
};

export default ColorPicker;
