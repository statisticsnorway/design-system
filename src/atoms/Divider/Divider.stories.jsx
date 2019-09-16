import React from 'react';
import { storiesOf } from '@storybook/react';
import Divider from './Divider';

storiesOf('Atoms|Divider', module)
	.add('Dark', () => (
		<div style={{ alignItems: 'center', display: 'flex', height: '100%', position: 'absolute', width: '100%' }}>
			<Divider dark />
		</div>
	))
	.add('Light', () => (
		<div style={{ alignItems: 'center', display: 'flex', height: '100%', position: 'absolute', width: '100%' }}>
			<Divider light />
		</div>
	));
