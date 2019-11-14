import React from 'react';
import { Button } from '@statisticsnorway/ssb-component-library';
import { ArrowUp } from 'react-feather';
import logo from '@public/ssb-logo-white.svg';

const Footer = () => (
	<div className="footer-wrapper">
		<div className="d-flex flex-row justify-content-between align-items-center">
			<img className="logo" src={logo} alt="logo" />
			<span>Statistisk Sentralbyrå © 2019</span>
			<Button negative onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}>
				<ArrowUp size={18} />&nbsp;Til toppen
			</Button>
		</div>
	</div>
);

export default Footer;
