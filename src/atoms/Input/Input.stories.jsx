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
		<div style={{ width: '280px' }}>
			<Input value={someValue} handleChange={handleChange} />
		</div>
	))
	.add('Search field', () => (
		<div style={{ width: '280px' }}>
			<Input searchField submitCallback={handleSubmit} />
		</div>
	))
	.add('With value', () => (
		<div style={{ width: '280px' }}>
			<Input value="Already filled" />
		</div>
	))
	.add('Disabled', () => (
		<div style={{ width: '280px' }}>
			<Input disabled />
		</div>
	))
	.add('Error', () => (
		<div style={{ width: '280px' }}>
			<Input error errorMessage="Beklager, dette er feil" />
		</div>
	))
	.add('Negative', () => (
		<div style={{
			width: '40em',
			height: '20em',
			background: '#274247',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		}}
		>
			<Input negative value={someValue} handleChange={handleChange} />
			<Input negative searchField submitCallback={handleSubmit} />
			<Input negative value={someValue} error errorMessage="Beklager, dette er feil" />
		</div>
	));
