import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@statisticsnorway/ssb-component-library';
import Paragraph from '@atoms/Paragraph/Paragraph';

const ProfileBox = ({
	link, text, title,
}) => (
	<div className="profile-box-wrapper">
		<Link href={link} linkType="header">{title}</Link>
		<Paragraph>{text}</Paragraph>
	</div>
);

ProfileBox.defaultProps = {};

ProfileBox.propTypes = {
	link: PropTypes.string,
	text: PropTypes.string,
	title: PropTypes.string,
};

export default ProfileBox;
