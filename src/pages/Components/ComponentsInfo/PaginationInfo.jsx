import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Divider, LeadParagraph, Pagination, Paragraph, Tabs, Title } from '@statisticsnorway/ssb-component-library';

const tabCode = [
	{
		title: 'React',
		path: '/react',
	}, {
		title: 'Html',
		path: '/html',
	},
];

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
const items = [
  { text: '1', path: '/1' },
  { text: '2', path: '/2' },
  { text: '3', path: '/3' },
  ...
  { text: '20', path: '/20' },
];
<Pagination items={items} selectedPage={items[4]} />
`;

const codeExampleHtml = `
<div class="ssb-pagination">
  <div class="direction-button">
    <i class="chevron-icon">{chevron left icon}</i>Forrige
  </div>
  <div class="nav-button-square selected" onclick="{select this}">1</div>
  <div class="nav-button-square" onclick="{select this}">2</div>
  <div class="nav-button-square" onclick="{select this}">3</div>
  <div class="nav-button-square" onclick="{select this}">4</div>
  <div class="nav-button-square" onclick="{select this}">5</div>
  <div class="nav-button-square" onclick="{select this}">6</div>
  <div class="nav-button-square" onclick="{select this}">7</div>
  <div class="nav-button-square" onclick="{select this}">8</div>
  <div class="dotted-indicator">...</div>
  <div class="nav-button-square" onclick="{select this}">20</div>
  <div class="direction-button">
    Neste<i class="chevron-icon">{chevron right icon}</i>
  </div>
</div>
`;

const PaginationInfo = () => {
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Pagination</Title>
			<LeadParagraph>
				The pagination component provides a styled list of links of links through numbering them starting from 1.
				There are also two buttons allowing user to select previous and next page instead of clicking on the numbers.
			</LeadParagraph>

			<ul className="mb-3 ml-2 col-lg-8">
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
					<Title size={2} className="col-lg-12">Pagination</Title>
					<div className="col-lg-6">
						<Paragraph>
							Pagination is a component that allows the user to view a subset of sorted data in limited amount. With pagination user
							can progress to next page by clicking on the numbers which displays how many more pages there are available.
						</Paragraph>
					</div>
					<div className="col-lg-12 mt-3 mb-3">
						<Pagination items={mockedItems} selectedPage={mockedItems[4]} />
					</div>
					<div className="col-lg-12">
						<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
						<Divider light />
						{activeCodeTab === '/react' && <CodeSnippet code={codeExample} language="jsx" />}
						{activeCodeTab === '/html' && <CodeSnippet code={codeExampleHtml} language="html" />}
					</div>
				</div>
			</div>

			<Divider light className="mb-3 mt-3" />

			<div>
				<Title size={2}>Props</Title>
				<table className="col-lg-12">
					<thead style={{ textAlign: 'left' }}>
						<tr>
							<th><Title size={3}>Prop name</Title></th>
							<th><Title size={3}>Type</Title></th>
							<th><Title size={3}>Description</Title></th>
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
};

export default PaginationInfo;
