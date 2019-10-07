import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import RadioGroup from './RadioGroup';

const radioItems = [
	{
		label: 'Item 1',
		value: 'item1',
	}, {
		label: 'Item 2',
		value: 'item2',
	}, {
		label: 'Item 3',
		value: 'item3',
		disabled: 'true',
	},
];

storiesOf('Molecules|RadioGroup', module).addDecorator(centered)
	.add('Default', () => (
		<div>
			<RadioGroup header="Header" items={radioItems} />
		</div>
	));
