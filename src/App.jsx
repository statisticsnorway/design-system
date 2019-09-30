import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Link from '@atoms/Link/Link';
import Header from '@organisms/Header/Header';
import Footer from '@organisms/Footer/Footer';
import Components from '@pages/Components/Components';
import GetStarted from '@pages/GetStarted/GetStarted';
import Templates from '@pages/Templates/Templates';
import Welcome from '@pages/Welcome/Welcome';
import logo from '@public/ssb-logo-white.svg';
import { Facebook, Linkedin, Rss, Twitter } from 'react-feather';

const NoMatchPage = () => <h3>404 - Not found</h3>;
const slogan = `
Offisiell statistikk om det norske
samfunnet siden 1876
`;
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

const footerLink = <Link href="https://www.ssb.no/" text="Statistisk Sentralbyrå © 2019" />;

const App = () => (
	<div className="app">
		<div className="app-content">
			<header className="app-header">
				<Header />
			</header>
			<main>
				<Switch>
					<Route exact path="/">
						<Welcome />
					</Route>
					<Route path="/design-system"> {/* For GH pages */}
						<Welcome />
					</Route>
					<Route path="/get-started">
						<GetStarted />
					</Route>
					<Route path="/components" component={Components}>
						<Components />
					</Route>
					<Route path="/templates">
						<Templates />
					</Route>
					<Route component={NoMatchPage} />
				</Switch>
			</main>
		</div>
		<footer>
			<Footer scrollToTop link={footerLink} logo={logo} slogan={slogan} socialLinks={socialLinks}>
				{/* Insert mega menu */}
			</Footer>
		</footer>
	</div>
);

export default App;
