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
		<div ref={node} onClick={(e) => setOpen(!open)} className="word-explanation-wrap">
			{children}<i />
			<div className="animate-background" />

			{open && (
				<div className="info-box">
					<span className="close-button">x</span>
					<span className="info-text">{explanation}</span>
				</div>
			)}
		</div>
	);
};

WordExplanation.defaultProps = {};

WordExplanation.propTypes = {
	children: PropTypes.element,
	explanation: PropTypes.string.isRequired,
};

export default WordExplanation;
