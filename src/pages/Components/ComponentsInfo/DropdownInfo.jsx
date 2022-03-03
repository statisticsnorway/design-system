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
Ved klikk åpnes en liste å velge fra. 
Valgt innhold blir uthevet med grønn farge, mens innhold man bare peker på blir markert med en mørk farge.
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
<div id="dropdown" class="ssb-dropdown">
	<span id="dropdown-label">Menu header</span>
	<div class="dropdown-interactive-area">
		<!-- If expanded -->
		<button class="focused opener" id="button_dropdown" tabindex="0" type="button" aria-expanded="true" aria-haspopup="listbox" aria-labelledby="dropdown-label button_dropdown">
			-- Select --
		</button>
		<div class="dd-icon">{24px chevronUp icon}</div>
		<ul id="list_of_options_dropdown" class="list-of-options" role="listbox" aria-labelledby="dropdown-label" tabindex="-1" aria-activedescendant="item1">
			<li class="option-list-element active" id="item1" role="option" aria-selected="true">Apples</li>
			<li class="option-list-element" id="item2" role="option">Rainbows</li>
			<li class="option-list-element" id="item3" role="option">Ocean</li>
			<li class="option-list-element" id="item4" role="option">Automobiles</li>
		</ul>
		<!-- If closed -->
		<button class="opener" id="button_dropdown" tabindex="0" type="button" aria-expanded="false" aria-haspopup="listbox" aria-labelledby="dropdown-label button_dropdown">-- Select --</button>
		<div class="dd-icon">{24px chevronDown icon}</div>
	</div>
</div>
`;

const codeExamplePreSelected = `
<Dropdown
	header="Menu header"
	selectedItem={{ title: 'Ocean', id: 'item3' }}
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
								<td><code>id</code></td>
								<td>string</td>
								<td>Optional id</td>
							</tr>
							<tr>
								<td><code>className</code></td>
								<td>string</td>
								<td>Optional container class</td>
							</tr>
							<tr>
								<td><code>error</code></td>
								<td>bool</td>
								<td>Show error message if true</td>
							</tr>
							<tr>
								<td><code>errorMessage</code></td>
								<td>string</td>
								<td>Renders an error message underneath input field</td>
							</tr>
							<tr>
								<td><code>header</code></td>
								<td>string</td>
								<td>Header above dropdown</td>
							</tr>
							<tr>
								<td><code>icon</code></td>
								<td>object</td>
								<td>Alternative icon</td>
							</tr>
							<tr>
								<td><code>items</code></td>
								<td>array of objects</td>
								<td>Object <code>title</code>, <code>id</code>  and <code>disabled</code></td>
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
							<tr>
								<td><code>tabIndex</code></td>
								<td>string</td>
								<td>Tab index for focus</td>
							</tr>
							<tr>
								<td><code>ariaLabel</code></td>
								<td>string</td>
								<td>Defines a string value that labels input or span to button element, use if not visible header</td>
							</tr>
							<tr>
								<td><code>largeSize</code></td>
								<td>bool</td>
								<td>Change width to 100% and size of font and icon</td>
							</tr>
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default DropdownInfo;
