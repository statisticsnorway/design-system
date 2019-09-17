import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

const id = uuid();

const Input = ({
	disabled, handleChange, label, type, value,
}) => {
	const [inputValue, setValue] = useState(value);

	const handleInputChange = e => {
		setValue(e.target.value);
		handleChange(e.target.value);
	};

	return (
		<div className="input-field-wrapper">
			<input
				id={id}
				disabled={disabled}
				type={type}
				value={inputValue}
				onChange={e => handleInputChange(e)}
			/>
			<label className={`${inputValue && 'has-value'}`} htmlFor={id}>{label}</label>
		</div>
	);
};

Input.defaultProps = {
	disabled: false,
	handleChange: () => {},
	label: 'Input field',
	type: 'text',
};

Input.propTypes = {
	disabled: PropTypes.bool,
	handleChange: PropTypes.func,
	label: PropTypes.string,
	type: PropTypes.string,
	value: PropTypes.string,
};

export default Input;
