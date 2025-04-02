import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';

const CodeSnippet = ({ code, language = 'jsx', lineNumbers = false }) => {
	const node = useRef();

	useEffect(() => {
		if (node && node.current) {
			Prism.highlightElement(node.current);
		}
	});
	return (
		<div>
			<pre className={lineNumbers ? 'line-numbers' : ''}>
				<code ref={node} className={`language-${language}`}>
					{code.trim()}
				</code>
			</pre>
		</div>
	);
};

CodeSnippet.propTypes = {
	code: PropTypes.string.isRequired,
	language: PropTypes.oneOf([
		'js',
		'jsx',
		'html',
		'css',
	]),
	lineNumbers: PropTypes.bool,
};

export default CodeSnippet;
