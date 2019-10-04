import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { matchPath, Route, Switch, withRouter } from 'react-router-dom';
import Title from '@atoms/Title/Title';
import TreeMenu from '@atoms/TreeMenu/TreeMenu';
import AccordionInfo from '@organisms/AccordionInfo/AccordionInfo';
import BreadcrumbInfo from '@organisms/BreadcrumbInfo/BreadcrumbInfo';
import ButtonInfo from '@organisms/ButtonInfo/ButtonInfo';
import DividerInfo from '@organisms/DividerInfo/DividerInfo';
import KeyNumbersInfo from '@organisms/KeyNumbersInfo/KeyNumbersInfo';
import InputInfo from '@organisms/InputInfo/InputInfo';
import LinksInfo from '@organisms/LinksInfo/LinksInfo';
import PaginationInfo from '@organisms/PaginationInfo/PaginationInfo';

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
		label: 'Breadcrumb',
		path: '/breadcrumb',
	}, {
		label: 'Button',
		path: '/button',
	}, {
		label: 'Divider',
		path: '/divider',
	}, {
		label: 'Input',
		path: '/input',
	}, {
		label: 'Key Numbers',
		path: '/key-numbers',
	}, {
		label: 'Links',
		path: '/links',
	}, {
		label: 'Pagination',
		path: '/pagination',
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
						<Title size={2} className="col-lg-12">Components</Title>
					</Route>
					<Route path={`${match.url}/accordion/:type?`} component={AccordionInfo} />
					<Route path={`${match.url}/breadcrumb`} component={BreadcrumbInfo} />
					<Route path={`${match.url}/button`} component={ButtonInfo} />
					<Route path={`${match.url}/divider`} component={DividerInfo} />
					<Route path={`${match.url}/input`} component={InputInfo} />
					<Route path={`${match.url}/key-numbers`} component={KeyNumbersInfo} />
					<Route path={`${match.url}/links`} component={LinksInfo} />
					<Route path={`${match.url}/pagination`} component={PaginationInfo} />
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
