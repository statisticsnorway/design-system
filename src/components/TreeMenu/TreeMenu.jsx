import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { ChevronRight } from 'react-feather';
import { Divider } from '@statisticsnorway/ssb-component-library';
import { NavLink } from 'react-router-dom';

const TreeMenu = ({
	activeItem, items, mainItems, mainTitle, match, secondTitle,
}) => (
	<div className="tree-menu-wrapper roboto">
		<span className="tree-title">{mainTitle}</span>
		<div className="items-section">
			{mainItems.map(it => (
				it.comingSoon ? (
					<div key={it.path} className="tree-node coming-soon">
						{it.label}<div className="coming-soon-label">Kommer</div>
					</div>
				) : (
					<NavLink
						to={match.path + it.path}
						key={it.path}
						activeClassName="selected"
						className={`tree-node clickable${it.path === activeItem ? ' selected' : ''}`}
					>{it.label}<ChevronRight className="arrow-icon" size="18" />
					</NavLink>
				)
			))}
		</div>
		<Divider className="mt-4 mb-4" light />
		<span className="tree-title">{secondTitle}</span>
		<div className="items-section">
			{items && items.map(item => (
				item.comingSoon
					? (
						<div key={uuid()} className="tree-node coming-soon">
							{item.label}<div className="coming-soon-label">Kommer</div>
						</div>
					) : (
						<NavLink
							to={match.path + item.path}
							onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
							key={uuid()}
							activeClassName="selected"
							className={`tree-node clickable${item.path === activeItem ? ' selected' : ''}`}
						>{item.label}<ChevronRight className="arrow-icon" size="18" />
						</NavLink>
					)
			))}
		</div>
	</div>
);

TreeMenu.defaultProps = {};

TreeMenu.propTypes = {
	activeItem: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.object),
	mainItems: PropTypes.arrayOf(PropTypes.object),
	mainTitle: PropTypes.string,
	match: PropTypes.object,
	secondTitle: PropTypes.string,
};

export default TreeMenu;
