import React from 'react';
import { Button, Link, Text } from '@statisticsnorway/ssb-component-library';
import { ArrowUp, GitHub, Mail } from 'react-feather';

const Footer = () => (
	<div className="footer-wrapper">
		<div className="footer-content">
			<Text small negative className="copyright-mark">© Statistisk sentralbyrå, 2022</Text>
			<div className="interactive-elements">
				<Link href="mailto: designsystem@ssb.no" icon={<Mail />} negative>Kontakt designansvarlig</Link>
				<Link href=" " icon={<GitHub />} negative>Github</Link>
				<Button negative onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}>
					<ArrowUp size={18} />&nbsp;Til toppen
				</Button>
			</div>
		</div>
	</div>
);

export default Footer;
