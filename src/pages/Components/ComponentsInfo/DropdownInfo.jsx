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

const tabCode = [
	{
		title: 'React',
		path: '/react',
	}, {
		title: 'Html',
		path: '/html',
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

const codeExampleHtml = `
<div class="ssb-dropdown">
  <label for="input-dropdown">Menu header</label>
  <div class="dropdown-interactive-area">
    <input class="focused" id="input-dropdown" disabled="" placeholder="Select item" value="">
    <div class="dd-icon"><i /></div>
    <div class="list-of-options">
      <div class="option-list-element" value="item1" id="item1">Apples</div>
      <div class="option-list-element selected" value="item2" id="item2">Rainbows</div>
      <div class="option-list-element" value="item3" id="item3">Ocean</div>
    </div>
  </div>
</div>
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
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

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
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeExample} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeExampleHtml} language="html" />}
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
								<tr>
									<td><code>onSelect</code></td>
									<td>func</td>
									<td>Callback function when a title is selected</td>
								</tr>
								<tr>
									<td><code>open</code></td>
									<td>bool</td>
									<td>Selected state of dropdown</td>
								</tr>
								<tr>
									<td><code>placeholder</code></td>
									<td>string</td>
									<td>Placeholder for dropdown</td>
								</tr>
								<tr>
									<td><code>searchable</code></td>
									<td>bool</td>
									<td>If true, dropdown is searchable</td>
								</tr>
								<tr>
									<td><code>selectedItem</code></td>
									<td>object</td>
									<td>Selected element in dropdown</td>
								</tr>
							</tbody>
						</table>
					</div>

				</div>
			)}

			{activeTab === '/rationale' && (
				<div className="mt-3">
					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Green indicator</Title>
						<div className="col-lg-6">
							<Paragraph>
								A 5px green rectangle indicator is added together with the light green hover in order to provide a clear
								indication for users with lower-vision or vision impairment.
							</Paragraph>
						</div>
					</div>

				</div>
			)}
		</div>
	);
};

export default DropdownInfo;
