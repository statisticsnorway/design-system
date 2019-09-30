import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { matchPath, Route, Switch, withRouter } from 'react-router-dom';
import TreeMenu from '@atoms/TreeMenu/TreeMenu';
import AccordionInfo from '@organisms/AccordionInfo/AccordionInfo';
import ButtonInfo from '@organisms/ButtonInfo/ButtonInfo';
import DividerInfo from '@organisms/DividerInfo/DividerInfo';
import KeyNumbersInfo from '@organisms/KeyNumbersInfo/KeyNumbersInfo';

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
		label: 'Button',
		path: '/button',
	}, {
		label: 'Checkbox',
		path: '/checkbox',
	}, {
		label: 'Divider',
		path: '/divider',
	}, {
		label: 'Key Numbers',
		path: '/key-numbers',
	},
];

sidebarItems.sort((a, b) => ((a.label > b.label) ? 1 : -1));

const Components = withRouter(({ history, match }) => {
	const selectedComponent = matchPath(history.location.pathname, { path: '/components/:component' });
	const [activeMenuItem, changeMenuItem] = useState(`/${selectedComponent ? selectedComponent.params.component : ''}`);
	const navigate = e => {
		history.push(match.url + e);
		changeMenuItem(e);
	};

	return (
		<div className="components page-wrapper">
			<aside>
				<TreeMenu
					activeItem={activeMenuItem}
					items={sidebarItems.sort((a, b) => a.label - b.label)}
					match={match}
					onSelect={navigate}
				/>
			</aside>
			<section>
				<Switch>
					<Route exact path={match.url}>
						<h2>Main content</h2>
					</Route>
					<Route path={`${match.url}/accordion/:type?`} component={AccordionInfo} />
					<Route path={`${match.url}/button`} component={ButtonInfo} />
					<Route path={`${match.url}/divider`} component={DividerInfo} />
					<Route path={`${match.url}/key-numbers`} component={KeyNumbersInfo} />
				</Switch>
			</section>
		</div>
	);
});

Components.defaultProps = {};

Components.propTypes = {
	match: PropTypes.object,
};

export default Components;
