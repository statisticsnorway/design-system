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
    <div class="ssb-accordion">
        <div class="accordion-header closed" onclick="{toggle classname to 'open'}">
            {plus icon}
            <div class="ssb-title header-text no-margin">
                <h5>Title</h5></div>
        </div>
        <div class="accordion-body closed">
            {insert content}
        </div>
    </div>
</div>
`;

const FactBoxInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => {
		changeTab(e);
	};
	const tabCodeClicked = e => {
		changeCodeTab(e);
	};

	return (
		<div className="col-lg-12">
			<Title size={1}>Faktabokser</Title>
			<LeadParagraph>
				{leadParagraphText}
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider />

			{activeTab === '/oversikt' && (
				<div className="mt-3">
					<div className="row mt-3">
						<Title size={3} className="col-lg-12">Faktabokser</Title>
						<div className="col-lg-6">
							<p>{overviewTextFactbox}</p>
						</div>
						<div className="col-lg-6">
							<FactBox header="This is a header" text="This is paragraph text which explains the accordion" />
						</div>
						<div className="col-lg-12">
							<Divider light className="mt-3" />
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider />
							{activeCodeTab === '/react' && (
								<div className="col-lg-12 mt-3">
									<Title size={3}>React code</Title>
									<CodeSnippet code={codeReact} language="jsx" />
								</div>
							)}
							{activeCodeTab === '/html' && (
								<div className="col-lg-12 mt-3">
									<Title size={3}>Html code</Title>
									<CodeSnippet code={codeHtml} language="html" />
								</div>
							)}
						</div>
					</div>

					<Divider className="mt-3" />

					<div className="row col-lg-12 ">
						<Title size={3} className="mt-3">Props</Title>
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

					<Divider className="mt-3" />

					<div className="row col-lg-3 mt-3">
						<Text>Depends on</Text>
						<ul>
							<li><Link href="https://github.com/statisticsnorway/ssb-component-library/tree/master/src/components/Accordion" isExternal>Accordion</Link></li>
						</ul>
					</div>

				</div>
			)}
			{activeTab === '/begrunnelse' && (
				<div className="mt-3">
					<div className="row mb-3">
						<Title size={3} className="col-lg-12">Boksramme</Title>
						<div className="col-lg-6">
							<p>{rationaleText}</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default FactBoxInfo;
