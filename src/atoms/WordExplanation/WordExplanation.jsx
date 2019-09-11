import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

/*
Two ways to make this component:
Like now, where the highlighted text has to be singled out in the input.

Or you can input the whole string and in addition the word you want explained.
This means you have to search for the word and highlight it from there, which might cause complications.
 */

const WordExplanation = ({
	explanation, children,
}) => {
	const node = useRef();
	const [open, setOpen] = useState(false);

	const handleClickOutside = (e) => {
		console.log(e);
		if (node.current.contains(e.target)) {
			return;
		}
		setOpen(false);
	};

	useEffect(() => {
		if (open) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [open]);

	return (
		<span ref={node} onClick={(e) => setOpen(!open)} className="word-explanation-wrap">
			{children}<i />&nbsp;
			<div className="animate-background" />
			{open && (
				<div className="arrow">
					<svg width="16" height="16">
						<rect width="16" height="16" rotate="45deg" />
					</svg>
				</div>
			)}
			{open && (
				<div className="info-box">
					<i className="close-button">x</i>
					<span className="info-text">{explanation}</span>
				</div>
			)}
		</span>
	);
};

WordExplanation.defaultProps = {};

WordExplanation.propTypes = {
	children: PropTypes.element,
	explanation: PropTypes.string.isRequired,
};

export default WordExplanation;
