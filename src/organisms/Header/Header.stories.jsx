import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Header from './Header';

storiesOf('Organisms|Header', module).addDecorator(StoryRouter())
	.add('Top Header', () => (
		<div style={{ alignItems: 'center', display: 'flex', height: '100%', padding: '0 10px', width: '100%' }}>
			<Header />
		</div>
	));
