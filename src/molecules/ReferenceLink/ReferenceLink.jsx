import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@statisticsnorway/ssb-component-library';

const ReferenceLink = ({
	href, text,
}) => (
	<div className="reference-link">
		<span className="reference-link-head">Source</span>
		<Link href={href}>{text}</Link>
	</div>
);

ReferenceLink.defaultProps = {};

ReferenceLink.propTypes = {
	href: PropTypes.string,
	text: PropTypes.string,
};

export default ReferenceLink;
