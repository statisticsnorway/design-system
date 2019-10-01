import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Pagination from './Pagination';

const items = 20;
const pageLimit = 10;

storiesOf('Atoms|Pagination', module).addDecorator(centered)
	.add('Default', () => (
		<div>
			<Pagination items={items} pageLimit={pageLimit} />
		</div>
	));
