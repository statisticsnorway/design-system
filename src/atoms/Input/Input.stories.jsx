import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Input from './Input';

let someValue = '';
const handleChange = e => {
	someValue = e;
};

storiesOf('Atoms|Input', module).addDecorator(centered)
	.add('Default', () => (
		<Input value={someValue} handleChange={handleChange} />
	))
	.add('With value', () => (
		<Input value="Already filled" />
	))
	.add('Disabled', () => (
		<Input disabled />
	));
