import React, { useState } from 'react';
import { Divider, LeadParagraph, Tabs, Title } from '@statisticsnorway/ssb-component-library';
import footer from '../../../../public/templates/footer-desktop.png';
import footerMobile from '../../../../public/templates/footer-mobile.png';

const tabItems = [
	{
		title: 'Desktop',
		path: '/desktop',
	}, {
		title: 'Mobil',
		path: '/mobile',
	},
];

const Footer = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const tabClicked = e => changeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Header</Title>
			<LeadParagraph>
				Her kan du se eksisterende mal for footer i mobil- og desktop-versjon.
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-4" />

			{activeTab === '/desktop' && (
				<div>
					<img className="mt-4 template-border" style={{ width: '100%' }} src={footer} alt="Template footer desktop" />
				</div>
			)}

			{activeTab === '/mobile' && (
				<div className="col-lg col-md-12">
					<img className="mt-4 template-border" style={{ width: '100%' }} src={footerMobile} alt="Template footer mobile" />
				</div>
			)}

			{activeTab === '/download' && (
				<div>Nedlasting</div>
			)}
		</div>
	);
};

export default Footer;
