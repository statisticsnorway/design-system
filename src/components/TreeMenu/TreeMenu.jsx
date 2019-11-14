import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { ChevronRight } from 'react-feather';
import { Divider } from '@statisticsnorway/ssb-component-library';
import { NavLink, withRouter } from 'react-router-dom';

const TreeMenu = withRouter(({
	activeItem, items, mainItems, match, history,
}) => {
	const node = useRef();
	const itemsSection = useRef();
	const [activeSubmenu, changeSubmenu] = useState({});
	const [sectionWidth, updateWidth] = useState(0);

	const handleClickOutside = e => {
		if (!node.current.contains(e.target)) {
			changeSubmenu({});
		}
	};

	useEffect(() => console.log('Props changed in Tree: ', history), [match]);

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
			<span className="tree-title">Grunnprinsipper</span>
			<div className="items-section">
				{mainItems.map(it => (
					<NavLink
						to={match.path + it.path}
						key={it.path}
						activeClassName="selected"
						className={`tree-node ${it.path === activeItem && 'selected'}`}
					>{it.label}<ChevronRight className="arrow-icon" size="18" />
					</NavLink>
				))}
			</div>
			<Divider className="mt-4 mb-4" light />
			<span className="tree-title">Komponenter A-Z</span>
			<div ref={itemsSection} className="items-section">
				{items && items.map(item => (
					item.items
						? (
							<NavLink
								to={match.path + item.path}
								key={uuid()}
								activeClassName="selected"
								className={`tree-node ${item.path === activeItem && 'selected'}`}
							>{item.label}<ChevronRight className="arrow-icon" size="18" />
							</NavLink>
						) : (
							<NavLink
								to={match.path + item.path}
								key={uuid()}
								activeClassName="selected"
								className={`tree-node ${item.path === activeItem && 'selected'}`}
							>{item.label}<ChevronRight className="arrow-icon" size="18" />
							</NavLink>
						)
				))}
			</div>
			{Object.keys(activeSubmenu).length > 0 && (
				<div ref={node} className="items-section sub-menu" style={{ right: `-${sectionWidth}px` }}>
					{activeSubmenu.items.map(item => (
						<NavLink
							to={match.path + item.path}
							activeClassName="selected"
							key={item.path}
							className={`tree-node ${(activeSubmenu.path + item.path) === activeItem && 'selected'}`}
						>
							{item.label}
						</NavLink>
					))}
				</div>
			)}
		</div>
	);
});

TreeMenu.defaultProps = {};

TreeMenu.propTypes = {
	activeItem: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.object),
	mainItems: PropTypes.arrayOf(PropTypes.object),
	onSelect: PropTypes.func,
};

export default TreeMenu;
