import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({
	pages, selectedPage, href,
}) => (
	<ul className="pagination">
		<li className="previous">
			<a href={href}>Forrige</a>
		</li>
		{[...Array(pages)].map((e, index) => (
			<li className={`pagination-item ${index === selectedPage && 'active'}`}>
				<a href="{href}">
					{index + 1}
				</a>
			</li>
		))}
		<li>
			<a className="next" href={href}>Neste</a>
		</li>
	</ul>
);

Pagination.defaultProps = {
	selectedPage: '',
};

Pagination.propTypes = {
	pages: PropTypes.number,
	selectedPage: PropTypes.number,
	href: PropTypes.string.isRequired,
};

export default Pagination;
