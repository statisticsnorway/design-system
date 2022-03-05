import React, { useState } from 'react';
import { Divider, LeadParagraph, Tabs, Title } from '@statisticsnorway/ssb-component-library';
import headerClosed from '../../../../public/templates/header-closed.png';
import headerOpen from '../../../../public/templates/header-menu-open.png';
import headerClosedMobile from '../../../../public/templates/header-menu-closed-mobile.png';
import headerOpenMobile from '../../../../public/templates/header-menu-open-mobile.png';

const tabItems = [
	{
		title: 'Desktop',
		path: '/desktop',
	}, {
		title: 'Mobil',
		path: '/mobile',
	},
];

const Header = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const tabClicked = e => changeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Header</Title>
			<LeadParagraph>
				Her kan du se eksisterende mal for header i mobil- og desktop-versjon.
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-4" />

			{activeTab === '/desktop' && (
				<div>
					<div>
						<Title size={3}>Header closed</Title>
						<img className="mt-4 template-border" style={{ width: '100%' }} src={headerClosed} alt="Template header closed desktop" />
					</div>
					<Divider className="mt-4 mb-3" light />
					<div>
						<Title size={3}>Header open</Title>
						<img className="mt-4 template-border" style={{ width: '100%' }} src={headerOpen} alt="Template header open desktop" />
					</div>
				</div>
			)}

			{activeTab === '/mobile' && (
				<div>
					<div className="col-lg-6">
						<Title size={3}>Header closed</Title>
						<img className="mt-4 template-border" style={{ width: '100%' }} src={headerClosedMobile} alt="Template header closed mobile" />
					</div>
					<Divider className="mt-4 mb-3" light />
					<div className="col-lg-6">
						<Title size={3}>Header open</Title>
						<img className="mt-4 template-border" style={{ width: '100%' }} src={headerOpenMobile} alt="Template header open mobile" />
					</div>
				</div>
			)}

			{activeTab === '/download' && (
				<div>Nedlasting</div>
			)}
		</div>
	);
};

export default Header;
