import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import WordExplanation from './WordExplanation';

const placeholderText = `This is the explanation of the word
written in one or more paragraphs depending on the amount of space needed`;

storiesOf('WordExplanation', module).addDecorator(centered)
	.add('As a wrapper', () => (
		<div>Here is a sentence, but <WordExplanation explanation={placeholderText}>only this is wrapped</WordExplanation>
			within the component
		</div>
	));
