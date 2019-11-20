import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Divider, LeadParagraph, Link, RadioGroup, Tabs, Text, Title } from '@statisticsnorway/ssb-component-library';

const leadParagraphText = `
Radioknapper lar brukeren velge kun ett av et forhåndsdefinert sett av alternativer. 
Default visning er at ingen valg er markert av knappene.
`;
{/*Radio buttons allows the user to select a single selection among a groups of options which includes at least two or more choices. 
In a radio button list the options should always be independent from every other option and by default no radio element should be selected.*/}

const overviewTextRadiobutton = `
Radioknapper har 3 ulike statuser; ikke-valgt, hover (musepeker over den) og valgt. Når knappen ikke er valgt vises den 
nøytralt med en grå sirkel. Når brukeren peker over den med musepekeren, blir sirkelen grønn og tykkere. Samtidig vises 
en grønn bakgrunnsstripe på hele raden for knappen. Når knappen er valgt, blir sirkelen bli fylt med en mindre sirkel i mørk farge. 
`;

{/*Radio buttons have 3 different states, alternating between unchecked, hover and checked. 
In the unchecked state the radio buttons are neutral with a greyed circle. 
As the user hover over an unchecked radio button it transforms into a thicker circle and turns green, 
at the same time a light green stripe will appear over the hovered radio button row. 
When a radio button is selected by the user, a dark circle will fill the selected radio button.*/} 


const tabItems = [
	{
		title: 'Oversikt',
		path: '/overview',
	}, {
		title: 'Begrunnelse',
		path: '/rationale',
	}, {
		title: 'Props',
		path: '/props',
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

const codeReact = `
<RadioGroup
	header="Header"
	items={[
		{ label: 'Item 1', value: 'item1' },
		{ label: 'Item 2', value: 'item2' },
		{ label: 'Item 3', value: 'item3', disabled: true },
	]}
/>
`;

const codeHtml = `
<div class="ssb-radio-group">
    <div class="ssb-title no-margin"><h5>Title</h5></div>
    <div class="ssb-radio">
        <input type="radio" id="option1" value="option1" />
        <label class="radio-label" for="option1">Insert label</label>
    </div>
    <div class="ssb-radio">
        <input type="radio" id="option2" value="option2" />
        <label class="radio-label" for="option2">Insert label</label>
    </div>
</div>
`;

const RadioButtonInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Radio buttons</Title>
			<LeadParagraph>
				{leadParagraphText}
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />

			<Divider className="mb-3" />

			{activeTab === '/overview' && (
				<div>
					<div className="row mb-3">
						<Title size={2} className="col-lg-12">RadioGroup</Title>
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
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeReact} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeHtml} language="html" />}
						</div>
					</div>
				</div>
			)}

			{activeTab === '/props' && (
				<div>
					<Title size={2}>Props</Title>
					<table className="col-lg-12 mb-3">
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
								<td>Renders a h5 title</td>
							</tr>
							<tr>
								<td><code>items</code></td>
								<td>arrayOf(label, value) </td>
								<td>Required items for rendering radio buttons</td>
							</tr>
							<tr>
								<td><code>onChange</code></td>
								<td>func</td>
								<td>Callback function when a value is changed </td>
							</tr>
							<tr>
								<td><code>selectedValue</code></td>
								<td>string</td>
								<td>Pre selected value</td>
							</tr>
						</tbody>
					</table>

					<Divider className="mb-3" light />

					<div>
						<Text>Depends on</Text>
						<ul>
							<li><Link href="https://github.com/statisticsnorway/ssb-component-library/tree/master/src/components/RadioButton" isExternal>RadioButton</Link></li>
							<li><Link href="https://github.com/statisticsnorway/ssb-component-library/tree/master/src/components/Title" isExternal>Title</Link></li>
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

export default RadioButtonInfo;
