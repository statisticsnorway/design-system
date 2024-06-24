import React from 'react';
import { LeadParagraph, Title } from '@statisticsnorway/ssb-component-library';
import { Route, Routes, useMatch } from 'react-router-dom';
import TreeMenu from '../../components/TreeMenu/TreeMenu';
import KommuneFakta from './TemplatesExamples/KommuneFakta.template';
import Faktaside from './TemplatesExamples/Faktaside.template';
import Footer from './TemplatesExamples/Footer.template';
import Header from './TemplatesExamples/Header.template';

const sidebarMainItems = [
	{ component: '', label: 'Artikkel', path: '/article', icon: '', comingSoon: true },
	{ component: Faktaside, label: 'Faktaside', path: '/faktaside', icon: '' },
	{ component: KommuneFakta, label: 'Kommunefakta', path: '/kommunefakta', icon: '' },
	{ component: Header, label: 'Header', path: '/header', icon: '' },
	{ component: Footer, label: 'Footer', path: '/footer', icon: '' },
];

const sidebarItems = [
	{ component: '', label: 'Byggekostnadskalkulator', path: '/bkk', icon: '', comingSoon: true },
];

const Templates = () => {
	const match = useMatch('/templates');
	return (
		<div className="templates-page page-wrapper">
			<aside>
				<TreeMenu
					match={match}
					items={sidebarItems}
					mainItems={sidebarMainItems}
					mainTitle="Sidemaler A-Å"
					secondTitle="Store organismer"
				/>
			</aside>
			<section className="container-fluid">
				<Routes>
					<Route
						path={match.pathname}
						element={(
							<div className="col-lg-12">
								<Title size={1}>Templates/maler</Title>
								<LeadParagraph>
									Ved oppstart av et nytt prosjekt anbefaler vi at du tar en titt på eksisterende sidemaler.
									De gir et godt innblikk i hvordan komponenter brukes, samt stil og tone.
									Bruk gjerne en eksisterende mal som utgangspunkt for raskt å komme i gang.
									Det bidrar til en konsistent opplevelse for brukerne våre.
									Husk at komponeneter kan tilpasses ditt behov, men skal klareres av designansvarlig i designsystemet.
								</LeadParagraph>
							</div>
						)}
					/>
					{sidebarMainItems.map(it => <Route key={it.path} path={`${match.pathname}${it.path}`} element={it.component} />)}
					{sidebarItems.map(it => <Route key={it.path} path={`${match.pathname}${it.path}`} element={it.component} />)}
				</Routes>
			</section>
		</div>
	);
};

export default Templates;
