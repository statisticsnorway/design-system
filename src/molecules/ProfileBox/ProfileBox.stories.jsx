import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import ProfileBox from './ProfileBox';

storiesOf('molecules|ProfileBox', module).addDecorator(centered)
	.add('Default', () => (
		<ProfileBox link=" " text="Explaining text about something." title="This is a title link" />
	))
	.add('Three boxes', () => (
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 250px)', gridColumnGap: '20px' }}>
			<ProfileBox link=" " text="Explaining text about something." title="This is a title link" />
			<ProfileBox link=" " text="Explaining text about something." title="This is a title link" />
			<ProfileBox link=" " text="Explaining text about something." title="This is a title link" />
		</div>
	));
