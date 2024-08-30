import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '@statisticsnorway/ssb-component-library';

const ComponentPropsInfo = ({ propsInfo }) => (
	<div className="component-props">
		<Title size={2}>Props</Title>
		<table className="col-lg-12 mb-4">
			<thead style={{ textAlign: 'left' }}>
				<tr>
					<th>
						<Title size={3}>Prop name</Title>
					</th>
					<th>
						<Title size={3}>Type</Title>
					</th>
					<th>
						<Title size={3}>Description</Title>
					</th>
				</tr>
			</thead>
			<tbody>
				{propsInfo.map(item => (
					<tr key={item.name}>
						<td>
							<code>{item.name}</code>
						</td>
						<td>{item.type}</td>
						<td>{item.description}</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
);

const propTypeInfo = PropTypes.arrayOf(
	PropTypes.shape({
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
	}),
);

ComponentPropsInfo.propTypes = {
	propsInfo: propTypeInfo.isRequired,
};

export default ComponentPropsInfo;
