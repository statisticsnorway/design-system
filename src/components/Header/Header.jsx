import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import logo from '@public/ssb-logo-green.svg';
import { Link, Tabs, Title } from '@statisticsnorway/ssb-component-library';
import { GitHub } from 'react-feather';

const items = [
	{
		title: 'Om designsystemet',
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

const Header = withRouter(({ history }) => (
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
				<Tabs items={items} onClick={e => history.push(e)} />
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

Header.defaultProps = {};

Header.propTypes = {};

export default Header;
