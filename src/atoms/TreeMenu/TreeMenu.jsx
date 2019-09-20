import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

// TODO: Investigate exactly what kind of links are going into this to make sure we approach it correctly

const TreeMenu = ({
	items,
}) => {
	const [selectedPath, updatePath] = useState('');
	const itemsSection = useRef();
	const [sectionWidth, updateWidth] = useState(0);

	useEffect(() => {
		console.log('Selected path changed: ', selectedPath);
		updateWidth(itemsSection.current.offsetWidth);
	}, [selectedPath]);
	return (
		<div className="tree-menu-wrapper">
			<div ref={itemsSection} className="items-section">
				{items && items.map(item => (
					item.items
						? (
							<div
								key={uuid()}
								className={`tree-node ${item.path === selectedPath && 'selected'}`}
								onClick={() => updatePath(item.path)}
							>{item.label}{item.items && <span>&gt;</span>}
							</div>
						) : (
							<div key={uuid()} className="tree-node">
								{item.label}
							</div>
						)
				))}
			</div>
			{selectedPath && (
				<div className="items-section" style={{ right: `-${sectionWidth}px` }}>
					{items.map(item => (
						item.path === selectedPath && item.items.map(it => (
							<div className="tree-node" onClick={() => updatePath(selectedPath + it.path)}>
								{it.label}{it.items && <span>&gt;</span>}
							</div>
						))
					))}
				</div>
			)}
		</div>
	);
};

TreeMenu.defaultProps = {};

TreeMenu.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object),
};

export default TreeMenu;
