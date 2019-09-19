import React from 'react';
import Button from '@atoms/Button/Button';
import Link from '@atoms/Link/Link';
import Dialog from '@molecules/Dialog/Dialog';
import ReferenceLink from '@molecules/ReferenceLink/ReferenceLink';
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
				<Button text="Button" primary />
				<Link text="A useful link" href=" " linkType="header" />
			</header>
			<Dialog
				text={placeholderText}
				title="Be aware of the dog"
				linkText="A place to read more about this"
				href=" "
				type="warning"
			/>
			<ReferenceLink text="Some kinda reference link" href=" " />
		</div>
	);
}

export default App;
