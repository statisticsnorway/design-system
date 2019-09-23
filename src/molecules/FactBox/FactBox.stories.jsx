import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import FactBox from './FactBox';

const mockedHeader = 'This is a fact box header';
const mockedText = 'This is a normal paragraph text where the explanation of the fact is written in. '
	+ 'Here you can write a concise and descriptive text that helps the user understand the fact. ';

const mockedContent = <span>Insert custom HTML if you want to display something else than just text</span>;

storiesOf('Molecules|FactBox', module).addDecorator(centered)
	.add('Default', () => (
		<div style={{ width: '450px' }}>
			<FactBox header={mockedHeader} text={mockedText} />
			<FactBox header={mockedHeader} text={mockedContent} open />
		</div>
	));
