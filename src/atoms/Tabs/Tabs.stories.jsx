import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Tabs from './Tabs';

const items = [
	{
		title: 'Get Started',
		url: 'get-started/',
	},
	{
		title: 'Components',
		url: 'components/',
	},
	{
		title: 'Templates',
		url: 'templates/',
	},
];

storiesOf('Atoms|Tabs', module).addDecorator(centered)
	.add('Tabs', () => (
		<Tabs items={items} />
	));
