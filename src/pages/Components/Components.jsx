import React from 'react';
import PropTypes from 'prop-types';
import TreeMenu from '@atoms/TreeMenu/TreeMenu';

const sidebarItems = [
	{
		label: 'Item 1',
		path: '/item1',
		items: [{
			label: 'Item 1',
			path: '/item1',
			items: [{
				label: 'Item 1',
				path: '/item1',
			}],
		}, {
			label: 'Item 2',
			path: '/item2',
		}],
	}, {
		label: 'Item 2',
		path: '/item2',
		items: [{
			label: 'Item 1',
			path: '/item1',
			items: [{
				label: 'Item 1',
				path: '/item1',
			}],
		}],
	}, {
		label: 'Item 3',
		path: '/item3',
	}, {
		label: 'Item 4',
		path: '/item4',
	},
];

const Components = () => (
	<div className="component-page-wrapper">
		<aside>
			<TreeMenu items={sidebarItems} />
		</aside>
		<section>Main content</section>
	</div>
);

Components.defaultProps = {};

Components.propTypes = {};

export default Components;
