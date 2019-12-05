import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Divider, LeadParagraph, Glossary, Paragraph, Title, Tabs } from '@statisticsnorway/ssb-component-library';

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

const codeExampleJsx = `
<Glossary explanation={placeHolder}>Explain this</Glossary>
`;

const codeExampleHtml = `
<button class="ssb-glossary"><!-- click to toggle 'open' class -->
  <div class="glossary-text-wrap">Explain this</div>
  <i>{feather.openBook 12px}</i>
  <div class="glossary-animate-background"></div>
  <div class="ssb-glossary-popup {open or closed}">
    <div class="content-box">
      <span class="info-text">{insert explanation}</span>
      <div class="ssb-glossary-closing">
        <i class="icon">{feather.xCircle 14px}</i>
        <span>Lukk</span>
      </div>
    </div>
  </div>
</button>
`;

const placeHolder = `This is the explanation of the word
written in one or more paragraphs depending on the amount of space needed`;

const tabCode = [
	{
		title: 'React',
		path: '/react',
	}, {
		title: 'Html',
		path: '/html',
	},
];

const GlossaryInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Ordforklaring</Title>
			<LeadParagraph>
				Ordforklaring brukes når det ord eller begreper som er vanskelige å forstå, eller ord som kan trenge en ytterligere beskrivelse for å bli forstått i sammenhengen.
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-4" />

			{activeTab === '/overview' && (
				<div className="row mt-4">
					<Title size={2} className="col-lg-12">Ordforklaring</Title>
					<div className="col-lg-6">
						<Paragraph>
							Ordforklaringer markeres med to virkemidler; de skal være understreket med stiplet linje for å skille seg ut fra en vanlig lenke.
							De har også et tilhørende grønt ikon ved slutten av ordet.
						</Paragraph>
						<Paragraph>
							Når musepekeren holdes over en ordforklaringer blir ordet markert med en grønn bakgrunngrunnsfarge.
							Ved klikk på ordforklaringen vises en tekstboks med selve forklaringen.
						</Paragraph>
					</div>
					<div className="col-lg-6">
						Explain this <Glossary explanation={placeHolder}>word</Glossary>.
					</div>
					<div className="col-lg-12">
						<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
						<Divider light />
						{activeCodeTab === '/react' && <CodeSnippet code={codeExampleJsx} language="jsx" />}
						{activeCodeTab === '/html' && <CodeSnippet code={codeExampleHtml} language="html" />}
					</div>
				</div>
			)}

			{activeTab === '/rationale' && (
				<div className="row mb-4">
					<Title size={2} className="col-lg-12">Animation</Title>
					<div className="col-lg-12">
						<Paragraph>
							Hover animiasjonen (når musepeker føres over) er en animert markering fra venstre til høyre.
							Dette er for å etterligne hvordan en bruker ville markert et ord med merkepenn, og samtidig adskille det fra en lenke.
						</Paragraph>
					</div>
				</div>
			)}

			{activeTab === '/props' && (
				<div>
					<Title size={2} className="mb-4">Props</Title>
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
								<td><code>children</code></td>
								<td>node</td>
								<td>Something to wrap the click event around</td>
							</tr>
							<tr>
								<td><code>explanation</code></td>
								<td>required string</td>
								<td>Text to be inside popup</td>
							</tr>
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default GlossaryInfo;
