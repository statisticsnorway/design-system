import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { FileText } from 'react-feather';

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
		const infoBoxWidth = 300;
		if (open && window.innerWidth <= 768) {
			// Center for mobile devices
			setPosition({ x: (window.innerWidth - infoContainer.current.clientWidth) / 2, y: y + topMargin });
		}
		if (open && window.innerWidth > 768) {
			if (x + infoBoxWidth > window.innerWidth) {
				// Detect if box will go outside of screen
				const adjustment = x + infoBoxWidth - window.innerWidth;
				setPosition({ x: x - adjustment, y: y + topMargin });
			} else {
				setPosition({ x, y: y + topMargin });
			}
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
			{children}<FileText size="12" />
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
