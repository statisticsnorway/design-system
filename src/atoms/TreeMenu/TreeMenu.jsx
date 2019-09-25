import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { NavLink } from 'react-router-dom';
import { ChevronRight } from 'react-feather';

const TreeMenu = ({
	items, match,
}) => {
	const node = useRef();
	const [activeSubmenu, changeSubmenu] = useState({});
	const itemsSection = useRef();
	const [sectionWidth, updateWidth] = useState(0);

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
		<div className="tree-menu-wrapper">
			<div ref={itemsSection} className="items-section">
				{items && items.map(item => (
					item.items
						? (
							<div
								key={uuid()}
								className={`tree-node ${item.path === match.url && 'selected'}`}
								onClick={() => changeSubmenu(item)}
							>{item.label}{item.items && <ChevronRight className="arrow-icon" size="18" />}
							</div>
						) : (
							<NavLink key={uuid()} activeClassName="selected" className="tree-node" to={match.url + item.path}>
								{item.label}
							</NavLink>
						)
				))}
			</div>
			{Object.keys(activeSubmenu).length > 0 && (
				<div ref={node} className="items-section sub-menu" style={{ right: `-${sectionWidth}px` }}>
					{activeSubmenu.items.map(it => (
						<NavLink
							key={it.path}
							activeClassName="selected"
							className="tree-node"
							to={match.url + (activeSubmenu.path + it.path)}
							onClick={() => changeSubmenu({})}
						>
							{it.label}
						</NavLink>
					))}
				</div>
			)}
		</div>
	);
};

TreeMenu.defaultProps = {};

TreeMenu.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object),
	match: PropTypes.object.isRequired,
};

export default TreeMenu;
