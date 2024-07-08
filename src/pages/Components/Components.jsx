import React from 'react';
import { Route, Routes, useMatch } from 'react-router-dom';
import { LeadParagraph, Title } from '@statisticsnorway/ssb-component-library';
import { ArrowRight } from 'react-feather';
import TreeMenu from '@components/TreeMenu/TreeMenu';
import PropTypes from 'prop-types';
import componentsList from './componentsList';
import ColorPage from '../Color/ColorPage';
import GridSpacing from '../GridSpacing/GridSpacing';
import TypographyPage from '../Typography/Typography';
import colorIcon from '../../../public/customIcons/color.svg';
import gridIcon from '../../../public/customIcons/grid.svg';
import typographyIcon from '../../../public/customIcons/typography.svg';

const sidebarMainItems = [
	{ component: ColorPage, label: 'Farger', path: '/color', icon: colorIcon },
	{ component: GridSpacing, label: 'Grid and Spacing', path: '/grid-spacing', icon: gridIcon },
	{ component: TypographyPage, label: 'Typography', path: '/typography-page', icon: typographyIcon },
];

const leadParagraphText = `
Her er en oversikt over komponentene i SSBs designsystem.
Komponentene skal brukes i nye og eksisterende digitale prosjekter hvor SSB er avsender.
Med hver komponent følger det begrunnelser for designvalg, kode og eksempler slik at du raskt kan komme i gang med ditt prosjekt.
`;

const ComponentsContent = ({ match }) => (
	<>
		<div className="col-lg-12 mb-5">
			<Title size={1}>Komponenter</Title>
			<LeadParagraph>{leadParagraphText}</LeadParagraph>
		</div>
		<Title className="col-lg-12" size={2}>Grunnprinsipper</Title>
		<div className="col-lg-12 mb-5 navigator-grid">
			{sidebarMainItems.map(it => (
				it.comingSoon ? (
					<div key={it.path} className="nav-item coming-soon">
						<div className="coming-soon-label">Kommer</div>
						<img className="component-icon" src={it.icon} alt={it.label} />
						<Title size={3}>{it.label}</Title>
						<ArrowRight size={18} style={{ opacity: 0 }} className="arrow-right" />
					</div>
				) : (
					<a key={it.path} className="nav-item clickable" href={`#${match.pathname}${it.path}`}>
						{it.new && <div className="new-label">Ny</div>}
						<img className="component-icon" src={it.icon} alt={it.label} />
						<Title size={3}>{it.label}</Title>
						<ArrowRight size={18} className="arrow-right" />
					</a>
				)
			))}
		</div>
		<div className="col-lg-12">
			<Title size={2}>Komponenter</Title>
		</div>
		<div className="col-lg-12 navigator-grid">
			{componentsList.map(it => (
				it.comingSoon ? (
					<div key={it.path} className="nav-item coming-soon">
						<div className="coming-soon-label">Kommer</div>
						<img className="component-icon" src={it.icon} alt={it.label} />
						<Title size={3}>{it.label}</Title>
						<ArrowRight size={18} style={{ opacity: 0 }} className="arrow-right" />
					</div>
				) : (
					<a key={it.path} className="nav-item clickable" href={`#${match.pathname}${it.path}`}>
						{it.new && <div className="new-label">Ny</div>}
						<img className="component-icon" src={it.icon} alt={it.label} />
						<Title size={3}>{it.label}</Title>
						<ArrowRight size={18} className="arrow-right" />
					</a>
				)
			))}
		</div>
	</>
);

ComponentsContent.propTypes = {
	match: PropTypes.shape({
		pathname: PropTypes.string,
	}),
};

const Components = () => {
	const match = useMatch('/components/*');
	return (
		<div className="components-page page-wrapper">
			<aside>
				<TreeMenu
					match={match}
					items={componentsList}
					mainItems={sidebarMainItems}
					mainTitle="Grunnprinsipper"
					secondTitle="Komponenter A-Å"
				/>
			</aside>
			<section className="container-fluid">
				<Routes>
					<Route
						path="*"
						element={<ComponentsContent match={match} />}
					/>
					{sidebarMainItems.map(it => (
						<Route key={it.path} path={`${match.pathnameBase}${it.path}`} element={it.component} />
					))}
					{componentsList.map(it => (
						<Route key={it.path} path={`${match.pathnameBase}${it.path}`} element={it.component} />
					))}
				</Routes>
			</section>
		</div>
	);
};

export default Components;
