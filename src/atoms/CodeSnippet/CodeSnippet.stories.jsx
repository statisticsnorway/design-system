import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import CodeSnippet from './CodeSnippet';

const jsxExample = `
import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ text }) => (
	<div>In props you will find {text}</div>
);

Component.defaultProps = {
	text: '',
}

Component.propTypes = {
	text: PropTypes.string,
}

export default Component;
`;

const cssExample = `
.some-class {
	cursor: pointer;
	display: inline-block;
	position: relative;
	
	&:hover {
		background: red;
	}
}
`;

const htmlExample = `
<div class="some-class">
	<p>A paragraph that makes sense</p>
	<img src="/path/to/image" />
</div>
`;

storiesOf('Atoms|CodeSnippet', module).addDecorator(centered)
	.add('JSX', () => (
		<CodeSnippet code={jsxExample} language="jsx" />
	))
	.add('CSS', () => (
		<CodeSnippet code={cssExample} language="css" />
	))
	.add('HTML', () => (
		<CodeSnippet code={htmlExample} language="html" />
	));
