import React from 'react';
import PropTypes from 'prop-types';
import Link from '@atoms/Link/Link';

const Dialog = ({
	href, linkText, text, title, type,
}) => (
	<div className={`dialog-container ${type}`}>
		<div className="icon-bar">
			<i data-feather="alert-circle" />
		</div>
		<div className="info-content">
			<p><strong>{title}</strong></p>
			<p><span className="dialog-text">{text}</span></p>
			{href && <Link text={linkText} href={href} />}
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
