import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import CheckboxGroup from './CheckboxGroup';

const checkboxItems = [
	{
		label: 'Item 1',
		value: 'item1',
	}, {
		label: 'Item 2',
		value: 'item2',
	}, {
		label: 'Item 3',
		value: 'item3',
	},
];

storiesOf('Molecules|CheckboxGroup', module).addDecorator(centered)
	.add('Default', () => (
		<div>
			<CheckboxGroup header="Header" items={checkboxItems} />
		</div>
	));
