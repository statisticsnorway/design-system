import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import TreeMenu from '@atoms/TreeMenu/TreeMenu';
import AccordionInfo from '@organisms/AccordionInfo/AccordionInfo';
import Button from '@atoms/Button/Button';

const sidebarItems = [
	{
		label: 'Accordion',
		path: '/accordion',
		items: [{
			label: 'Primary',
			path: '/primary',
		}, {
			label: 'Secondary',
			path: '/secondary',
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
		label: 'Button',
		path: '/button',
		component: Button,
	},
];

sidebarItems.sort((a, b) => ((a.label > b.label) ? 1 : -1));

const Components = ({ match }) => (
	<div className="components page-wrapper">
		<aside>
			<TreeMenu items={sidebarItems.sort((a, b) => a.label - b.label)} match={match} />
		</aside>
		<section>
			<Switch>
				{/*{sidebarItems.map(item => (*/}
				{/*	<Route path={match.url + item.path} key={item.path} component={item.component} />*/}
				{/*))}*/}
				<Route exact path={match.url}>
					<h2>Main content</h2>
				</Route>
				<Route path={`${match.url}/accordion/:type`} component={AccordionInfo} />
			</Switch>
		</section>
	</div>
);

Components.defaultProps = {};

Components.propTypes = {
	match: PropTypes.object,
};

export default Components;
