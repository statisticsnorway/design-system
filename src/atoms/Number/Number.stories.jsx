import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Number from './Number';

storiesOf('Number', module).addDecorator(centered)
	.add('Small', () => (
		<div>
			<Number number="599246391" size="small" />
		</div>
	))
	.add('Medium', () => (
		<div>
			<Number number="59923" size="medium" />
		</div>
	))
	.add('Large', () => (
		<div>
			<Number number="789398" size="large" />
		</div>
	));
