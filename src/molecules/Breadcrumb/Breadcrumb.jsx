import React from 'react';
import PropTypes from 'prop-types';
import Link from '@atoms/Link/Link';

const Breadcrumb = ({ items }) => (
	<div className="breadcrumb-wrapper">
		{items.map(item => (
			item.link ? (
				<div>
					<Link href={item.link}>{item.text}</Link>
					&nbsp;/&nbsp;
				</div>
			) : (
				<div>{item.text}</div>
			)
		))}
	</div>
);

Breadcrumb.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		link: PropTypes.string,
		text: PropTypes.string.isRequired,
	})).isRequired,
};

export default Breadcrumb;
