import React from 'react';
import PropTypes from 'prop-types';

const LeadParagraph = ({ children }) => <p className="lead-paragraph-wrapper">{ children }</p>;

LeadParagraph.propTypes = { children: PropTypes.node };

export default LeadParagraph;
