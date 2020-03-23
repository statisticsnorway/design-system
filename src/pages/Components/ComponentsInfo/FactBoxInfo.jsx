import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { FactBox, Divider, LeadParagraph, Link, Tabs, Text, Title } from '@statisticsnorway/ssb-component-library';

const leadParagraphText = `
Faktabokser fungerer på samme som accordions ved at man kan åpne eller lukke dem for visning av utvalgt innhold. 
Men som navnet tilsier, skal faktabokser brukes bare for å vise relevant informasjon om den merkede teksten, og bare for ett emne om gangen.   
`;

const overviewTextFactbox = `
Faktabokser har to visningsmodus.
Åpen og lukket. Når boksen er lukket skal den ha en informativ tittel som forteller brukeren hva innholdet i den vil være.
Da vil brukeren kunne forvente hva som vises når boksen åpnes.
`;

const rationaleText = `
For at faktaboksene skal skille seg ut fra brødteksten uten å være for dominerende, har den en tynn grønn ramme både for å indikere at den er klikkbar.
Brukeren kan dermed raskt identifisere og skille den ut fra andre visuelle elementer, da ingen andre elementer har samme estetisk utforming.
`;

const tabItems = [
	{
		title: 'Oversikt',
		path: '/oversikt',
	}, {
		title: 'Begrunnelse',
		path: '/begrunnelse',
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
<FactBox
	header="This is a header" 
	text="This is paragraph text which explains the accordion"
/>
`;

const codeHtml = `
<div class="ssb-fact-box">
	<div class="ssb-accordion without-borders">
			<button class="accordion-header closed" onclick="{toggle classname to 'open'}>
					<span class="button-grid">
						<span class="header-text">This is a fact box header</span>
						{20px ChevronDown icon, add class="expand-icon" }
					</span>
			</button>
			<div class="accordion-body closed">
					{insert content}
			</div>
	</div>
</div>
`;

const FactBoxInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Faktabokser</Title>
			<LeadParagraph>
				{leadParagraphText}
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-4" />

			{activeTab === '/oversikt' && (
				<div className="row mb-4">
					<Title size={2} className="col-lg-12">Faktabokser</Title>
					<div className="col-lg-6">
						<p>{overviewTextFactbox}</p>
					</div>
					<div className="component-example col-lg-6 divider-left">
						<FactBox header="This is a header" text="This is paragraph text which explains the accordion" />
					</div>
					<div className="col-lg-12">
						<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
						<Divider light />
						{activeCodeTab === '/react' && <CodeSnippet code={codeReact} language="jsx" />}
						{activeCodeTab === '/html' && <CodeSnippet code={codeHtml} language="html" />}
					</div>
				</div>
			)}

			{activeTab === '/begrunnelse' && (
				<div className="row mb-4">
					<Title size={2} className="col-lg-12">Boksramme</Title>
					<div className="col-lg-6">
						<p>{rationaleText}</p>
					</div>
				</div>
			)}

			{activeTab === '/props' && (
				<div>
					<div className="row col-lg-12 ">
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
									<td>Header text</td>
								</tr>
								<tr>
									<td><code>text</code></td>
									<td>string or element</td>
									<td>Content in fact box</td>
								</tr>
								<tr>
									<td><code>openByDefault</code></td>
									<td>bool</td>
									<td>Open when rendered. Defaults to false</td>
								</tr>
							</tbody>
						</table>
					</div>

					<Divider className="mb-4" light />

					<div>
						<Text>Depends on</Text>
						<ul>
							<li><Link href="https://github.com/statisticsnorway/ssb-component-library/tree/master/src/components/Accordion" isExternal>Accordion</Link></li>
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

export default FactBoxInfo;
