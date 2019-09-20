import React from 'react';
import PropTypes from 'prop-types';
import Link from '@atoms/Link/Link';

const ProfileBox = ({
	link, text, title,
}) => (
	<div className="profile-box-wrapper">
		<Link href={link} text={title} linkType="header" />
		<p>{text}</p>
	</div>
);

ProfileBox.defaultProps = {};

ProfileBox.propTypes = {
	link: PropTypes.string,
	text: PropTypes.string,
	title: PropTypes.string,
};

export default ProfileBox;
