import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '@organisms/Header/Header';
import Input from '@atoms/Input/Input';

function App() {
	return (
		<div className="app">
			<div className="app-content">
				<header className="app-header">
					<Header />
				</header>
				<main>
					<aside>
						<Input label="Search for e.g tabs" />
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
			<footer>Footer
				<br /> footer
			</footer>
		</div>
	);
}

export default App;
