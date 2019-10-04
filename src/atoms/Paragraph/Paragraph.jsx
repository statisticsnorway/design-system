import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ children }) => <p className="paragraph-wrapper">{ children }</p>;

Paragraph.propTypes = { children: PropTypes.node };

export default Paragraph;
