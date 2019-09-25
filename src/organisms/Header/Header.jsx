import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import logo from '@public/ssb-logo.svg';
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

const Header = () => (
	<div className="header-component-wrapper">
		<div className="upper-section">
			<div className="logo-and-title">
				<NavLink to="/"><img src={logo} alt="logo" /></NavLink>
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
				<Link
					href="https://github.com/statisticsnorway/design-system"
					text="Github"
					isExternal
					icon={<GitHub size="18" />}
				/>
			</div>
		</nav>
	</div>
);

Header.defaultProps = {};

Header.propTypes = {};

export default Header;
