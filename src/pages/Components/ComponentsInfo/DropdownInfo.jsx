import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Divider, Dropdown, LeadParagraph, Paragraph, Title, Tabs } from '@statisticsnorway/ssb-component-library';

const leadParagraphText = `
The dropdown component is a selection element that pushes a large amount of items into one list that the user can view when selected. 
This helps to free up a lot of space for items that are not necessary to be viewed at all times.  
`;

const overviewText = `
The dropdown component is comprised of a label describing the action of the component and a input form element that allow user to click on, 
when clicked a list of items will be displayed for the user to choose from. 
The selected item is highlighted with a dark green color and the hovered item is highlighted with a light green color.  
`;

const overviewTextPreSelectedValue = `
Preselected Value  
`;

const overviewTextSearchable = `
Dropdown searchable  
`;

const tabItems = [
	{
		title: 'Overview',
		path: '/overview',
	}, {
		title: 'Rationale',
		path: '/rationale',
	}, {
		title: 'Accessibility',
		path: '/accessibility',
	},
];

const items = [
	{
		title: 'Apples',
		id: 'item1',
	}, {
		title: 'Rainbows',
		id: 'item2',
	}, {
		title: 'Ocean',
		id: 'item3',
	}, {
		title: 'Automobiles',
		id: 'item4',
	},
];

const codeExample = `
<Dropdown
	header="Menu header"
	items={items}
/>
`;

const codeExamplePreSelected = `
<Dropdown
	header="Menu header"
	selectedItem={ title: 'Ocean', id: 'item3' }
	items={items}
/>
`;

const codeExampleSearchable = `
<Dropdown 
	header="Menu header" 
	searchable 
	items={items} 
/>
`;

const DropdownInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const tabClicked = e => {
		changeTab(e);
	};
	return (
		<div className="col-lg-12">
			<Title size={1}>Dropdown</Title>
			<LeadParagraph>
				{leadParagraphText}
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider />

			{activeTab === '/overview' && (
				<div className="mt-3">
					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Dropdown</Title>
						<div className="col-lg-6">
							<Paragraph>{overviewText}</Paragraph>
						</div>
						<div className="col-lg-6">
							<Dropdown header="Menu header" items={items} />
						</div>
						<div className="col-lg-12  mt-3">
							<CodeSnippet code={codeExample} language="jsx" />
						</div>
					</div>

					<Divider light className="mb-3" />

					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Dropdown Pre-selected Value</Title>
						<div className="col-lg-6">
							<Paragraph>{overviewTextPreSelectedValue}</Paragraph>
						</div>
						<div className="col-lg-6">
							<Dropdown header="Menu header" selectedItem={{ title: 'Ocean', id: 'item3' }} items={items} />
						</div>
						<div className="col-lg-12  mt-3">
							<CodeSnippet code={codeExamplePreSelected} language="jsx" />
						</div>
					</div>

					<Divider light className="mb-3" />

					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Dropdown searchable</Title>
						<div className="col-lg-6">
							<Paragraph>{overviewTextSearchable}</Paragraph>
						</div>
						<div className="col-lg-6">
							<Dropdown header="Menu header" searchable items={items} />
						</div>
						<div className="col-lg-12  mt-3">
							<CodeSnippet code={codeExampleSearchable} language="jsx" />
						</div>
					</div>

					<Divider light className="mb-3" />

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
									<td><code>header</code></td>
									<td>string</td>
									<td>Header above dropdown</td>
								</tr>
								<tr>
									<td><code>items</code></td>
									<td>array of objects</td>
									<td>Object <code>title</code> and <code>id</code> is required</td>
								</tr>
							</tbody>
						</table>
					</div>

				</div>
			)}
		</div>
	);
};

export default DropdownInfo;
