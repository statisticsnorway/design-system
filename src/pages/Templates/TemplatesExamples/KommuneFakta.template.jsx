import React, { useState } from 'react';
import { Divider, LeadParagraph, Tabs, Text, Title } from '@statisticsnorway/ssb-component-library';
import kommunefaktaDesktop from '../../../../public/templates/kommunefakta-desktop.png';
import kommunefaktaMobile from '../../../../public/templates/kommunefakta-mobil.png';
import kommunefaktaMobilNorge from '../../../../public/templates/kommunefakta-mobile-inngang-norge.png';
import kommunefaktaMobilKommune from '../../../../public/templates/Kommunefakta-mobil-inngang-kommune.png';
import kommunefaktaMobilSticky from '../../../../public/templates/kommunefakta-mobile-sticky.png';
import kommunefaktaMobilStickySearch from '../../../../public/templates/kommunefakta-mobile-sticky-search.png';

const tabItems = [
	{
		title: 'Desktop',
		path: '/desktop',
	}, {
		title: 'Mobil',
		path: '/mobile',
	}, {
		title: 'Nedlasting',
		path: '/download',
	},
];

const KommuneFakta = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const tabClicked = e => changeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Kommunefakta</Title>
			<LeadParagraph>
				Her kan du se eksisterende mal for Kommunefakta i mobil- og desktop-versjon, samt laste ned siden som PNG og designressurser i Sketch.
				Malen bygger på samme mal som faktasiden.
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-4" />

			{activeTab === '/desktop' && (
				<div>
					<Text small>v1.0.0</Text>
					<img className="mt-4 template-border" style={{ width: '100%' }} src={kommunefaktaDesktop} alt="Template kommunefakta desktop" />
				</div>
			)}

			{activeTab === '/mobile' && (
				<div>
					<div className="col-lg-6">
						<Title size={3}>Inngang norgeskart</Title>
						<img className="mt-4 template-border" style={{ width: '100%' }} src={kommunefaktaMobilNorge} alt="Template Kommunefakta mobil, inngang norgeskart" />
					</div>
					<Divider className="mt-4 mb-3" light />
					<div className="col-lg-6">
						<Title size={3}>Inngang kommunekart</Title>
						<img className="mt-4 template-border" style={{ width: '100%' }} src={kommunefaktaMobilKommune} alt="Template Kommunefakta mobil, inngang kommunekart" />
					</div>
					<Divider className="mt-4 mb-3" light />
					<div className="col-lg-6">
						<Title size={3}>Sticky Meny</Title>
						<img className="mt-4 template-border" style={{ width: '100%' }} src={kommunefaktaMobilSticky} alt="Template Kommunefakta mobil, stickymenu" />
					</div>
					<Divider className="mt-4 mb-3" light />
					<div className="col-lg-6">
						<Title size={3}>Sticky søk</Title>
						<img className="mt-4 template-border" style={{ width: '100%' }} src={kommunefaktaMobilStickySearch} alt="Template Kommunefakta mobil, stickymenu search" />
					</div>
					<Divider className="mt-4 mb-3" light />
					<div className="col-lg-6">
						<Title size={3}>Visning kommune</Title>
						<img className="mt-4 template-border" style={{ width: '100%' }} src={kommunefaktaMobile} alt="Template Kommunefakta mobilvisning" />
					</div>
				</div>
			)}

			{activeTab === '/download' && (
				<div>Nedlasting</div>
			)}
		</div>
	);
};

export default KommuneFakta;
