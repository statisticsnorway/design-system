import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { AlertTriangle, Search } from 'react-feather';

const Input = ({
	disabled, error, errorMessage, handleChange, label, negative, searchField, submitCallback, type, value,
}) => {
	const [inputValue, setValue] = useState(value);
	const id = uuid();
	const handleInputChange = e => {
		setValue(e.target.value);
		handleChange(e.target.value);
	};

	return (
		<div className={`input-field-wrapper ${negative ? 'negative' : 'standard'}${error ? ' with-error' : ''}`}>
			<label htmlFor={id}>{label}</label>
			<div className="d-flex">
				<input
					className={searchField ? 'has-icon' : ''}
					id={id}
					disabled={disabled}
					type={type}
					value={inputValue}
					onChange={e => handleInputChange(e)}
				/>
				{searchField && (
					<div className="input-icon" onClick={() => submitCallback(inputValue)}>
						<Search className="search-icon" size={18} />
					</div>
				)}
				{error && (
					<div className="input-icon">
						<AlertTriangle className="alert-icon" size={18} />
					</div>
				)}
			</div>
			{error && (errorMessage && (
				<span className="error-message roboto">{ errorMessage }</span>
			))}
		</div>
	);
};

Input.defaultProps = {
	disabled: false,
	error: false,
	handleChange: () => {},
	label: 'Input field',
	negative: false,
	searchField: false,
	submitCallback: () => {},
	type: 'text',
};

Input.propTypes = {
	disabled: PropTypes.bool,
	error: PropTypes.bool,
	errorMessage: PropTypes.string,
	handleChange: PropTypes.func,
	label: PropTypes.string,
	negative: PropTypes.bool,
	searchField: PropTypes.bool,
	submitCallback: PropTypes.func,
	type: PropTypes.string,
	value: PropTypes.string,
};

export default Input;
