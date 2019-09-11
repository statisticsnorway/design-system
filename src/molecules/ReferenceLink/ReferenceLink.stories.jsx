import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import ReferenceLink from './ReferenceLink';

storiesOf('Molecules|ReferenceLink', module).addDecorator(centered)
	.add('Regular', () => (
		<div>
			<ReferenceLink text="Some kinda reference link" href=" " />
		</div>
	));
