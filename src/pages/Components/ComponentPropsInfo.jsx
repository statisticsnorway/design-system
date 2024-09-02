import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Title } from '@statisticsnorway/ssb-component-library';

const ComponentPropsInfo = ({ propsInfo }) => (
	<div>
		{propsInfo.map((item, index) => (
			<div className="component-props" key={index}>
				{item.title ? <Title size={2} className="mb-4">Props {item.title}</Title> : <Title size={2} className="mb-4">Props</Title>}
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
					{item.props.map(prop => (
						<tr key={prop.name}>
							<td>
								<code>{prop.name}</code>
							</td>
							<td>{prop.type}</td>
							<td>{prop.description}</td>
						</tr>
					))}
				</table>
				<Divider light className="mb-4" />
			</div>

		))}
	</div>

);

const propInfo = PropTypes.shape({
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
});

ComponentPropsInfo.propTypes = {
	propsInfo: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			props: PropTypes.arrayOf(propInfo),
		}),
	),
};

export default ComponentPropsInfo;
