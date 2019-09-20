import React from 'react';
import PropTypes from 'prop-types';

const Link = ({
	href, icon, linkType, text,
}) => (
	<div className="link">
		<div className="index">
			<a
				className={`link-text ${linkType} ${icon && 'with-icon'}`}
				href={href}
			>{icon}<span className="link-text">{text}</span> {/* TODO: Add proper icon and give it higher z-index */}
			</a>
		</div>
		<div className="animate-background" />
	</div>
);

Link.defaultProps = {
	linkType: 'regular',
};

Link.propTypes = {
	href: PropTypes.string.isRequired,
	icon: PropTypes.element,
	linkType: PropTypes.string,
	text: PropTypes.string.isRequired,
};

export default Link;
