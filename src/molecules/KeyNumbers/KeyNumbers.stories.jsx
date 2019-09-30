import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { Home } from 'react-feather';
import KeyNumbers from './KeyNumbers';

const title = 'Antall husholdninger';

storiesOf('Molecules|KeyNumbers', module).addDecorator(centered)
	.add('Large', () => (
		<div>
			<KeyNumbers
				number="789 398"
				title={title}
				numberDescription="husholdninger"
				year="2018"
				size="large"
				icon={<Home size="280" />}
			/>
		</div>
	))
	.add('Medium', () => (
		<div>
			<KeyNumbers
				number="789 398"
				title={title}
				numberDescription="husholdninger"
				year="2018"
				size="medium"
				icon={<Home size="210" />}
			/>
		</div>
	))
	.add('Small', () => (
		<div>
			<KeyNumbers
				number="789 398"
				title={title}
				numberDescription="husholdninger"
				year="2018"
				size="small"
				icon={<Home size="140" />}
			/>
		</div>
	));
