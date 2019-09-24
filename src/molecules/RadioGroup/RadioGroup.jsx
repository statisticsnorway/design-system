import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const RadioGroup = ({
	items, onChange, selectedValue,
}) => {
	const [selected, updateSelected] = useState(selectedValue);

	useEffect(() => {
		onChange(selected);
	}, [selected]);

	return (
		<div className="radio-group-wrapper">
			{items.map((it, index) => (
				<div tabIndex={index + 1} className="radio-button-wrapper" key={it.value} onClick={() => updateSelected(it.value)}>
					<label htmlFor={it.value}>
						{it.label}
						<input
							id={it.value}
							value={it.value}
							type="radio"
							checked={selected === it.value}
							onChange={() => updateSelected(it.value)}
						/>
						<span className="radio-mark" />
					</label>
				</div>
			))}
		</div>
	);
};

RadioGroup.defaultProps = {
	onChange: () => {},
};

RadioGroup.propTypes = {
	items: PropTypes.array,
	onChange: PropTypes.func,
	selectedValue: PropTypes.string,
};

export default RadioGroup;
