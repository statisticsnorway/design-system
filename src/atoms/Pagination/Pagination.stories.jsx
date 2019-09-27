import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { ArrowRight, ChevronDown, Play, X } from 'react-feather';
import Pagination from './Pagination';

const pages = 5;

storiesOf('Atoms|Pagination', module).addDecorator(centered)
	.add('Default', () => (
		<div>
			<Pagination href=" " pages={pages} />
		</div>
	));
