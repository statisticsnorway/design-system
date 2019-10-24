import React from 'react';
import PropTypes from 'prop-types';
import { Number } from '@statisticsnorway/ssb-component-library';

const KeyNumbers = ({
	icon, number, numberDescription, size, title, year,
}) => (
	<div className="key-number-wrapper">
		<div className="icon-container">{icon}</div>
		<div>
			<h4 className="title-text">{title}</h4>
			<div>{year}</div>
			<Number size={size} number={number} />
			<h4 className="number-description">{numberDescription}</h4>
		</div>
	</div>
);

KeyNumbers.defaultProps = {};

KeyNumbers.propTypes = {
	icon: PropTypes.node,
	number: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	numberDescription: PropTypes.string,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	title: PropTypes.string,
	year: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
};

export default KeyNumbers;
