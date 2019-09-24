import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@atoms/Checkbox/Checkbox';

const CheckboxGroup = ({
	header, items, onChange, selectedValues,
}) => {
	const [selected, updateSelected] = useState(selectedValues);

	useEffect(() => {
		onChange(selected);
	}, [selected]);

	const setSelected = sel => {
		const newArr = [...selected];
		if (selected.includes(sel)) {
			newArr.splice(selected.indexOf(sel), 1);
		} else {
			newArr.push(sel);
		}
		updateSelected(newArr);
	};

	return (
		<div className="checkbox-group-wrapper">
			{header && <h5>{header}</h5>}
			{items.map((it, index) => (
				<Checkbox
					key={it.value}
					index={index}
					selected={selected.includes(it.value)}
					value={it.value}
					callback={setSelected}
				>{it.label}
				</Checkbox>
			))}
		</div>
	);
};

CheckboxGroup.defaultProps = {
	onChange: () => {},
	selectedValues: [''],
};

CheckboxGroup.propTypes = {
	header: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.string,
	})).isRequired,
	onChange: PropTypes.func,
	selectedValues: PropTypes.array,
};

export default CheckboxGroup;
