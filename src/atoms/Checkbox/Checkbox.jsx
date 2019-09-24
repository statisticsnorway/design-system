import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({
	index, children, callback, selected, value,
}) => (
	<div tabIndex={index + 1} className="checkbox-button-wrapper" onClick={() => callback(value)}>
		<label htmlFor={value}>
			{children}
			<input
				id={value}
				value={value}
				type="checkbox"
				checked={selected}
				onChange={() => callback(value)}
			/>
			<span className="check-mark" />
		</label>
	</div>
);

Checkbox.defaultProps = {};

Checkbox.propTypes = {
	callback: PropTypes.func,
	children: PropTypes.node,
	index: PropTypes.number,
	selected: PropTypes.bool,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
};

export default Checkbox;

/*
options:
	callback: optional callback on selection
	children: required for displaying a label
	index: optional for tab order
	selected: optional for setting selection
	value: required for having value on selection
 */
