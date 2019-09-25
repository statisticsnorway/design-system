import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '@organisms/Header/Header';
import Footer from '@organisms/Footer/Footer';
import Components from '@pages/Components/Components';
import GetStarted from '@pages/GetStarted/GetStarted';
import Templates from '@pages/Templates/Templates';
import Welcome from '@pages/Welcome/Welcome';

const NoMatchPage = () => <h3>404 - Not found</h3>;

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
						{/*<Components />*/}
					</Route>
					<Route path="/templates">
						<Templates />
					</Route>
					<Route component={NoMatchPage} />
				</Switch>
			</main>
		</div>
		<footer>
			<Footer />
		</footer>
	</div>
);

export default App;
