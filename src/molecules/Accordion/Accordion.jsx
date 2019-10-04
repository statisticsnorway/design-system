import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Title from '@atoms/Title/Title';
import { PlusCircle, MinusCircle } from 'react-feather';

const Accordion = ({
	children, header, openByDefault, primary, subHeader,
}) => {
	const [isOpen, toggleOpen] = useState(openByDefault);
	return (
		<div className={`accordion-wrapper ${subHeader && 'with-sub-header'}`}>
			<div
				className={`accordion-header ${isOpen ? 'open' : 'closed'}`}
				onClick={() => toggleOpen(!isOpen)}
			>
				{!isOpen && <PlusCircle className="expand-icon" size={primary ? 20 : 15} />}
				{isOpen && <MinusCircle className="expand-icon" size={primary ? 20 : 15} />}
				{subHeader && <Title size={5} className="sub-header">{subHeader}</Title>}
				<Title size={5} className="header-text">{header}</Title>
			</div>
			<div className={`accordion-body ${isOpen ? 'open' : 'closed'}`}>
				{isOpen && children}
			</div>
		</div>
	);
};

Accordion.defaultProps = {
	openByDefault: false,
	primary: false,
};

Accordion.propTypes = {
	children: PropTypes.node,
	header: PropTypes.string,
	openByDefault: PropTypes.bool,
	primary: PropTypes.bool,
	subHeader: PropTypes.string,
};

export default Accordion;
