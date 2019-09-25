import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { Search } from 'react-feather';

const id = uuid();

const Input = ({
	disabled, handleChange, label, searchField, submitCallback, type, value,
}) => {
	const [inputValue, setValue] = useState(value);

	const handleInputChange = e => {
		setValue(e.target.value);
		handleChange(e.target.value);
	};

	return (
		<div className="input-field-wrapper">
			<input
				className={searchField ? 'has-icon' : ''}
				id={id}
				disabled={disabled}
				type={type}
				value={inputValue}
				onChange={e => handleInputChange(e)}
			/>
			{searchField
			&& (
				<div className="clickable-button" onClick={() => submitCallback(inputValue)}>
					<Search className="search-icon" size={18} />
				</div>
			)}
			<label className={`${inputValue && 'has-value'}`} htmlFor={id}>{label}</label>
		</div>
	);
};

Input.defaultProps = {
	disabled: false,
	handleChange: () => {},
	label: 'Input field',
	searchField: false,
	submitCallback: () => {},
	type: 'text',
};

Input.propTypes = {
	disabled: PropTypes.bool,
	handleChange: PropTypes.func,
	label: PropTypes.string,
	searchField: PropTypes.bool,
	submitCallback: PropTypes.func,
	type: PropTypes.string,
	value: PropTypes.string,
};

export default Input;
