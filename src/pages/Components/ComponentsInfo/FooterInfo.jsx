import React from 'react';
import { Button, Footer, LeadParagraph, Link, Title } from '@statisticsnorway/ssb-component-library';
import { Facebook, Linkedin, Rss, Twitter } from 'react-feather';
import ssbLogo from '../../../../public/ssb-logo-white.svg';

const FooterInfo = () => (
	<div className="col-lg-12">
		<Title size={1}>Footer</Title>
		<LeadParagraph>Info kommer </LeadParagraph>
		<Footer>
			<div className="top-row flex-row justify-space-between flex-wrap">
				<img src={ssbLogo} alt="ssb-logo" />
				<Button negative onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}>
					Til Toppen
				</Button>
			</div>

			<div className="footer-content">
				Fyll med innhold
			</div>

			<div className="bottom-row flex-row justify-space-between flex-wrap">
				<div className="global-links">
					<Link href="https://www.ssb.no/" isExternal negative>Statistisk sentralbyrå © 2019</Link>
					<Link href="https://www.ssb.no/a-aa" isExternal negative>A-Å</Link>
					<Link href="https://www.ssb.no/nettstedskart" isExternal negative>Nettstedskart</Link>
				</div>
				<div className="social-links">
					<Link href="https://www.facebook.com/statistisksentralbyra/" isExternal negative icon={<Facebook size={24} />} />
					<Link href="https://twitter.com/ssbnytt" isExternal negative icon={<Twitter size={24} />} />
					<Link href="https://www.linkedin.com/company/statistics-norway/" isExternal negative icon={<Linkedin size={24} />} />
					<Link href="https://www.ssb.no/informasjon/rss" isExternal negative icon={<Rss size={24} />} />
				</div>
			</div>
		</Footer>
	</div>
);

export default FooterInfo;
