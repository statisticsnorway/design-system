import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Components from '@pages/Components/Components';
import Templates from '@pages/Templates/Templates';
import Welcome from '@pages/Welcome/Welcome';
import logo from '@public/ssb-logo-white.svg';

const NoMatchPage = () => <h3>404 - Not found</h3>;

const App = () => (
	<div className="app">
		<header className="app-header">
			<Header />
		</header>
		<div className="app-content">
			<main>
				<Routes>
					<Route
						exact
						path="/"
						element={<Welcome />}
					/>
					<Route
						path="/design-system"
						element={<Welcome />}
					/> {/* For GH pages */}
					<Route
						path="/get-started"
						element={<Welcome />}
					/>
					<Route
						path="/components"
						element={<Components />}
					/>
					<Route path="/templates" element={<Templates />} />
					<Route element={NoMatchPage} />
				</Routes>
			</main>

		</div>
		<footer>
			<Footer logo={logo} />
		</footer>
	</div>
);

export default App;
