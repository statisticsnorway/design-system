import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './Header';

storiesOf('Organisms|Header', module)
	.add('Top Header', () => (
		<div style={{ alignItems: 'center', display: 'flex', height: '100%', padding: '0 10px', width: '100%' }}>
			<Header />
		</div>
	));
