import React from 'react';
import PropTypes from 'prop-types';
import logo from '@public/ssb-logo.svg';
import Link from '@atoms/Link/Link';

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
		<div className="lower-section">
			<div>
				Local navigation
			</div>
			<div className="links">
				<Link href=" " text="Github" icon={<span>&gt;</span>} />
				<Link href=" " text="Download" icon={<span>&gt;</span>} />
			</div>
		</div>
	</div>
);

Header.defaultProps = {};

Header.propTypes = {};

export default Header;
