import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({ dark, light }) => (
	<hr className={`divider-line ${dark ? 'dark' : ''}${light ? 'light' : ''}`} />
);

Divider.defaultProps = {
	dark: false,
	light: false,
};

Divider.propTypes = {
	dark: PropTypes.bool,
	light: PropTypes.bool,
};

export default Divider;
