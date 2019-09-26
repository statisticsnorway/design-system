import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Tabs = ({
	activeOnInit, items, onClick,
}) => {
	const [activeItem, changeActive] = useState(activeOnInit);

	const handleClick = e => {
		onClick(e);
		changeActive(e);
	};

	return (
		<div className="tabs-component-wrapper">
			{items.map(item => (
				<div
					className={`navigation-item ${activeItem === item.path && 'active'}`}
					onClick={() => handleClick(item.path)}
					key={item.path}
				>
					<span>{item.title}</span>
					<div className="active-bar" />
				</div>
			))}
		</div>
	);
};

Tabs.defaultProps = {
	activeOnInit: '',
	onClick: () => {},
};

Tabs.propTypes = {
	activeOnInit: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string,
		path: PropTypes.string,
	})),
	onClick: PropTypes.func,
};

export default Tabs;
