import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { ArrowRight } from 'react-feather';
import Link from './Link';

storiesOf('Atoms|Link', module).addDecorator(centered)
	.add('Default', () => (
		<div>
			<Link href=" " text="A regular link" />
			<br />
			<Link href=" " text="A regular link with icon" icon={<ArrowRight />} />
		</div>
	))
	.add('Profiled', () => (
		<div>
			<Link href=" " text="A profiled link" linkType="profiled" />
			<br />
			<Link href=" " text="A profiled link with icon" linkType="profiled" icon={<ArrowRight />} />
		</div>
	))
	.add('Header', () => (
		<div>
			<Link href=" " text="A header link" linkType="header" />
			<br />
			<Link href=" " text="A header link with icon" linkType="header" icon={<ArrowRight />} />
		</div>
	));
