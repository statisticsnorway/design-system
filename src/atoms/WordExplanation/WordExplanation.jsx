import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

const WordExplanation = ({
	explanation, children,
}) => {
	const node = useRef();
	const infoContainer = useRef();
	const [open, setOpen] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleClickOutside = e => {
		if (node.current.contains(e.target)) {
			return;
		}
		setOpen(false);
	};

	const calculatePosition = (x, y) => {
		const topMargin = 30;
		console.log('Node: ', node);
		console.log('X: ', x);
		console.log('Window width: ', window.innerWidth);
		console.log(infoContainer)
		if (open && window.innerWidth <= 768) {
			// Center for mobile devices
			console.log('New position: ', (window.innerWidth - infoContainer.current.clientWidth) / 2);
			setPosition({ x: (window.innerWidth - infoContainer.current.clientWidth) / 2, y: y + topMargin });
		}
		if (open && window.innerWidth > 768) {
			setPosition({ x, y: y + topMargin });
		}
	};

	useEffect(() => {
		calculatePosition(node.current.offsetLeft, node.current.offsetTop);
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
		<span ref={node} onClick={() => setOpen(!open)} className="word-explanation-wrap">
			{children}<i />&nbsp;
			<div className="animate-background" />
			{open && (
				<div className="info-box-wrapper" ref={infoContainer} style={{ top: position.y, left: position.x }}>
					<div className="arrow">
						<svg width="16" height="16">
							<rect width="16" height="16" rotate="45deg" />
						</svg>
					</div>
					<div className="info-box">
						<i className="close-button">x</i>
						<span className="info-text">{explanation}</span>
					</div>
				</div>
			)}
		</span>
	);
};

WordExplanation.defaultProps = {};

WordExplanation.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.string,
	]),
	explanation: PropTypes.string.isRequired,
};

export default WordExplanation;
