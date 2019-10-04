import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ children, className, negative, size }) => (
	<div className={`title-wrapper ${className}`}>
		{size === 1 && <h1 className={negative ? 'negative' : ''}>{children}</h1>}
		{size === 2 && <h2 className={negative ? 'negative' : ''}>{children}</h2>}
		{size === 3 && <h3 className={negative ? 'negative' : ''}>{children}</h3>}
		{size === 4 && <h4 className={negative ? 'negative' : ''}>{children}</h4>}
		{size === 5 && <h5 className={negative ? 'negative' : ''}>{children}</h5>}
		{size === 6 && <h6 className={negative ? 'negative' : ''}>{children}</h6>}
	</div>
);

Title.defaultProps = {
	negative: false,
	size: 1,
};

Title.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	negative: PropTypes.bool,
	size: PropTypes.number,
};

export default Title;
