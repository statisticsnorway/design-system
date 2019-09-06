import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

const WordExplanation = ({
	explanation, children,
}) => {
	const node = useRef();
	const [open, setOpen] = useState(false);

	const handleClickOutside = (e) => {
		console.log('Clicking anywhere');
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

			{open && <div className="info-box">Look here!</div>}
		</div>
	);
};

WordExplanation.defaultProps = {};

WordExplanation.propTypes = {
	children: PropTypes.element,
	explanation: PropTypes.string.isRequired,
};

export default WordExplanation;
