import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Link from './Link';

storiesOf('Link', module).addDecorator(centered)
	.add('Regular', () => (
		<div>
			<Link href=" " text="A regular link" />
			<br />
			<Link href=" " text="A regular link with icon" icon={<span>&gt;</span>}/>
		</div>
	))
	.add('Profiled', () => (
		<div>
			<Link href=" " text="A profiled link" linkType="profiled" />
			<br />
			<Link href=" " text="A profiled link with icon" linkType="profiled" icon={<span>&gt;</span>}/>
		</div>
	))
	.add('Header', () => (
		<div>
			<Link href=" " text="A header link" linkType="header" />
			<br />
			<Link href=" " text="A header link with icon" linkType="header" icon={<span>&gt;</span>}/>
		</div>
	));
