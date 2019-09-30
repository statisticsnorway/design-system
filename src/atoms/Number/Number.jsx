import React from 'react';
import PropTypes from 'prop-types';

const formatNumber = num => num.toString()
	.replace(/\D+/g, '') // remove everything that is not a number
	.replace(/(\d)(?=(\d{3})+(?!\d))/g, ' '); // add spaces in desired format

const Number = ({
	size, number,
}) => (
	<div className={`number-component ${size}`}>
		{formatNumber(number)}
	</div>
);

Number.defaultProps = {
	size: 'small',
};

Number.propTypes = {
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	number: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
};

export default Number;
