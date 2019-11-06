import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from '@statisticsnorway/ssb-component-library';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Components from '@pages/Components/Components';
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
		name: 'Facebook',
	},
	{
		link: 'https://twitter.com/ssbnytt',
		logo: <Twitter />,
		name: 'Twitter',
	},
	{
		link: 'https://www.linkedin.com/company/statistics-norway/',
		logo: <Linkedin />,
		name: 'LinkedIn',
	},
	{
		link: 'https://www.ssb.no/informasjon/rss',
		logo: <Rss />,
		name: 'RSS',
	},
];

const footerLink = <Link href="https://www.ssb.no/">Statistisk Sentralbyrå © 2019</Link>;

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
						<Welcome />
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
