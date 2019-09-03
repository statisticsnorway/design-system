import React from 'react';
import Button from '@atoms/Button/Button';

function App() {
	return (
		<div className="app">
			<header className="app-header">
				<p>
					SSB Design System
				</p>
				<Button text="Button" primary />
			</header>
		</div>
	);
}

export default App;
