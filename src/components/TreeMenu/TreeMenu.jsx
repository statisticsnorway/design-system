import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { ChevronRight } from 'react-feather';

const TreeMenu = ({
	activeItem, items, onSelect,
}) => {
	const node = useRef();
	const itemsSection = useRef();
	const [activeSubmenu, changeSubmenu] = useState({});
	const [sectionWidth, updateWidth] = useState(0);

	const handleSelection = e => {
		if (activeSubmenu) {
			changeSubmenu({});
		}
		onSelect(e);
	};

	const handleClickOutside = e => {
		if (!node.current.contains(e.target)) {
			changeSubmenu({});
		}
	};

	useEffect(() => {
		updateWidth(itemsSection.current.offsetWidth);

		if (Object.keys(activeSubmenu).length > 0) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [activeSubmenu]);

	return (
		<div className="tree-menu-wrapper roboto">
			<div ref={itemsSection} className="items-section">
				{items && items.map(item => (
					item.items
						? (
							<div
								key={uuid()}
								className={`tree-node ${item.path === activeItem && 'selected'}`}
								onClick={() => changeSubmenu(item)}
							>{item.label}<ChevronRight className="arrow-icon" size="18" />
							</div>
						) : (
							<div
								key={uuid()}
								className={`tree-node ${item.path === activeItem && 'selected'}`}
								onClick={() => handleSelection(item.path)}
							>{item.label}<ChevronRight className="arrow-icon" size="18" />
							</div>
						)
				))}
			</div>
			{Object.keys(activeSubmenu).length > 0 && (
				<div ref={node} className="items-section sub-menu" style={{ right: `-${sectionWidth}px` }}>
					{activeSubmenu.items.map(item => (
						<div
							key={item.path}
							className={`tree-node ${(activeSubmenu.path + item.path) === activeItem && 'selected'}`}
							onClick={() => handleSelection(activeSubmenu.path + item.path)}
						>
							{item.label}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

TreeMenu.defaultProps = {};

TreeMenu.propTypes = {
	activeItem: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.object),
	onSelect: PropTypes.func,
};

export default TreeMenu;
