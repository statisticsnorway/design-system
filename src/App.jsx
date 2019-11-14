import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Components from '@pages/Components/Components';
import Templates from '@pages/Templates/Templates';
import Welcome from '@pages/Welcome/Welcome';
import logo from '@public/ssb-logo-white.svg';
import { Facebook, Linkedin, Rss, Twitter } from 'react-feather';

const NoMatchPage = () => <h3>404 - Not found</h3>;
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

const App = () => (
	<div className="app">
		<Switch>
			<Route exact path="/">
				<div className="app-content">
					<header className="app-header">
						<Header />
					</header>
					<main>
						<Welcome />
					</main>
				</div>
			</Route>
			<Route path="/design-system"> {/* For GH pages */}
				<div className="app-content">
					<header className="app-header">
						<Header />
					</header>
					<main>
						<Welcome />
					</main>
				</div>
			</Route>
			<Route path="/get-started">
				<div className="app-content">
					<header className="app-header">
						<Header />
					</header>
					<main>
						<Welcome />
					</main>
				</div>
			</Route>
			<Route path="/components" component={Components}>
				<div className="app-content">
					<header className="app-header">
						<Header />
					</header>
					<main>
						<Components />
					</main>
				</div>
			</Route>
			<Route path="/templates">
				<div className="app-content">
					<header className="app-header">
						<Header />
					</header>
					<main>
						<Templates />
					</main>
				</div>
			</Route>
			<Route component={NoMatchPage} />
		</Switch>
		<footer>
			<Footer logo={logo} />
		</footer>
	</div>
);

export default App;
