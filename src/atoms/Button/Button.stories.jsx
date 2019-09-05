import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Button from './Button';

storiesOf('Button', module).addDecorator(centered)
	.add('Primary', () => (
		<div>
			<Button text="Primary" primary />
			<Button text="Disabled" primary disabled />
		</div>
	))
	.add('Secondary', () => (
		<div>
			<Button text="Secondary" />
			<Button text="Disabled" disabled />
		</div>
	))
	.add('Danger', () => (
		<div>
			<Button text="Danger" primary danger />
		</div>
	));
