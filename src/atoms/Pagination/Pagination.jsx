import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Pagination = ({
	items, selectedPage, pageLimit,
}) => {
	const [selected, setSelected] = useState(selectedPage);
	const itemsArray = Array.from(Array(items).keys());

	function paginationMaps() {
		const itemMap = [];
		itemsArray.forEach(item => itemMap.push({ key: item, value: item + 1 }));

		return itemMap.slice(0, pageLimit);
	}

	const pages = paginationMaps();

	return (
		<nav>
			<ul className="pagination">
				<li className="previous">
					<a href="#!">Forrige</a>
				</li>
				{pages.map(page => (
					<li index={page.key} className={selected === page.key ? 'active' : ''}>
						<a href="#!" onClick={() => setSelected(page.key)}>
							{page.value}
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
	items: PropTypes.number,
	selectedPage: PropTypes.number,
	pageLimit: PropTypes.number,
};

export default Pagination;
