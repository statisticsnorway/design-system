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
		<header className="app-header">
			<Header />
		</header>
		<div className="app-content">
			<Switch>
				<Route exact path="/">
					<main>
						<Welcome />
					</main>
				</Route>
				<Route path="/design-system"> {/* For GH pages */}
					<main>
						<Welcome />
					</main>
				</Route>
				<Route path="/get-started">
					<main>
						<Welcome />
					</main>
				</Route>
				<Route path="/components" component={Components}>
					<main>
						<Components />
					</main>
				</Route>
				<Route path="/templates">
					<main>
						<Templates />
					</main>
				</Route>
				<Route component={NoMatchPage} />
			</Switch>
		</div>
		<footer>
			<Footer logo={logo} />
		</footer>
	</div>
);

export default App;
