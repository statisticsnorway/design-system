import React, { useState } from 'react';
import { Divider, LeadParagraph, Tabs, Text, Title } from '@statisticsnorway/ssb-component-library';
import kommunefaktaDesktop from '../../../../public/templates/kommunefakta-desktop.png';

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
					<img className="mt-4 template-border" style={{ width: '100%' }} src={kommunefaktaDesktop} alt="kommunefakta template" />
				</div>
			)}

			{activeTab === '/mobile' && (
				<div>Mobil</div>
			)}

			{activeTab === '/download' && (
				<div>Nedlasting</div>
			)}
		</div>
	);
};

export default KommuneFakta;
