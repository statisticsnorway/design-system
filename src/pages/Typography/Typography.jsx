import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Divider, LeadParagraph, Paragraph, Tabs, Text, Title } from '@statisticsnorway/ssb-component-library';

const tabItems = [
	{
		title: 'Oversikt',
		path: '/oversikt',
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
<Title size="1">H1 titteleksempel</Title>
<Title size="2">H2 titteleksempel</Title>
<Title size="3">H3 titteleksempel</Title>
<Title size="4">H4 titteleksempel</Title>
`;

const codeExampleHtml = `
<h1 class="ssb-title">H1 titteleksempel</h1>
<h2 class="ssb-title">H2 titteleksempel</h2>
<h3 class="ssb-title">H3 titteleksempel</h3>
<h4 class="ssb-title">H4 titteleksempel</h4>
`;

const codeTextReact = `
<Text>Default text here</Text>
<Text negative>Negative text here</Text>
`;

const codeSmallTextReact = `
<Text small>Small text here</Text>
<Text negative small>Negative small text here</Text>
`;

const codeTextHtml = `
<span class="ssb-text-wrapper">Default text here</span>
<span class="ssb-text-wrapper small-text">Small text here</span>
<span class="ssb-text-wrapper negative">Negative text here</span>
`;

const codeSmallTextHtml = `
<span class="ssb-text-wrapper small-text">Small text here</span>
<span class="ssb-text-wrapper negative small-text">Negative small text here</span>
`;

const codeParagraphReact = `
<Paragraph>This is paragraph</Paragraph>
<Paragraph negative>Negative text here</Paragraph>
`;

const codeParagraphHtml = `
<p class="ssb-paragraph">Default text here</p>
<p class="ssb-paragraph negative">Negative text here</p>
`;

const codeLeadParagraphReact = `
<LeadParagraph>Default text here</LeadParagraph>
<LeadParagraph negative>Negative text here</LeadParagraph>
`;

const codeLeadParagraphHtml = `
<p class="ssb-lead-paragraph">Default text here</p>
<p class="ssb-lead-paragraph negative">Negative text here</p>
`;

const TypographyPage = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Typography</Title>
			<LeadParagraph>
				Typografien er en kjernekomponent i designsystemet, ettersom den bidrar til stil og tone på nettstedet og bidrar til å bygge profil.
				SSB sitt designsystem bruker skrifttypene Roboto, Roboto condensed og Opens Sans. Disse skrifttypene har en lett avrundet form,
				og gir et åpent og vennlig uttrykk.Roboto brukes for å skille ut interaksjonselementer fra vanlig tekst.
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-4" />

			{activeTab === '/oversikt' && (
				<div>
					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Headings - Overskrifter</Title>
						<div className="col-lg-6">
							<Paragraph>
								H1 brukes på den første tittelen – ofte hovedtittel på en side. En side skal aldri ha mer enn én H1.
								H2 brukes i mellomtitler, mens H3 er underordnet denne igjen. H4 har samme størrelse som løpende tekst.
								Alle titler finnes også som hvit for plassering mot mørk bakgrunn.
							</Paragraph>
						</div>
						<div className="component-example col-lg-6 divider-left d-flex flex-column flex-wrap mb-4">
							<Title size={1}>H1 titteleksempel</Title>
							<Paragraph>Roboto Condensed Bold, 56px, 80px linjeavstand.<br />Mobil: 44px, 56px linjeavstand.</Paragraph>
							<Title size={2}>H2 titteleksempel</Title>
							<Paragraph>Roboto Condensed Bold, 28px, 40px linjeavstand.<br />Mobil: 28px, 36px linjeavstand.</Paragraph>
							<Title size={3}>H3 titteleksempel</Title>
							<Paragraph>Roboto Bold, 20px, 32px linjeavstand.<br />Mobil: Ingen endring.</Paragraph>
							<Title size={4}>H4 titteleksempel</Title>
							<Paragraph>Roboto Bold, 16px, 28px linjeavstand.<br />Mobil: Ingen endring.</Paragraph>
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeExample} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeExampleHtml} language="html" />}
						</div>
					</div>

					<Divider className="col-lg-12 mb-4" />

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Lead Paragraph - Ingress</Title>
						<div className="col-lg-6">
							<Paragraph>
								Ingress brukes ofte mellom heading og paragraph som et kortfattet resumeé over innholdet.
								Ingress settes i Open Sans Regular 20px, 32px linjeavstand på desktop. (Samme størrelse på mobil og desktop).
								Ingress har også en hvit versjon.
							</Paragraph>
						</div>
						<div className="component-example col-lg-6 divider-left d-flex flex-column align-items-center mb-4">
							<div className="d-flex flex-wrap">
								<LeadParagraph>
									Ingress ser ut som dette. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
								</LeadParagraph>
							</div>
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeLeadParagraphReact} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeLeadParagraphHtml} language="html" />}
						</div>
					</div>

					<Divider className="mb-4" />

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Paragraf - Brødtekst</Title>
						<div className="col-lg-6">
							<Paragraph>
								Brødtekst settes i Open Sans Regular 16px, 28px linjeavstand på desktop. (Samme størrelse på mobil og desktop). Brødtekst har også en hvit versjon.
							</Paragraph>
						</div>
						<div className="component-example col-lg-6 divider-left d-flex flex-column align-items-center mb-4">
							<div className="d-flex flex-wrap">
								<Paragraph>
									Brødtekst ser ut som dette. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam.
								</Paragraph>
							</div>
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && (
								<CodeSnippet code={codeParagraphReact} language="jsx" />
							)}
							{activeCodeTab === '/html' && (
								<CodeSnippet code={codeParagraphHtml} language="html" />
							)}
						</div>
					</div>

					<Divider className="mb-4" />

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Small Text - Mikrotekst</Title>
						<div className="col-lg-6">
							<Paragraph>
								Størrelsen benyttes kun i ekstra-tekst, som f.eks. ordforklaring og labels til input-felt. Desktop: Open Sans Regular 14px, 24px linjeavstand.
								(Samme størrelse på mobil og desktop). Liten tekst har også en hvit versjon.
							</Paragraph>
						</div>
						<div className="component-example col-lg-6 divider-left d-flex flex-column align-items-center mb-4">
							<div className="d-flex flex-wrap">
								<Text small>Microtext og labels ser ut som dette. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
							</div>
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeSmallTextReact} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeSmallTextHtml} language="html" />}
						</div>
					</div>

				</div>
			)}

			{activeTab === '/props' && (
				<div>
					<Title size={2}>Title Props</Title>
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
								<td><code>children</code></td>
								<td>Required node</td>
								<td>Content within the wrapper</td>
							</tr>
							<tr>
								<td><code>className</code></td>
								<td>string</td>
								<td>Optional container class</td>
							</tr>
							<tr>
								<td><code>negative</code></td>
								<td>bool</td>
								<td>Toggles text color</td>
							</tr>
							<tr>
								<td><code>size</code></td>
								<td>1, 2, 3, 4, 5 or 6</td>
								<td>Changes header element size</td>
							</tr>
						</tbody>
					</table>

					<Divider light className="mb-4" />

					<Title size={2}>LeadParagraph and Paragraph Props</Title>
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
								<td><code>children</code></td>
								<td>Required node</td>
								<td>Content within the wrapper</td>
							</tr>
							<tr>
								<td><code>className</code></td>
								<td>string</td>
								<td>Optional container class</td>
							</tr>
							<tr>
								<td><code>negative</code></td>
								<td>bool</td>
								<td>Toggles text color</td>
							</tr>
						</tbody>
					</table>

					<Divider light className="mb-4" />

					<Title size={2}>Text Props</Title>
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
								<td><code>children</code></td>
								<td>Required node</td>
								<td>Content within the wrapper</td>
							</tr>
							<tr>
								<td><code>negative</code></td>
								<td>bool</td>
								<td>Toggles text color</td>
							</tr>
							<tr>
								<td><code>small</code></td>
								<td>Optional boolean</td>
								<td>Style text size</td>
							</tr>
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default TypographyPage;
