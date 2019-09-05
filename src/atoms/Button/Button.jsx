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
	primary: false,
	type: 'button',
};

Button.propTypes = {
	danger: PropTypes.bool,
	disabled: PropTypes.bool,
	icon: PropTypes.element,
	onClick: PropTypes.func,
	primary: PropTypes.bool,
	text: PropTypes.string.isRequired,
	type: PropTypes.string,
};

export default Button;
