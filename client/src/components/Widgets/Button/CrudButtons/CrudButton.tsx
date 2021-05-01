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
		} else {
			return <VscTrash />;
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
