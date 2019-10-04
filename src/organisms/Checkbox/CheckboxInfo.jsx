import React, { useState } from 'react'
import CodeSnippet from '@atoms/CodeSnippet/CodeSnippet';
import Checkbox from '@atoms/Checkbox/Checkbox';
import CheckboxGroup from '@molecules/CheckboxGroup/CheckboxGroup';
import LeadParagraph from '@atoms/LeadParagraph/LeadParagraph';
import Tabs from '@atoms/Tabs/Tabs';
import Divider from '@atoms/Divider/Divider';

const leadParagraphText = `
Check boxes provides the user with a range of options where the user may select any number of choices, one, multiple or zero. The default view for checkboxes has no options selected and the options provided should be listed in alphabetical order. 
`;

const overviewTextCheckbox = `
Check boxes have 3 different states, alternating between unchecked, hover and checked. In the unchecked state the check boxes are neutral with a greyed border. As the user hovers over an unchecked box it transforms into a thicker border and turns green, at the same time a light green stripe will appear over the hovered check box row. When an option is checked by the user, the box will be filled and a check-icon will be displayed. 
`;

const overviewTextCheckboxGroup = `
CheckboxGroup er en samling av Checkboxes.
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

const codeExampleCheckbox = `
<Checkbox
	value="item"
	label="Item"
/>
`;

const codeExampleCheckboxGroup = `
<CheckboxGroup
	header="Header"
	items={items}
/>
`;

const CheckboxInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const tabClicked = e => {
		changeTab(e);
	};

	return (
		<div className="col-lg-12">
			<h1>Checkbox</h1>
			<LeadParagraph>
				{leadParagraphText}
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider />

			{activeTab === '/overview' && (
				<div className="mt-3">
					<div className="row mb-3">
						<h3 className="col-lg-12">Checkbox</h3>
						<div className="col-lg-6">
							<p>{overviewTextCheckbox}</p>
						</div>
						<div className="col-lg-6">
							<Checkbox
								value="item"
								label="Item"
							/>
						</div>
						<div className="col-lg-12  mt-3">
							<CodeSnippet code={codeExampleCheckbox} language="jsx" />
						</div>
					</div>

					<Divider dark />

					<div className="row mt-3">
						<h3 className="col-lg-12">CheckboxGroup</h3>
						<div className="col-lg-6">
							<p>{overviewTextCheckboxGroup}</p>
						</div>
						<div className="col-lg-6">
							<CheckboxGroup
								header="Header"
								items={[
									{ label: 'Checkbox 1', value: 'checkbox1' },
									{ label: 'Checkbox 2', value: 'checkbox2' },
								]}
							/>
						</div>
						<div className="col-lg-12  mt-3">
							<CodeSnippet code={codeExampleCheckboxGroup} language="jsx" />
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
									<td>A list of checkboxes. Object <code>label</code> and <code>value</code> is required</td>
								</tr>
							</tbody>
						</table>
					</div>

				</div>
			)}
		</div>
	);
};

export default CheckboxInfo;
