import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({ className, dark, light }) => (
	<hr className={`divider-line ${dark ? 'dark' : ''}${light ? 'light' : ''} ${className}`} />
);

Divider.defaultProps = {
	className: '',
	dark: false,
	light: false,
};

Divider.propTypes = {
	className: PropTypes.string,
	dark: PropTypes.bool,
	light: PropTypes.bool,
};

export default Divider;
