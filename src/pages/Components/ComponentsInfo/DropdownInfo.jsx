import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Divider, Dropdown, LeadParagraph, Paragraph, Title, Tabs } from '@statisticsnorway/ssb-component-library';

const leadParagraphText = `
Dropdown komponenten samler flere valg i en liste som brukeren kan åpne og se hvis han velger den. Dette frigir mye plass for 
informasjon som ikke er nødvendig å ha fremme hele tiden. Hvis det er færre en 5 valg i listen bør du i stedet prøve å vise 
valgene på en annen måte, f.eks. avhukingsbokser eller radioknapper. Hvis listen blir veldig innholdsrik, sånn som årganger, 
bør du i stedet bruke søk som sorterer resultat etter brukerens input og som raskt kan gi relevante valg.  
`;

const overviewText = `
Dropdown består av en ledetekst som beskriver hva elementet består av og et input-element som brukeren kan klikke på. 
Ved klikk åpnes en liste å velge fra. Valgt innhold blir uthevet med en mørk grønn farge, mens innhold man bare peker på blir 
markert med en lys grønn farge.
`;

const overviewTextPreSelectedValue = `
Preselected Value  
`;

const overviewTextSearchable = `
Dropdown searchable  
`;

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
			<Divider className="mb-4" />

			{activeTab === '/overview' && (
				<div>
					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Dropdown</Title>
						<div className="col-lg-6">
							<Paragraph>{overviewText}</Paragraph>
						</div>
						<div className="component-example col-lg-6 divider-left">
							<Dropdown header="Menu header" items={items} />
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeExample} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeExampleHtml} language="html" />}
						</div>
					</div>

					<Divider light className="mb-4" />

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Dropdown med forhåndsvalgt verdi</Title>
						<div className="col-lg-6">
							<Paragraph>{overviewTextPreSelectedValue}</Paragraph>
						</div>
						<div className="component-example col-lg-6 divider-left">
							<Dropdown header="Menu header" selectedItem={{ title: 'Ocean', id: 'item3' }} items={items} />
						</div>
						<div className="col-lg-12 mt-4">
							<CodeSnippet code={codeExamplePreSelected} language="jsx" />
						</div>
					</div>

					<Divider light className="mb-4" />

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Dropdown med søkemulighet</Title>
						<div className="col-lg-6">
							<Paragraph>{overviewTextSearchable}</Paragraph>
						</div>
						<div className="component-example col-lg-6 divider-left">
							<Dropdown header="Menu header" searchable items={items} />
						</div>
						<div className="col-lg-12 mt-4">
							<CodeSnippet code={codeExampleSearchable} language="jsx" />
						</div>
					</div>

				</div>
			)}

			{activeTab === '/rationale' && (
				<div className="row mb-4">
					<Title size={2} className="col-lg-12">Grønn indikator</Title>
					<div className="col-lg-6">
						<Paragraph>
							En 5px grønn rektangulær indikator vises sammen med den lyse grønne hover-fargen for å
							gi en tydeligere indikasjon på valg for brukere med nedsatt syn.
						</Paragraph>
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
			)}
		</div>
	);
};

export default DropdownInfo;
