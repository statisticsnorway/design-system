import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Tabs = ({
	items,
}) => {
	const [activeTab, toggleActiveTab] = useState('get-started/');

	return (
		<div className="tabs-component-wrapper">
			{items.map(item => (
				<a
					className={`navigation-item ${activeTab === item.url ? 'active' : ''}`}
					href=" "
					onClick={() => toggleActiveTab(item.url)}
				>
					<span>{item.title}</span>
					<div className="active-bar" />
				</a>
			))}
		</div>
	);
};

Tabs.defaultProps = {
	activeTab: 'get-started/',
};

Tabs.propTypes = {
	activeTab: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string,
		url: PropTypes.string,
	})),
};

export default Tabs;
