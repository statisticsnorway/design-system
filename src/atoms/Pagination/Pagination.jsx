import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Pagination = ({
	items, selectedPage, pageLimit,
}) => {
	const [selected, setSelected] = useState(selectedPage);
	const pager = getPager().pageArray;

	function getPager() {
		let startPage = 1;
		let endPage = items;
		const middelPage = Math.ceil(pageLimit / 2);
		if (selected <= middelPage) {
			startPage = 1;
			endPage = pageLimit;
		} else if (selected + middelPage >= items) {
			startPage = items - pageLimit - 1;
			endPage = items;
		} else {
			startPage = selected - middelPage;
			endPage = selected + middelPage - 1;
		}

		const pageArray = [...Array((endPage + 1) - startPage).keys()].map(i => ({ id: (i + startPage), name: (i + startPage) }));

		return {
			pageArray,
		};
	}

	return (
		<nav>
			<ul className="pagination">
				<li className="previous">
					<a href="#!" onClick={() => setSelected(selected - 1)}>Forrige</a>
				</li>
				{pager.map(page => (
					<li key={page.id} className={selected === page.id ? 'active' : ''}>
						<a href="#!" onClick={() => setSelected(page.id)}>
							{page.id}
						</a>
					</li>
				))}
				<li>
					<a className="next" href="#!" onClick={() => setSelected(selected + 1)}>Neste</a>
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
