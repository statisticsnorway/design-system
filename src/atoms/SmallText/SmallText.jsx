import React from 'react';
import PropTypes from 'prop-types';

const SmallText = ({ children }) => <span className="small-text-wrapper">{ children }</span>;

SmallText.propTypes = { children: PropTypes.node };

export default SmallText;
