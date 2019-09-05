import React from 'react';
import Button from '@atoms/Button/Button';
import Link from '@atoms/Link/Link';

function App() {
	return (
		<div className="app">
			<header className="app-header">
				<p>
					SSB Design System
				</p>
				<Button text="Button" primary />
				<Link text="A useful link" href=" " linkType="header" />
			</header>
		</div>
	);
}

export default App;
