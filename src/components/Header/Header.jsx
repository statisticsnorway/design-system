import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import logo from '@public/ssb-logo-green.svg';
import logoSymbol from '@public/ssb-logo-symbol.svg';
import { Dropdown, Link, Text, Title } from '@statisticsnorway/ssb-component-library';
import { GitHub, Menu } from 'react-feather';
import componentsList from '../../pages/Components/componentsList';
import coopIllustration from '../../../public/customIcons/illustrasjon-samarbeid.svg';

const items = [
	{ title: 'Kom i gang', path: '/get-started' },
	{ title: 'Komponenter', path: '/components' },
	{ title: 'Sidemaler', path: '/templates' },
];

const listItems = componentsList.filter(c => !c.comingSoon);

const Header = () => {
	const history = useHistory();
	const [menuIsOpen, toggleMenu] = useState(false);

	return (
		<div className={`header-component-wrapper${history.location.pathname === '/get-started' || history.location.pathname === '/' ? ' front-page' : ''}`}>
			<div className="content-holder d-flex justify-content-between flex-wrap">
				<div className="left-section">
					<div className="logo-and-title" onClick={() => history.push('/')}>
						<div className="home-nav">
							<img className="logo-full" src={logo} alt="logo" />
							<img className="logo-symbol" src={logoSymbol} alt="logo" />
						</div>
						<div className="diagonal-divider" />
						<div className="site-title">Designsystem</div>
						&nbsp;
						<div className="desktop-version-number"><Text>v2.0.30</Text></div>
					</div>
				</div>

				<nav className="right-section d-flex align-items-center">
					<label htmlFor="menu" className="mobile-collapse-menu">
						<span className="menu-label">Meny</span>
						<Menu className="menu-icon" size={24} />
						<input type="checkbox" id="menu" onChange={() => toggleMenu(!menuIsOpen)} />
					</label>
					<div className="navigation-items closed">
						{items.map(it => (
							<NavLink
								className={`header-navigation roboto${it.path === '/get-started' && history.location.pathname === '/' ? ' active' : ''}`}
								activeClassName="active"
								items={items}
								to={it.path}
								onClick={() => history.push(it.path)}
							>{it.title}
							</NavLink>
						))}
						<a
							className="header-navigation roboto"
							href="https://github.com/statisticsnorway/ssb-component-library"
							target="_blank"
							rel="noopener noreferrer"
						><GitHub size="18" />&nbsp;Github
						</a>
					</div>
				</nav>

				{menuIsOpen && (
					<div className="mobile-menu">
						<div className="d-flex justify-content-between align-items-center content-holder">
							<div className="d-flex align-items-center">
								<img className="logo-symbol" src={logoSymbol} alt="logo" />
								<Title size={2}>Designsystem</Title>
							</div>
							<div className="d-flex align-items-center">
								<label htmlFor="menu" className="mobile-collapse-menu">
									<span className="menu-label">Lukk</span>
									<Menu />
									<input type="checkbox" id="menu" onChange={() => toggleMenu(!menuIsOpen)} />
								</label>
							</div>
						</div>
						<div className="search-bar-container">
							<Dropdown
								items={listItems.map(it => ({ title: it.label, id: it.path }))}
								placeholder="Søk etter innhold"
								onSelect={selected => {
									history.push(`/components${selected.id}`);
									toggleMenu(false);
								}}
								searchable
							/>
						</div>
						<div className="mobile-navigation-items d-flex flex-column">
							{items.map(it => (
								<NavLink
									className="header-navigation roboto"
									activeClassName="active"
									items={items}
									to={it.path}
									onClick={() => {
										history.push(it.path);
										toggleMenu(false);
									}}
								>{it.title}
								</NavLink>
							))}
							<a
								className="header-navigation roboto"
								href="https://github.com/statisticsnorway/ssb-component-library"
								target="_blank"
								rel="noopener noreferrer"
							><GitHub size="18" />&nbsp;Github
							</a>
						</div>
						<div className="version-number"><Text>v1.1.42</Text></div>
					</div>
				)}
			</div>
			{(history.location.pathname === '/get-started' || history.location.pathname === '/') && (
				<div className="get-started offset-lg-1">
					<div className="row ml-1 mr-1">
						<img className="col-lg-11 mb-4" src={coopIllustration} alt="Usage" />
						<Title className="get-started-title col-lg-4" size={1}>Kom i gang</Title>
						<div className="col-lg-7">
							<p className="intro-text mt-4">
								I en virksomhet som Statistisk sentralbyrå, hvor produkter og tjenester utvikles over tid av ulike prosjekter og team,
								er det viktig å ha et felles sett med retningslinjer som sikrer et enhetlig uttrykk.
								Designsystemet er et åpent verktøy, som ved riktig bruk sikrer at vi fremstår som ett SSB – én tydelig avsender.
								Slik bygger vi tillit hos brukerne våre – tillit til at våre løsninger faktisk kommer fra oss.
								Detaljert beskrivelse for utviklere ligger på&nbsp;
								<Link linkType="profiled" isExternal href="https://github.com/statisticsnorway/ssb-component-library">GitHub</Link>.
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Header;
