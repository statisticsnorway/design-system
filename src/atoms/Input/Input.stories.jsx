import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Input from './Input';

let someValue = '';
const handleChange = e => {
	someValue = e;
};

const handleSubmit = e => {
	console.log(e);
};

storiesOf('Atoms|Input', module).addDecorator(centered)
	.add('Default', () => (
		<div style={{ width: '300px' }}>
			<Input value={someValue} handleChange={handleChange} />
		</div>
	))
	.add('Search field', () => (
		<div style={{ width: '300px' }}>
			<Input searchField submitCallback={handleSubmit} />
		</div>
	))
	.add('With value', () => (
		<div style={{ width: '300px' }}>
			<Input value="Already filled" />
		</div>
	))
	.add('Disabled', () => (
		<div style={{ width: '300px' }}>
			<Input disabled />
		</div>
	));
