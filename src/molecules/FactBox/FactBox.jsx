import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MinusCircle, PlusCircle } from 'react-feather';

/*
props
  header: required string prop
  open: optional boolean for opening on init
  text: required string or element to serve as body content
 */

const FactBox = ({
	header, open, text,
}) => {
	const [isOpen, toggleOpen] = useState(open);
	return (
		<div className="fact-box-wrapper">
			<div className="fact-header" onClick={() => toggleOpen(!isOpen)}>
				{!isOpen && <PlusCircle className="icon" />}
				{isOpen && <MinusCircle className="icon" />}
				<h5>{header}</h5>
			</div>
			{isOpen && <div className="fact-body">{text}</div>}
		</div>
	);
};

FactBox.defaultProps = {
	open: false,
};

FactBox.propTypes = {
	header: PropTypes.string.isRequired,
	open: PropTypes.bool,
	text: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element,
	]).isRequired,
};

export default FactBox;
