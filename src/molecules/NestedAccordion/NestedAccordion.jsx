import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Plus, Minus } from 'react-feather';

const NestedAccordion = ({
	children, header, openByDefault, subHeader,
}) => {
	const [isOpen, toggleOpen] = useState(openByDefault);
	return (
		<div className={`nested-accordion-wrapper ${subHeader && 'with-sub-header'}`}>
			<div
				className={`nested-accordion-header ${isOpen ? 'open' : 'closed'}`}
				onClick={() => toggleOpen(!isOpen)}
			>
				{!isOpen && <Plus className="expand-icon" size="10" />}
				{isOpen && <Minus className="expand-icon" size="10" />}
				{subHeader && <h5 className="sub-header">{subHeader}</h5>}
				<span className="header-text">{header}</span>
			</div>
			<div className={`nested-accordion-body ${isOpen ? 'open' : 'closed'}`}>
				{children}
			</div>
		</div>
	);
};

NestedAccordion.defaultProps = {
	openByDefault: false,
};

NestedAccordion.propTypes = {
	children: PropTypes.node,
	header: PropTypes.string,
	openByDefault: PropTypes.bool,
	subHeader: PropTypes.string,
};

export default NestedAccordion;
