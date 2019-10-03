import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Checkbox from './Checkbox';

const children = [
	{
		value: 'test1',
		label: 'Test 1',
	},
];

storiesOf('Atoms|Checkbox', module).addDecorator(centered)
	.add('Default', () => (
		<div style={{ display: 'flex' }}>
			<Checkbox value="item" label="Item" />
		</div>
	));
