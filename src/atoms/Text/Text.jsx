import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ children, negative, small }) => (
	<span className={`text-wrapper${small ? ' small-text' : ''}${negative ? ' negative' : ''}`}>{ children }</span>
);

Text.propTypes = {
	children: PropTypes.node,
	negative: PropTypes.bool,
	small: PropTypes.bool,
};

export default Text;
