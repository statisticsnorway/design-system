import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '@organisms/Header/Header';
import Footer from '@organisms/Footer/Footer';
import Components from '@pages/Components/Components';
import GetStarted from '@pages/GetStarted/GetStarted';
import Templates from '@pages/Templates/Templates';
import Welcome from '@pages/Welcome/Welcome';

function App() {
	return (
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
						<Route path="/get-started">
							<GetStarted />
						</Route>
						<Route path="/components">
							<Components />
						</Route>
						<Route path="/templates">
							<Templates />
						</Route>
					</Switch>
				</main>
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
