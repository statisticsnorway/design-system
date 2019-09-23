import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
	danger, disabled, icon, onClick, primary, text, type,
}) => (
	<button
		type={type}
		className={
			`button-container ${primary ? 'primary' : 'secondary'} ${danger && 'danger'}`
		}
		onClick={onClick}
		disabled={disabled}
	>	{icon}
		<span className="button-text">{text}</span>
	</button>
);

Button.defaultProps = {
	danger: false,
	disabled: false,
	onClick: () => {},
	primary: false,
	type: 'button',
};

Button.propTypes = {
	danger: PropTypes.bool,
	disabled: PropTypes.bool,
	icon: PropTypes.element,
	onClick: PropTypes.func,
	primary: PropTypes.bool,
	text: PropTypes.string,
	type: PropTypes.string,
};

export default Button;

/*
options:
	danger: optional boolean to change button styling
	disabled: optional boolean to disable button
	icon: optional element to insert icon into button
	onClick: optional callback
	primary: optional boolean to change button styling
	text: optional string
	type: optional button type, defaults to 'button'
 */
