import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
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

const Components = ({ match }) => (
	<div className="components page-wrapper">
		<aside>
			<TreeMenu items={sidebarItems} match={match} />
		</aside>
		<section>
			<Switch>
				{sidebarItems.map(item => (
					<Route exact path={match.url + item.path} key={item.path}>
						<h2>Components/{item.label}</h2>
					</Route>
				))}
				<Route exact path={match.url}>
					<h2>Main content</h2>
				</Route>
			</Switch>
		</section>
	</div>
);

Components.defaultProps = {};

Components.propTypes = {
	match: PropTypes.object,
};

export default Components;
