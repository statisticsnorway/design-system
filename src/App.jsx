import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '@organisms/Header/Header';

function App() {
	return (
		<div className="app">
			<header className="app-header">
				<Header />
			</header>
			<main>
				<aside>Look for stuff</aside>
				<section>
					<Switch>
						<Route exact path="/">Welcome!</Route>
						<Route path="/get-started">Get started</Route>
						<Route path="/components">Components</Route>
						<Route path="/templates">Templates</Route>
					</Switch>
				</section>
			</main>
			<footer>Footer</footer>
		</div>
	);
}

export default App;
