import React from 'react';
import PropTypes from 'prop-types';
import Input from '@atoms/Input/Input';
import TreeMenu from '@atoms/TreeMenu/TreeMenu';

const SidebarNav = ({
	navItems,
}) => (
	<div>
		<Input label="Search for e.g tabs" />
		<TreeMenu items={navItems} />
	</div>
);

SidebarNav.defaultProps = {};

SidebarNav.propTypes = {
	navItems: PropTypes.arrayOf(PropTypes.object),
};

export default SidebarNav;
