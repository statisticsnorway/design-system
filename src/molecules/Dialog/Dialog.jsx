import React from 'react';
import PropTypes from 'prop-types';
import Link from '@atoms/Link/Link';
import Paragraph from '@atoms/Paragraph/Paragraph';
import { AlertCircle, AlertTriangle } from 'react-feather';

const Dialog = ({
	href, linkText, text, title, type,
}) => (
	<div className={`dialog-container ${type}`}>
		<div className="icon-bar">
			{type === 'warning' && <AlertTriangle size="36" />}
			{type === 'info' && <AlertCircle size="36" />}
		</div>
		<div className="info-content">
			<span><strong>{title}</strong></span>
			<Paragraph>{text}</Paragraph>
			{href && <Link href={href}>{linkText}</Link>}
		</div>
	</div>
);

Dialog.defaultProps = {
	type: 'info',
};

Dialog.propTypes = {
	href: PropTypes.string,
	linkText: PropTypes.string,
	text: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	type: PropTypes.oneOf([
		'info',
		'warning',
	]),
};

export default Dialog;
