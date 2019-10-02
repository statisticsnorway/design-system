import React from 'react';
import { storiesOf } from '@storybook/react';
import { Facebook, Linkedin, Rss, Twitter } from 'react-feather';
import Link from '@atoms/Link/Link';
import logo from '@public/ssb-logo-white.svg';
import Footer from './Footer';

const socialLinks = [
	{
		link: 'https://www.facebook.com/statistisksentralbyra/',
		logo: <Facebook />,
	},
	{
		link: 'https://twitter.com/ssbnytt',
		logo: <Twitter />,
	},
	{
		link: 'https://www.linkedin.com/company/statistics-norway/',
		logo: <Linkedin />,
	},
	{
		link: 'https://www.ssb.no/informasjon/rss',
		logo: <Rss />,
	},
];

const slogan = `
Offisiell statistikk om det norske
samfunnet siden 1876
`;

const footerLink = <Link href="https://www.ssb.no/">Statistisk Sentralbyrå © 2019</Link>;

storiesOf('Organisms|Footer', module)
	.add('Standard', () => (
		<div style={{ bottom: 0, position: 'absolute' }}>
			<Footer scrollToTop link={footerLink} logo={logo} slogan={slogan} socialLinks={socialLinks} />
		</div>
	));
