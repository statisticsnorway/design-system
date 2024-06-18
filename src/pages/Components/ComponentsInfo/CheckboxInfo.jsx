import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { CheckboxGroup, Divider, LeadParagraph, Paragraph, Tabs, Title } from '@statisticsnorway/ssb-component-library';

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

const codeExample = `
<CheckboxGroup
	header="Header"
	onChange={() => callback}
	orientation="column"
	selectedValue="item2"
	items={[
		{ label: 'Checkbox 1', value: 'checkbox1' },
		{ label: 'Checkbox 2', value: 'checkbox2' },
		{ label: 'Checkbox 3', value: 'checkbox3', disabled: true },
	]}
/>
`;

const codeExampleHtml = `
<div class="ssb-checkbox-group">
	<div class="checkbox-group-header">Header</div>
	<!-- Use flex-row If horizontal layout -->
		<div class="boxes flex-column">
        <div class="ssb-checkbox">
            <input tabindex="0" id="item1" type="checkbox" value="item1">
            <label class="checkbox-label" for="item1">Item 1</label>
        </div>
        <div class="ssb-checkbox">
            <input tabindex="0" id="item2" type="checkbox" value="item2">
            <label class="checkbox-label" for="item2">Item 2</label>
        </div>
        <div class="ssb-checkbox">
            <input tabindex="0" disabled="" id="item3" type="checkbox" value="item3">
            <label class="checkbox-label" for="item3">Item 3</label>
        </div>
    </div>
</div>
`;

const CheckboxInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Checkbox</Title>
			<LeadParagraph>
				Avhukingsbokser gir brukeren muligheten til å velge flere valg i et utvalg.
				Default visning for avhukingsbokser er at ingen valg er markert, og de ulike valgene bør stå i alfabetisk rekkefølge.
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-4" />

			{activeTab === '/overview' && (
				<div className="row mb-4">
					<Title size={2} className="col-lg-12">Checkbox Group</Title>
					<div className="col-lg col-md-12">
						<Paragraph>
							Avhukingsbokser har 3 ulike statuser; ikke-avhuket (ikke valgt), hover (musepeker over den)  og avhuket (valgt).
							Som ikke-valgt vil boksen være nøytral med en grå ramme. Når brukeren peker over en boks vil boksens ramme bli tykkere og grønn,
							samtidig som en grønn bakgrunnsstripe vises på hele avhukingsboksens rad. Når en boks er valgt, vil boksen bli fylt og markert
							med et avhukingsikon.
						</Paragraph>
					</div>
					<div className="component-example col-lg col-md-12 divider-left align-items-center">
						<div className="component-wrapper">
							<CheckboxGroup
								header="Header"
								items={[
									{ label: 'Checkbox 1', value: 'checkbox1' },
									{ label: 'Checkbox 2', value: 'checkbox2' },
									{ label: 'Checkbox 3', value: 'checkbox3', disabled: true },
								]}
							/>
						</div>
					</div>
					<div className="col-lg-12">
						<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
						<Divider light />
						{activeCodeTab === '/react' && <CodeSnippet code={codeExample} language="jsx" />}
						{activeCodeTab === '/html' && <CodeSnippet code={codeExampleHtml} language="html" />}
					</div>
				</div>
			)}

			{activeTab === '/props' && (
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
								<td>array of objects</td>
								<td>A list of checkboxes. Object <code>label</code> and <code>value</code> is required</td>
							</tr>
							<tr>
								<td><code>onChange</code></td>
								<td>func</td>
								<td>Callback function when a value is changed</td>
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
				</div>
			)}
		</div>
	);
};

export default CheckboxInfo;
