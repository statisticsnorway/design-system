import React, { useState } from 'react';
import CodeSnippet from '@atoms/CodeSnippet/CodeSnippet';
import RadioGroup from '@molecules/RadioGroup/RadioGroup';
import LeadParagraph from '@atoms/LeadParagraph/LeadParagraph';
import Tabs from '@atoms/Tabs/Tabs';
import Divider from '@atoms/Divider/Divider';

const leadParagraphText = `
Norsk teksforklaring kommer her.
Radio buttons allows the user to select a single selection among a groups of options which includes at least two or more choices. 
In a radio button list the options should always be independent from every other option and by default no radio element should be selected.
`;

const overviewTextRadiobutton = `
Radio buttons have 3 different states, alternating between unchecked, hover and checked. 
In the unchecked state the radio buttons are neutral with a greyed circle. 
As the user hover over an unchecked radio button it transforms into a thicker circle and turns green, 
at the same time a light green stripe will appear over the hovered radio button row. 
When a radio button is selected by the user, a dark circle will fill the selected radio button. 
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

const radioItems = [
	{
		label: 'Item 1',
		value: 'item1',
	}, {
		label: 'Item 2',
		value: 'item2',
	}, {
		label: 'Item 3',
		value: 'item3',
	},
];

const codeExampleRadioGroup = `
<RadioGroup
	header="Header"
	items={[
		{ label: 'Item 1', value: 'item1' },
		{ label: 'Item 2', value: 'item2' },
		{ label: 'Item 3', value: 'item3', disabled: true },
	]}
/>
`;

const RadioButtonInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const tabClicked = e => {
		changeTab(e);
	};

	return (
		<div className="col-lg-12">
			<h1>Radio buttons</h1>
			<LeadParagraph>
				{leadParagraphText}
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider />

			{activeTab === '/overview' && (
				<div className="mt-3">
					<div className="row mt-3">
						<h3 className="col-lg-12">RadioGroup</h3>
						<div className="col-lg-6">
							<p>{overviewTextRadiobutton}</p>
						</div>
						<div className="col-lg-6">
							<RadioGroup
								header="Header"
								items={[
									{ label: 'Item 1', value: 'item1' },
									{ label: 'Item 2', value: 'item2' },
									{ label: 'Item 3', value: 'item3', disabled: true },
								]}
							/>
						</div>
						<div className="col-lg-12  mt-3">
							<CodeSnippet code={codeExampleRadioGroup} language="jsx" />
						</div>
					</div>

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
									<td><code>header</code></td>
									<td>string</td>
									<td>Header above checkbox</td>
								</tr>
								<tr>
									<td><code>items</code></td>
									<td>array of objects</td>
									<td>Items for <code>label</code> and <code>value</code></td>
								</tr>
							</tbody>
						</table>
					</div>


				</div>
			)}
		</div>
	);
};

export default RadioButtonInfo;
