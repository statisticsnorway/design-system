import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RadioButton from '@atoms/RadioButton/RadioButton';

const RadioGroup = ({
	header, items, onChange, selectedValue,
}) => {
	const [selected, updateSelected] = useState(selectedValue);

	useEffect(() => {
		onChange(selected);
	}, [selected]);

	return (
		<div className="radio-group-wrapper">
			{header && <h5>{header}</h5>}
			{items.map((it, index) => (
				<RadioButton
					key={it.value}
					index={index}
					selected={it.value === selected}
					value={it.value}
					callback={updateSelected}
				>{it.label}
				</RadioButton>
			))}
		</div>
	);
};

RadioGroup.defaultProps = {
	onChange: () => {},
};

RadioGroup.propTypes = {
	header: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.string,
	})).isRequired,
	onChange: PropTypes.func,
	selectedValue: PropTypes.string,
};

export default RadioGroup;

/*
options:
	items: required options for radio group
	onChange: optional callback
	selectedValue: optional selection on init
 */
