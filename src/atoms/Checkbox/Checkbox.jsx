import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({
	index, callback, selected, value, label,
}) => (
	<div tabIndex={index + 1} className="checkbox-button-wrapper" onClick={() => callback(value)}>
		<label htmlFor={value}>
			{label}
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

Checkbox.defaultProps = {
	callback: () => {},
	index: 1,
};

Checkbox.propTypes = {
	callback: PropTypes.func,
	index: PropTypes.number,
	selected: PropTypes.bool,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
	label: PropTypes.string,
};

export default Checkbox;

/*
options:
	callback: optional callback on selection
	label: required for displaying a label
	index: optional for tab order
	selected: optional for setting selection
	value: required for having value on selection
 */
