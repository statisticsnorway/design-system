import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '@organisms/Header/Header';
import Footer from '@organisms/Footer/Footer';
import SidebarNav from '@organisms/SidebarNav/SidebarNav';

const sidebarItems = [
	{
		label: 'Item 1',
		path: '/item1',
		items: [{
			label: 'Item 1',
			path: '/item1',
			items: [{
				label: 'Item 1',
				path: '/item1',
			}],
		}, {
			label: 'Item 2',
			path: '/item2',
		}],
	}, {
		label: 'Item 2',
		path: '/item2',
		items: [{
			label: 'Item 1',
			path: '/item1',
			items: [{
				label: 'Item 1',
				path: '/item1',
			}],
		}],
	}, {
		label: 'Item 3',
		path: '/item3',
	}, {
		label: 'Item 4',
		path: '/item4',
	},
];

function App() {
	return (
		<div className="app">
			<div className="app-content">
				<header className="app-header">
					<Header />
				</header>
				<main>
					<aside>
						<SidebarNav navItems={sidebarItems} />
					</aside>
					<section>
						<Switch>
							<Route exact path="/">
								<h2>
								Welcome!
								</h2>
							</Route>
							<Route path="/get-started">
								<h2>
								Get started
								</h2>
							</Route>
							<Route path="/components">
								<h2>
								Components
								</h2>
							</Route>
							<Route path="/templates">
								<h2>
								Templates
								</h2>
							</Route>
						</Switch>
					</section>
				</main>
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
