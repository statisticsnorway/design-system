import React from 'react';
import PropTypes from 'prop-types';
import Link from '@atoms/Link/Link';
import logo from '@public/ssb-logo-white.svg';

const Footer = () => (
	<div className="footer-wrapper">
		<div className="d-flex flex-column justify-content-between">
			<div>
				<img className="logo" src={logo} alt="logo" />
				<p>
					Offisiell statistikk om det norske
					samfunnet siden 1876
				</p>
			</div>
			<div>
				<Link href="https://www.ssb.no/" text="Statistisk Sentralbyrå © 2019" />
			</div>
		</div>
		<div>Some info</div>
	</div>
);

Footer.defaultProps = {};

Footer.propTypes = {};

export default Footer;
