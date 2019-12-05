import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { LeadParagraph, Title } from '@statisticsnorway/ssb-component-library';
import { ArrowRight } from 'react-feather';
import TreeMenu from '@components/TreeMenu/TreeMenu';
import AccordionInfo from './ComponentsInfo/AccordionInfo';
import BreadcrumbInfo from './ComponentsInfo/BreadcrumbInfo';
import ButtonInfo from './ComponentsInfo/ButtonInfo';
import CheckboxInfo from './ComponentsInfo/CheckboxInfo';
import DialogInfo from './ComponentsInfo/DialogInfo';
import DividerInfo from './ComponentsInfo/DividerInfo';
import DropdownInfo from './ComponentsInfo/DropdownInfo';
import FactBoxInfo from './ComponentsInfo/FactBoxInfo';
import FormErrorInfo from './ComponentsInfo/FormErrorInfo';
import InputInfo from './ComponentsInfo/InputInfo';
import KeyFiguresInfo from './ComponentsInfo/KeyFiguresInfo';
import LinksInfo from './ComponentsInfo/LinksInfo';
import PaginationInfo from './ComponentsInfo/PaginationInfo';
import CardsInfo from './ComponentsInfo/CardsInfo';
import RadioButtonInfo from './ComponentsInfo/RadioButtonInfo';
import ReferenceInfo from './ComponentsInfo/ReferenceInfo';
import SearchBoxInfo from './ComponentsInfo/SearchBoxInfo';
import StickyMenuInfo from './ComponentsInfo/StickyMenuInfo';
import TabsInfo from './ComponentsInfo/TabsInfo';
import TypographyInfo from './ComponentsInfo/TypographyInfo';
import GlossaryInfo from './ComponentsInfo/GlossaryInfo';
import QuotesInfo from './ComponentsInfo/QuotesInfo';
import ColorPage from '../Color/ColorPage';
import GridSpacing from '../GridSpacing/GridSpacing';
import TypographyPage from '../Typography/Typography';
import accordionIcon from '../../../public/customIcons/accordion.svg';
import breadcrumbIcon from '../../../public/customIcons/breadcrumb.svg';
import buttonsIcon from '../../../public/customIcons/buttons.svg';
import cardsIcon from '../../../public/customIcons/cards.svg';
import checkboxIcon from '../../../public/customIcons/checkbox.svg';
import colorIcon from '../../../public/customIcons/color.svg';
import dialogIcon from '../../../public/customIcons/dialog.svg';
import dividersIcon from '../../../public/customIcons/dividers.svg';
import dropdownIcon from '../../../public/customIcons/dropdown.svg';
import factboxIcon from '../../../public/customIcons/factbox.svg';
import footerIcon from '../../../public/customIcons/footer.svg';
import graphsIcon from '../../../public/customIcons/graphs.svg';
import gridIcon from '../../../public/customIcons/grid.svg';
import headerIcon from '../../../public/customIcons/header.svg';
import inputIcon from '../../../public/customIcons/input.svg';
import keyfiguresIcon from '../../../public/customIcons/keyfigures.svg';
import linksIcon from '../../../public/customIcons/links.svg';
import mapIcon from '../../../public/customIcons/map.svg';
import paginationIcon from '../../../public/customIcons/pagination.svg';
import quoteIcon from '../../../public/customIcons/quote.svg';
import radiobuttonIcon from '../../../public/customIcons/radiobutton.svg';
import referenceIcon from '../../../public/customIcons/reference.svg';
import responsiveIcon from '../../../public/customIcons/responsive.svg';
import searchIcon from '../../../public/customIcons/search.svg';
import sidenavigationIcon from '../../../public/customIcons/sidenavigation.svg';
import stickymenuIcon from '../../../public/customIcons/stickymenu.svg';
import tableIcon from '../../../public/customIcons/table.svg';
import tabsIcon from '../../../public/customIcons/tabs.svg';
import tagsIcon from '../../../public/customIcons/tags.svg';
import typographyIcon from '../../../public/customIcons/typography.svg';
import wordExplanationIcon from '../../../public/customIcons/wordexplanation.svg';

const sidebarMainItems = [
	{ component: ColorPage, label: 'Farger', path: '/color', icon: colorIcon },
	{ component: GridSpacing, label: 'Grid & Spacing', path: '/grid-spacing', icon: gridIcon, new: true },
	{ component: TypographyPage, label: 'Typography', path: '/typography-page', icon: typographyIcon },
];

const sidebarItems = [
	{ component: AccordionInfo, label: 'Accordion', path: '/accordion', icon: accordionIcon },
	{ component: BreadcrumbInfo, label: 'Breadcrumb', path: '/breadcrumb', icon: breadcrumbIcon },
	{ component: ButtonInfo, label: 'Button', path: '/button', icon: buttonsIcon },
	{ component: CardsInfo, label: 'Cards', path: '/cards', icon: cardsIcon, comingSoon: true },
	{ component: CheckboxInfo, label: 'Checkbox', path: '/checkbox', icon: checkboxIcon },
	{ component: DialogInfo, label: 'Warnings and errors', path: '/dialog', icon: dialogIcon },
	{ component: DividerInfo, label: 'Divider', path: '/divider', icon: dividersIcon },
	{ component: DropdownInfo, label: 'Dropdown', path: '/dropdown', icon: dropdownIcon },
	{ component: FactBoxInfo, label: 'Fact Box', path: '/fact-box', icon: factboxIcon },
	{ component: '', label: 'Footer', path: '/footer', icon: footerIcon, comingSoon: true },
	{ component: FormErrorInfo, label: 'Form Error', path: '/form-error' },
	{ component: GlossaryInfo, label: 'Glossary', path: '/glossary', icon: wordExplanationIcon },
	{ component: '', label: 'Graphs', path: '/graphs', icon: graphsIcon, comingSoon: true },
	{ component: '', label: 'Header', path: '/header', icon: headerIcon, comingSoon: true },
	{ component: '', label: 'Icons', path: '/icons', comingSoon: true },
	{ component: InputInfo, label: 'Input', path: '/input', icon: inputIcon },
	{ component: KeyFiguresInfo, label: 'Key Figures', path: '/key-figures', icon: keyfiguresIcon },
	{ component: LinksInfo, label: 'Links', path: '/links', icon: linksIcon },
	{ component: '', label: 'Map', path: '/map', icon: mapIcon, comingSoon: true },
	{ component: PaginationInfo, label: 'Pagination', path: '/pagination', icon: paginationIcon },
	{ component: QuotesInfo, label: 'Quotes', path: '/quotes', icon: quoteIcon },
	{ component: RadioButtonInfo, label: 'Radio Buttons', path: '/radiobutton', icon: radiobuttonIcon },
	{ component: '', label: 'Responsive media', path: '/responsive-media', icon: responsiveIcon, comingSoon: true },
	{ component: ReferenceInfo, label: 'Reference', path: '/reference', icon: referenceIcon },
	{ component: SearchBoxInfo, label: 'Search', path: '/search-box', icon: searchIcon },
	{ component: '', label: 'Site navigation', path: '/site-navigation', icon: sidenavigationIcon, comingSoon: true },
	{ component: StickyMenuInfo, label: 'Sticky Menu', path: '/sticky-menu', icon: stickymenuIcon },
	{ component: '', label: 'Table', path: '/table', icon: tableIcon, comingSoon: true },
	{ component: TabsInfo, label: 'Tabs', path: '/tabs', icon: tabsIcon },
	{ component: '', label: 'Tags', path: '/tags', icon: tagsIcon, comingSoon: true },
	{ component: TypographyInfo, label: 'Typography', path: '/typography', icon: typographyIcon },
];

sidebarItems.sort((a, b) => ((a.label > b.label) ? 1 : -1));

const leadParagraphText = `
Her er en oversikt over komponentene i SSBs designsystem.
Komponentene skal brukes i nye og eksisterende digitale prosjekter hvor SSB er avsender.
Med hver komponent følger det begrunnelser for designvalg, kode og eksempler slik at du raskt kan komme i gang med ditt prosjekt.
`;

const Components = () => {
	const match = useRouteMatch('/components');
	return (
		<div className="components-page page-wrapper">
			<aside>
				<TreeMenu
					match={match}
					items={sidebarItems.sort((a, b) => a.label - b.label)}
					mainItems={sidebarMainItems}
					mainTitle="Grunnprinsipper"
					secondTitle="Komponenter A-Å"
				/>
			</aside>
			<section className="container-fluid">
				<Switch>
					<Route exact path={match.url}>
						<div className="col-lg-12 mb-5">
							<Title size={1}>Komponenter</Title>
							<LeadParagraph>{leadParagraphText}</LeadParagraph>
						</div>
						<Title className="col-lg-12" size={2}>Grunnprinsipper</Title>
						<div className="col-lg-12 mb-5 navigator-grid">
							{sidebarMainItems.map(it => (
								it.comingSoon ? (
									<div className="nav-item coming-soon">
										<div className="coming-soon-label">Kommer</div>
										<img className="component-icon" src={it.icon} alt={it.label} />
										<Title size={3}>{it.label}</Title>
										<ArrowRight size={18} style={{ opacity: 0 }} className="arrow-right" />
									</div>
								) : (
									<a className="nav-item clickable" href={`#${match.url}${it.path}`}>
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
							{sidebarItems.map(it => (
								it.comingSoon ? (
									<div className="nav-item coming-soon">
										<div className="coming-soon-label">Kommer</div>
										<img className="component-icon" src={it.icon} alt={it.label} />
										<Title size={3}>{it.label}</Title>
										<ArrowRight size={18} style={{ opacity: 0 }} className="arrow-right" />
									</div>
								) : (
									<a className="nav-item clickable" href={`#${match.url}${it.path}`}>
										{it.new && <div className="new-label">Ny</div>}
										<img className="component-icon" src={it.icon} alt={it.label} />
										<Title size={3}>{it.label}</Title>
										<ArrowRight size={18} className="arrow-right" />
									</a>
								)
							))}
						</div>
					</Route>
					{sidebarMainItems.map(it => <Route key={it.path} path={`${match.url}${it.path}`} component={it.component} />)}
					{sidebarItems.map(it => <Route key={it.path} path={`${match.url}${it.path}`} component={it.component} />)}
				</Switch>
			</section>
		</div>
	);
};

Components.defaultProps = {};

Components.propTypes = {
	match: PropTypes.object,
};

export default Components;
