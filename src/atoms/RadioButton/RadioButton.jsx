import React from 'react';
import PropTypes from 'prop-types';

const RadioButton = ({
	index, children, callback, selected, value, disabled,
}) => (
	<div tabIndex={index + 1} className={`radio-button-wrapper${disabled ? ' disabled' : ''}`} onClick={() => callback(value)}>
		<label htmlFor={value}>
			{children}
			<input
				id={value}
				value={value}
				type="radio"
				checked={selected}
				onChange={() => callback(value)}
			/>
			<span className="radio-mark" />
		</label>
	</div>
);

RadioButton.defaultProps = {
	callback: () => {},
	index: 1,
	disabled: false,
};

RadioButton.propTypes = {
	callback: PropTypes.func,
	children: PropTypes.node.isRequired,
	index: PropTypes.number,
	selected: PropTypes.bool,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
	disabled: PropTypes.bool,
};

export default RadioButton;

/*
options:
	callback: optional callback on selection
	children: required for displaying a label
	index: optional for tab order
	selected: optional for setting selection
	value: required for having value on selection
 */
