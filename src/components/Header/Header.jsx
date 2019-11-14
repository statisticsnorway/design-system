import React from 'react';
import { withRouter } from 'react-router-dom';
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
		<div className="upper-section">
			<div className="logo-and-title">
				<div className="home-nav" onClick={() => history.push('/')}>
					<img src={logo} alt="logo" />
				</div>
				<div className="diagonal-divider" />
				<Title size={2}>Designsystem</Title>
			</div>
		</div>
		<nav className="lower-section">
			<div>
				<Tabs
					activeOnInit={match.path}
					items={items}
					onClick={e => history.push(e)}
				/>
			</div>
			<div className="links">
				<Link
					href="https://github.com/statisticsnorway/ssb-component-library"
					isExternal
					icon={<GitHub size="18" />}
				>&nbsp;Github
				</Link>
			</div>
		</nav>
	</div>
));

export default Header;
