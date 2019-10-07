import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

const Dropdown = ({
	header, items, onSelect, open, placeholder, searchable, selectedItem,
}) => {
	const id = uuid();
	const node = useRef();
	const [isOpen, setOpen] = useState(open);
	const [availableOptions, filterOptions] = useState(items);
	const [selectedOption, selectItem] = useState(selectedItem || { title: '', id: '' });
	const [inputFieldValue, updateInputValue] = useState('');

	const filterItems = event => {
		updateInputValue(event.target.value);
		filterOptions(items.filter(it => it.title.toLowerCase().includes(event.target.value.toLowerCase())));
	};

	const handleSelection = item => {
		selectItem({ title: item.title, id: item.id });
		onSelect(item);
		setOpen(false);
		filterOptions(items);
		updateInputValue('');
	};

	const handleClickOutside = e => {
		if (!node.current.contains(e.target)) {
			setOpen(false);
		}
	};

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);

	return (
		<div className="dropdown-component-wrapper">
			{header && <label htmlFor={id}>{header}</label>}
			<div className="dropdown-interactive-area" ref={node} onClick={() => setOpen(!isOpen)}>
				<input
					className={isOpen ? 'focused' : ''}
					id={id}
					onChange={e => filterItems(e)}
					disabled={!searchable}
					placeholder={selectedOption.title ? selectedOption.title : placeholder}
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
									id={it.id}
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
	items: [{ id: '', title: '' }],
	onSelect: () => {},
	open: false,
	searchable: false,
	placeholder: '-- Select --',
};

Dropdown.propTypes = {
	header: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string,
		id: PropTypes.string,
	})),
	onSelect: PropTypes.func,
	open: PropTypes.bool,
	placeholder: PropTypes.string,
	searchable: PropTypes.bool,
	selectedItem: PropTypes.object,
};

export default Dropdown;
