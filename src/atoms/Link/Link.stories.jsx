import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { ArrowRight } from 'react-feather';
import Link from './Link';

storiesOf('Atoms|Link', module).addDecorator(centered)
	.add('Default', () => (
		<div>
			<Link href=" ">A regular link</Link>
			<br />
			<Link href=" " icon={<ArrowRight />}>A regular link with icon</Link>
		</div>
	))
	.add('Profiled', () => (
		<div>
			<Link href=" " linkType="profiled">A profiled link</Link>
			<br />
			<Link href=" " linkType="profiled" icon={<ArrowRight />}>A profiled link with icon</Link>
		</div>
	))
	.add('Header', () => (
		<div>
			<Link href=" " linkType="header">A header link</Link>
			<br />
			<Link href=" " linkType="header" icon={<ArrowRight />}>A header link with icon</Link>
		</div>
	));
