import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import StoryRouter from 'storybook-react-router';

import Tabs from './Tabs';

const items = [
	{
		title: 'Get Started',
		path: 'get-started/',
	},
	{
		title: 'Components',
		path: 'components/',
	},
	{
		title: 'Templates',
		path: 'templates/',
	},
];

storiesOf('Atoms|Tabs', module).addDecorator(centered).addDecorator(StoryRouter())
	.add('Tabs', () => (
		<Tabs items={items} />
	));
