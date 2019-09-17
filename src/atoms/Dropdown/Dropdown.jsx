import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

const id = uuid();


const Dropdown = ({
	header, items, onSelect, open, searchable, selectedItem,
}) => {
	const [isOpen, toggleIsOpen] = useState(false);
	const [availableOptions, filterOptions] = useState(items);
	const [selectedOption, selectItem] = useState(selectedItem || { title: '', id: '' });
	const [inputFieldValue, updateInputValue] = useState('');

	const filterItems = event => {
		updateInputValue(event.target.value);
		filterOptions(items.filter(it => it.title.toLowerCase().includes(event.target.value.toLowerCase())));
	};

	const handleSelection = item => {
		selectItem({ title: item.title, id: item.id });
		toggleIsOpen(false);
		filterOptions(items);
		updateInputValue('');
	};

	return (
		<div className="dropdown-component-wrapper">
			{header && <label htmlFor={id}>{header}</label>}
			<div className="dropdown-interactive-area" onClick={() => toggleIsOpen(!isOpen)}>
				<input
					id={id}
					onChange={e => filterItems(e)}
					disabled={!searchable}
					placeholder={selectedOption.title ? selectedOption.title : '-- --'}
					value={inputFieldValue}
				/>
				{isOpen && (
					<ul className="list-of-options">
						{availableOptions.map(it => (
							<li
								className={`option-list-element ${selectedOption.id === it.id && 'selected'}`}
								key={it.id}
							>
								<option
									onClick={() => handleSelection(it)}
									value={it.id}
								>{it.title}
								</option>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

Dropdown.defaultProps = {
	header: '',
	searchable: false,
};

Dropdown.propTypes = {
	header: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string,
		id: PropTypes.string,
	})),
	onSelect: PropTypes.func,
	open: PropTypes.bool,
	searchable: PropTypes.bool,
	selectedItem: PropTypes.object,
};

export default Dropdown;
