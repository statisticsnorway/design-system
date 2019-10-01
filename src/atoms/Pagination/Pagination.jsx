import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Pagination = ({
	items, selectedPage, pageLimit,
}) => {
	const [selected, setSelected] = useState(selectedPage);
	const pager = getPager().pageArray;

	function getPager() {
		let startPage = 1;
		let endPage = items;
		if (selected <= 6) {
			startPage = 1;
			endPage = 10;
		} else if (selected + 4 >= items) {
			startPage = items - 9;
			endPage = items;
		} else {
			startPage = selected - 5;
			endPage = selected + 4;
		}

		const startIndex = (selected - 1) * pageLimit;
		const pageArray = [...Array((endPage + 1) - startPage).keys()].map(i => ({ id: (i + startPage), name: (i + startPage) }));

		return {
			pageArray,
		};
	}

	function setPage(page) {
		setSelected(page);
	}

	return (
		<nav>
			<ul className="pagination">
				<li className="previous">
					<a href="#!">Forrige</a>
				</li>
				{pager.map(page => (
					<li key={page.id} className={selected === page.id ? 'active' : ''}>
						<a href="#!" onClick={() => setPage(page.id)}>
							{page.id}
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
	selectedPage: 0,
};

Pagination.propTypes = {
	items: PropTypes.number,
	selectedPage: PropTypes.number,
	pageLimit: PropTypes.number,
};

export default Pagination;
