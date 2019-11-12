import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { matchPath, Route, Switch, withRouter } from 'react-router-dom';
import { LeadParagraph, Title } from '@statisticsnorway/ssb-component-library';
import { ArrowRight } from 'react-feather';
import TreeMenu from '@components/TreeMenu/TreeMenu';
import AccordionInfo from './ComponentsInfo/AccordionInfo';
import BlockContentInfo from './ComponentsInfo/BlockContentInfo';
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
import ProfileBoxInfo from './ComponentsInfo/ProfileBoxInfo';
import RadioButtonInfo from './ComponentsInfo/RadioButtonInfo';
import ReferenceInfo from './ComponentsInfo/ReferenceInfo';
import SearchBoxInfo from './ComponentsInfo/SearchBoxInfo';
import StickyMenuInfo from './ComponentsInfo/StickyMenuInfo';
import TabsInfo from './ComponentsInfo/TabsInfo';
import TypographyInfo from './ComponentsInfo/TypographyInfo';
import WordExplanationInfo from './ComponentsInfo/WordExplanationInfo';
import QuotesInfo from './ComponentsInfo/QuotesInfo';
import ColorPage from '../Color/ColorPage';
import GridSpacing from '../GridSpacing/GridSpacing';
import TypographyPage from '../Typography/Typography';

const sidebarMainItems = [
	{ component: ColorPage, label: 'Farger', path: '/color' },
	{ component: GridSpacing, label: 'Grid & Spacing', path: '/grid-spacing' },
	{ component: TypographyPage, label: 'Typography', path: '/typography-page' },
];

const sidebarItems = [
	{ component: AccordionInfo, label: 'Accordion', path: '/accordion' },
	{ component: BlockContentInfo, label: 'Block Content', path: '/block-content' },
	{ component: BreadcrumbInfo, label: 'Breadcrumb', path: '/breadcrumb' },
	{ component: ButtonInfo, label: 'Button', path: '/button' },
	{ component: DialogInfo, label: 'Dialog', path: '/dialog' },
	{ component: DividerInfo, label: 'Divider', path: '/divider' },
	{ component: InputInfo, label: 'Input', path: '/input' },
	{ component: FactBoxInfo, label: 'Fact Box', path: '/fact-box' },
	{ component: FormErrorInfo, label: 'Form Error', path: '/form-error' },
	{ component: KeyFiguresInfo, label: 'Key Figures', path: '/key-figures' },
	{ component: LinksInfo, label: 'Links', path: '/links' },
	{ component: PaginationInfo, label: 'Pagination', path: '/pagination' },
	{ component: ProfileBoxInfo, label: 'Profile Box', path: '/profile-box' },
	{ component: CheckboxInfo, label: 'Checkbox', path: '/checkbox' },
	{ component: DropdownInfo, label: 'Dropdown', path: '/dropdown' },
	{ component: RadioButtonInfo, label: 'Radio Buttons', path: '/radiobutton' },
	{ component: QuotesInfo, label: 'Quotes', path: '/quotes' },
	{ component: ReferenceInfo, label: 'Reference', path: '/reference' },
	{ component: SearchBoxInfo, label: 'SearchBox', path: '/search-box' },
	{ component: StickyMenuInfo, label: 'Sticky Menu', path: '/sticky-menu' },
	{ component: TabsInfo, label: 'Tabs', path: '/tabs' },
	{ component: TypographyInfo, label: 'Typography', path: '/typography' },
	{ component: WordExplanationInfo, label: 'Word Explanation', path: '/word-explanation' },
];

sidebarItems.sort((a, b) => ((a.label > b.label) ? 1 : -1));

const leadParagraphText = `
Her er en oversikt over komponentene i SSBs designsystem.
Komponentene skal brukes i nye og eksisterende digitale prosjekter hvor SSB er avsender.
Med hver komponent følger det begrunnelser for designvalg, kode og eksempler slik at du raskt kan komme i gang med ditt prosjekt.
`;

const Components = withRouter(({ history, match }) => {
	const selectedComponent = matchPath(history.location.pathname, { path: '/components/:component' });
	const [activeMenuItem, changeMenuItem] = useState(`/${selectedComponent ? selectedComponent.params.component : ''}`);
	const navigate = e => {
		history.push(match.url + e);
		changeMenuItem(e);
	};

	return (
		<div className="components-page page-wrapper">
			<aside>
				<TreeMenu
					activeItem={activeMenuItem}
					items={sidebarItems.sort((a, b) => a.label - b.label)}
					match={match}
					onSelect={navigate}
				/>
			</aside>
			<section className="container-fluid">
				<Switch>
					<Route exact path={match.url}>
						<Title size={1} className="col-lg-12">Komponenter</Title>
						<div className="col-lg-12 mb-5">
							<LeadParagraph>{leadParagraphText}</LeadParagraph>
						</div>
						<div className="col-lg-12">
							<Title size={2}>Grunnprinsipper</Title>
						</div>
						<div className="col-lg-12 mb-5 navigator-grid">
							{sidebarMainItems.map(it => (
								<a className="nav-item" href={`#${match.url}${it.path}`}>
									<img className="component-icon" alt={it.label} />
									<Title size={3}>{it.label}</Title>
									<ArrowRight className="arrow-right" />
								</a>
							))}
						</div>
						<div className="col-lg-12">
							<Title size={2}>Komponenter</Title>
						</div>
						<div className="col-lg-12 navigator-grid">
							{sidebarItems.map(it => (
								<a className="nav-item" href={`#${match.url}${it.path}`}>
									<img className="component-icon" alt={it.label} />
									<Title size={3}>{it.label}</Title>
									<ArrowRight className="arrow-right" />
								</a>
							))}
						</div>
					</Route>
					{sidebarMainItems.map(it => <Route key={it.path} path={`${match.url}${it.path}`} component={it.component} />)}
					{sidebarItems.map(it => <Route key={it.path} path={`${match.url}${it.path}`} component={it.component} />)}
				</Switch>
			</section>
		</div>
	);
});

Components.defaultProps = {};

Components.propTypes = {
	match: PropTypes.object,
};

export default Components;
