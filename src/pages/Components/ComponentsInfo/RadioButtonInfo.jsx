import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Divider, LeadParagraph, Link, RadioGroup, Paragraph, Tabs, Text, Title } from '@statisticsnorway/ssb-component-library';

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
	onChange={() => callback}
	selectedValue="item1" 
	orientation="column"
	items={[
		{ label: 'Item 1', value: 'item1' },
		{ label: 'Item 2', value: 'item2' },
		{ label: 'Item 3', value: 'item3', disabled: true },
	]}
/>
`;

const codeHtml = `
<div class="ssb-radio-group">
	<div class="radio-group-header">Header</div>
    <!-- Use flex-row If horizontal layout -->
    <div class="boxes flex-column">
        <div class="ssb-radio">
            <input tabindex="0" id="item1" name="Header" type="radio" value="item1" checked="">
            <label class="radio-label" for="item1">Item 1</label>
        </div>
        <div class="ssb-radio">
            <input tabindex="0" id="item2" name="Header" type="radio" value="item2">
            <label class="radio-label" for="item2">Item 2</label>
        </div>
        <div class="ssb-radio">
            <input tabindex="0" id="item3" name="Header" disabled="" type="radio" value="item3">
            <label class="radio-label" for="item3">Item 3</label>
        </div>
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
				Radioknapper lar brukeren velge kun ett av et forhåndsdefinert sett av alternativer.
				Default visning er at ingen valg er markert av knappene.
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />

			<Divider className="mb-4" />

			{activeTab === '/overview' && (
				<div>
					<div className="row mb-4">
						<Title size={2} className="col-lg-12">RadioGroup</Title>
						<div className="col-lg-6">
							<Paragraph>
								Radioknapper har 3 ulike statuser; ikke-valgt, hover (musepeker over den) og valgt. Når knappen ikke er valgt vises den
								nøytralt med en grå sirkel. Når brukeren peker over den med musepekeren, blir sirkelen grønn og tykkere. Samtidig vises
								en grønn bakgrunnsstripe på hele raden for knappen. Når knappen er valgt, blir sirkelen bli fylt med en mindre sirkel i mørk farge.
							</Paragraph>
						</div>
						<div className="component-example col-lg-6 divider-left align-items-center pl-4">
							<div className="component-wrapper">
								<RadioGroup
									header="Header"
									selectedValue="item1"
									items={[
										{ label: 'Item 1', value: 'item1' },
										{ label: 'Item 2', value: 'item2' },
										{ label: 'Item 3', value: 'item3', disabled: true },
									]}
								/>
							</div>
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
					<table className="col-lg-12 mb-4">
						<thead style={{ textAlign: 'left' }}>
							<tr>
								<th><Title size={3}>Prop name</Title></th>
								<th><Title size={3}>Type</Title></th>
								<th><Title size={3}>Description</Title></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><code>className</code></td>
								<td>string</td>
								<td>Optional container class</td>
							</tr>
							<tr>
								<td><code>header</code></td>
								<td>string</td>
								<td>Renders a h6 title</td>
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
								<td><code>orientation</code></td>
								<td>column or row , default column</td>
								<td>Vertical og horizontal layout</td>
							</tr>
							<tr>
								<td><code>selectedValue</code></td>
								<td>string</td>
								<td>Pre selected value</td>
							</tr>
						</tbody>
					</table>

					<Divider className="mb-4" light />

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
