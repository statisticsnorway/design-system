import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import logo from '@public/ssb-logo-green.svg';
import Link from '@atoms/Link/Link';
import Tabs from '@atoms/Tabs/Tabs';
import { GitHub } from 'react-feather';

const items = [
	{
		title: 'Get Started',
		path: '/get-started',
	},
	{
		title: 'Components',
		path: '/components',
	},
	{
		title: 'Templates',
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
				<h3>Design System</h3>
			</div>
			<div>
				<Link href=" ">Norsk</Link>
			</div>
		</div>
		<nav className="lower-section">
			<div>
				<Tabs items={items} onClick={e => history.push(e)} />
			</div>
			<div className="links">
				<Link href="https://github.com/statisticsnorway/design-system" isExternal icon={<GitHub size="18" />}>
					Github
				</Link>
			</div>
		</nav>
	</div>
));

Header.defaultProps = {};

Header.propTypes = {};

export default Header;
