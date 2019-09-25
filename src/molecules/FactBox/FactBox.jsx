import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '@molecules/Accordion/Accordion';

const FactBox = ({
	header, openByDefault, text,
}) => (
	<div className="fact-box-wrapper">
		<Accordion primary header={header} openByDefault={openByDefault}>
			{text}
		</Accordion>
	</div>
);

FactBox.defaultProps = {
	openByDefault: false,
};

FactBox.propTypes = {
	header: PropTypes.string.isRequired,
	openByDefault: PropTypes.bool,
	text: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element,
	]).isRequired,
};

export default FactBox;

/*
props
  header: required string prop
  openByDefault: optional boolean for opening on init
  text: required string or element to serve as body content
 */
