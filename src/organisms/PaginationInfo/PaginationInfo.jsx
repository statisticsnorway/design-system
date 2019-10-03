import React from 'react';
import PropTypes from 'prop-types';
import CodeSnippet from '@atoms/CodeSnippet/CodeSnippet';
import Divider from '@atoms/Divider/Divider';
import Pagination from '@atoms/Pagination/Pagination';
import LeadParagraph from '@atoms/LeadParagraph/LeadParagraph';

const mockedItems = [
	{ text: '1', path: '/1' },
	{ text: '2', path: '/2' },
	{ text: '3', path: '/3' },
	{ text: '4', path: '/4' },
	{ text: '5', path: '/5' },
	{ text: '6', path: '/6' },
	{ text: '7', path: '/7' },
	{ text: '8', path: '/8' },
	{ text: '9', path: '/9' },
	{ text: '10', path: '/10' },
	{	text: '11', path: '/11'	},
	{	text: '12', path: '/12'	},
	{	text: '13', path: '/13'	},
	{	text: '14', path: '/14'	},
	{	text: '15', path: '/15'	},
	{	text: '16', path: '/16'	},
	{	text: '17', path: '/17'	},
	{	text: '18', path: '/18'	},
	{	text: '19', path: '/19'	},
	{	text: '20', path: '/20'	},
];

const codeExample = `
<Pagination items={items} selectedPage={items[4]} />
`;

const PaginationInfo = () => (
	<div className="col-lg-12">
		<h1>Pagination</h1>
		<LeadParagraph>
			The pagination component provides a styled list of links of links through numbering them starting from 1.
			There are also two buttons allowing user to select previous and next page instead of clicking on the numbers.
		</LeadParagraph>

		<ul className="mb-3 col-lg-8">
			<li>
				Do not use pagination if you don’t want the user to pause for navigating, as this will hide content available.
			</li>
			<li>
				Use pagination when it is unsuitable to display all content on a single page.
			</li>
		</ul>

		<Divider />

		<div className="mt-3">
			<div className="row mb-3">
				<h3 className="col-lg-12">Pagination</h3>
				<div className="col-lg-6">
					<p>
						Pagination is a component that allows the user to view a subset of sorted data in limited amount. With pagination user
						can progress to next page by clicking on the numbers which displays how many more pages there are available.
					</p>
				</div>
				<div className="col-lg-12 mt-3 mb-3">
					<Pagination items={mockedItems} selectedPage={mockedItems[4]} />
				</div>
				<div className="col-lg-8">
					<CodeSnippet code={codeExample} language="jsx" />
				</div>
			</div>
		</div>

		<Divider />

		<div className="row">
			<h3 className="col-lg-12 mt-3 mb-3">Props</h3>
			<table className="col-lg-12">
				<thead style={{ textAlign: 'left' }}>
					<tr>
						<th><h5>Prop name</h5></th>
						<th><h5>Type</h5></th>
						<th><h5>Description</h5></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>items</code></td>
						<td>array of objects</td>
						<td>Required. Items for text label and path</td>
					</tr>
					<tr>
						<td><code>selectedPage</code></td>
						<td>object</td>
						<td>Optional. Selected item on render</td>
					</tr>
					<tr>
						<td><code>icon</code></td>
						<td>node</td>
						<td>Renders an icon</td>
					</tr>
				</tbody>
			</table>
		</div>

	</div>
);

export default PaginationInfo;
