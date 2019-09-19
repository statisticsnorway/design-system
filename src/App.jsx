import React from 'react';
import Header from '@organisms/Header/Header';

const placeholderText = `
Here you can write a informative text and inform the user of what has happened.
In the instance the informative warning is regarding moved statistics or diagrams,
please attach a link to where the data can be found. `;

function App() {
	return (
		<div className="app">
			<header className="app-header">
				<Header />
			</header>
			<main>Main content</main>
			<footer>Footer</footer>
		</div>
	);
}

export default App;
