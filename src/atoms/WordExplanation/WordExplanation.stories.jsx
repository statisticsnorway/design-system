import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import WordExplanation from './WordExplanation';

const placeholderText = `This is the explanation of the word
written in one or more paragraphs depending on the amount of space needed`;

storiesOf('Atoms|WordExplanation', module).addDecorator(centered)
	.add('As a wrapper', () => (
		<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			Morbi laoreet rhoncus lorem, eu finibus diam interdum sed.
			Integer eleifend, nunc nec venenatis lacinia, tortor ex luctus est, sed tincidunt nulla turpis eget quam.
			Nullam elit nunc, rutrum quis viverra eget, varius vel neque
			rutum <WordExplanation explanation={placeholderText}>only this is wrapped!</WordExplanation>
			Ut gravida orci bibendum dolor dictum, id pretium quam bibendum.
			Vivamus nunc enim, aliquam et risus in, hendrerit pulvinar magna.
			Aenean tincidunt id est vitae viverra. Maecenas non sem et sapien faucibus accumsan nec ut ipsum.
		</span>
	));
