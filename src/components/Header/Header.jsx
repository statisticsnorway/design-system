import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import logo from '@public/ssb-logo-green.svg';
import { Link, Tabs, Title } from '@statisticsnorway/ssb-component-library';
import { GitHub } from 'react-feather';

const items = [
	{
		title: 'Kom i gang',
		path: '/get-started',
	},
	{
		title: 'Komponenter',
		path: '/components',
	},
	{
		title: 'Sidemaler',
		path: '/templates',
	},
];

const Header = withRouter(({ history, match }) => (
	<div className="header-component-wrapper">
		<div className="left-section">
			<div className="logo-and-title">
				<div className="home-nav" onClick={() => history.push('/')}>
					<img src={logo} alt="logo" />
				</div>
				<div className="diagonal-divider" />
				<Title size={2}>Designsystem</Title>
			</div>
		</div>
		<nav className="right-section">
			<div>
				{items.map(it => (
					<NavLink
						className="header-navigation roboto"
						activeClassName="active"
						activeOnInit={match.path}
						items={items}
						to={it.path}
						onClick={() => history.push(it.path)}
					>{it.title}
					</NavLink>
				))}
				<a
					className="header-navigation roboto"
					href="https://github.com/statisticsnorway/ssb-component-library"
					target="_blank"
					rel="noopener noreferrer"
				><GitHub size="18" />&nbsp;Github
				</a>
			</div>
		</nav>
	</div>
));

export default Header;
