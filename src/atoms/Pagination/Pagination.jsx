import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Pagination = ({
	pages, selectedPage,
}) => {
	const [selected, setSelected] = useState(selectedPage);
	return (
		<nav>
			<ul className="pagination">
				<li className="previous">
					<a href="#!">Forrige</a>
				</li>
				{[...Array(pages)].map((e, index) => (
					<li index={index} className={`pagination-item ${index === selected && 'active'}`}>
						<a href="#!" onClick={() => setSelected(index)}>
							{index + 1}
						</a>
					</li>
				))}
				<li>
					<a className="next" href="#!">Neste</a>
				</li>
			</ul>
		</nav>
	);
};

Pagination.defaultProps = {
	selectedPage: '',
};

Pagination.propTypes = {
	pages: PropTypes.number,
	selectedPage: PropTypes.number,
};

export default Pagination;
