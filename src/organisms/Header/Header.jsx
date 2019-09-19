import React from 'react';
import PropTypes from 'prop-types';
import logo from '@public/ssb-logo.svg';
import Link from '@atoms/Link/Link';
import Tabs from '@atoms/Tabs/Tabs';

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

const Header = () => (
	<div className="header-component-wrapper">
		<div className="upper-section">
			<div className="logo-and-title">
				<img src={logo} alt="logo" />
				<div className="diagonal-divider" />
				<h3>Design System</h3>
			</div>
			<div>
				<Link href=" " text="Norsk" />
			</div>
		</div>
		<nav className="lower-section">
			<div>
				<Tabs items={items} />
			</div>
			<div className="links">
				<Link href="https://github.com/statisticsnorway/design-system" text="Github" icon={<span>&gt;</span>} />
				<Link href=" " text="Download" icon={<span>&gt;</span>} />
			</div>
		</nav>
	</div>
);

Header.defaultProps = {};

Header.propTypes = {};

export default Header;
