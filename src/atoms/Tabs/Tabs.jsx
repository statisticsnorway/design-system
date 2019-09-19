import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Tabs = ({
	items,
}) => (
	<div className="tabs-component-wrapper">
		{items.map(item => (
			<NavLink
				className="navigation-item"
				activeClassName="active"
				to={item.path}
				key={item.path}
			>
				<span>{item.title}</span>
				<div className="active-bar" />
			</NavLink>
		))}
	</div>
);

Tabs.defaultProps = {};

Tabs.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string,
		path: PropTypes.string,
	})),
};

export default Tabs;
