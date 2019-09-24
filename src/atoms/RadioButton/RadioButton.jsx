import React from 'react';
import PropTypes from 'prop-types';

const RadioButton = ({
	index, children, callback, selected, value,
}) => (
	<div tabIndex={index + 1} className="radio-button-wrapper" onClick={() => callback(value)}>
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
};

RadioButton.propTypes = {
	callback: PropTypes.func,
	children: PropTypes.node.isRequired,
	index: PropTypes.number,
	selected: PropTypes.bool,
	value: PropTypes.string.isRequired,
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
