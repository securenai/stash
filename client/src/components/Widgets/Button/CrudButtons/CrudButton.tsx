import React from 'react';
import './CrudButton.scss';
import { VscSave, VscTrash, VscEdit, VscAdd } from 'react-icons/vsc';

export interface CrudButtonProps {
	/**
	 * Is this the principal call to action on the page?
	 */
	// primary?: boolean;
	crudType: string;
	/**
	 * What background color to use
	 */
	backgroundColor?: string;
	/**
	 * How large should the button be?
	 */
	size?: 'small' | 'medium' | 'large';
	/**
	 * CrudButton contents
	 */
	label: string;
	/**
	 * Optional click handler
	 */
	onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const CrudButton: React.FC<CrudButtonProps> = ({
	crudType = '',
	size = 'medium',
	// backgroundColor,
	label,
	...props
}) => {
	const mode = crudType ? `crud-button--${crudType}` : 'crud-button--default';
	const iconType = () => {
		if (crudType === 'add') {
			return <VscAdd />;
		} else if (crudType === 'edit') {
			return <VscEdit />;
		} else if (crudType === 'save') {
			return <VscSave />;
		} else if (crudType === 'delete') {
			return <VscTrash />;
		} else if (crudType === 'upload') {
			return (
				<span>
					<svg
						className="icon line"
						width="16"
						height="16"
						id="upload"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24">
						<path
							d="M20,16v4a1.08,1.08,0,0,1-1.14,1H5.14A1.08,1.08,0,0,1,4,20V16"
							style={{
								fill: 'none',
								stroke: 'rgb(252, 250, 250)',
								strokeLinecap: 'round',
								strokeLinejoin: 'round',
								strokeWidth: '2'
							}}></path>
						<path
							d="M12,16V3m4,4L12,3,8,7"
							style={{
								fill: 'none',
								stroke: 'rgb(250, 250, 250)',
								strokeLinecap: 'round',
								strokeLinejoin: 'round',
								strokeWidth: '2'
							}}></path>
					</svg>
				</span>
			);
		}
	};
	return (
		<button
			type="button"
			className={['crud-button', `crud-button--${size}`, mode].join(' ')}
			// style={{ backgroundColor }}
			{...props}>
			{label}
			<span className="crud-icon">{iconType()}</span>
		</button>
	);
};
