import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'react-feather';

const Pagination = ({
	items, onSelect, selectedPage,
}) => {
	const [selected, setSelected] = useState(selectedPage || items[0]);
	const [currentButtons, updateCurrentButtons] = useState([{}]);
	const [showLeftDots, updateLeftDots] = useState(false);
	const [showRightDots, updateRightDots] = useState(true);

	useEffect(() => {
		const showItems = items;
		if (items.length < 8) {
			updateLeftDots(false);
			updateRightDots(false);
			updateCurrentButtons(items);
		} else if (items.indexOf(selected) < 7) {
			updateLeftDots(false);
			updateCurrentButtons(showItems.slice(0, 8));
			if (items.length > currentButtons.length) {
				updateRightDots(true);
			}
		} else if (items.indexOf(selected) > (items.length - 7)) {
			updateCurrentButtons(showItems.slice((showItems.length - 8), showItems.length));
			updateRightDots(false);
			updateLeftDots(true);
		} else {
			updateCurrentButtons(showItems.slice((showItems.indexOf(selected) - 3), (showItems.indexOf(selected) + 3)));
			updateLeftDots(true);
			updateRightDots(true);
		}
	}, [selected]);

	const handleSelection = sel => {
		setSelected(sel);
		onSelect(sel);
	};

	return (
		<nav className="pagination-wrapper roboto">
			<div className="direction-button" onClick={() => handleSelection(items[items.indexOf(selected) - 1])}>
				<ChevronLeft className="chevron-icon" size={18} />
				<span>Forrige</span>
			</div>
			<div className={`nav-button-square ${items[0] === selected && 'selected'}`} onClick={() => handleSelection(items[0])}>
				{items[0].text}
			</div>
			{showLeftDots && <div className="dotted-indicator">...</div>}
			{currentButtons && currentButtons.map(item => (
				item !== items[0] && item !== items[items.length - 1] && (
					<div
						className={`nav-button-square ${item === selected && 'selected'}`}
						onClick={() => handleSelection(item)}
						key={item.path}
					>{item.text}
					</div>
				)
			))}
			{showRightDots && <div className="dotted-indicator">...</div>}
			<div
				className={`nav-button-square ${items[items.length - 1] === selected && 'selected'}`}
				onClick={() => handleSelection(items[items.length - 1])}
			>{items[items.length - 1].text}
			</div>
			<div className="direction-button" onClick={() => handleSelection(items[items.indexOf(selected) + 1])}>
				<span>Neste</span>
				<ChevronRight className="chevron-icon" size={18} />
			</div>
		</nav>
	);
};

Pagination.defaultProps = {
	onSelect: () => {},
};

Pagination.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	onSelect: PropTypes.func,
	selectedPage: PropTypes.object,
};

export default Pagination;
