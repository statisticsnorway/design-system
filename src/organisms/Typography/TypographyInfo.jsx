import React, { useState } from 'react';
import CodeSnippet from '@atoms/CodeSnippet/CodeSnippet';
import { Button, Divider, LeadParagraph, Paragraph, Tabs, Text, Title } from '@statisticsnorway/ssb-component-library'

const leadParagraphText = `
Typografien er en kjernekomponent i designsystemet, ettersom den bidrar til stil og tone på nettstedet og bidrar til å bygge profil. 
SSB sitt designsystem bruker skrifttypene Roboto, Roboto condensed og Opens Sans. 
Disse skrifttypene har en lett avrundet form, og gir et åpent og vennlig uttrykk.Roboto brukes for å skille ut interaksjonselementer fra vanlig tekst.
`;

const overviewTextHeadings = `
Roboto og Roboto Condensed brukes for overskrifter. 
For tekst større enn 24, brukes Roboto Condensed. Overskrifter finnes i 6 forskjellige nivåer, fra størst til minst.
`;
const overviewRegularText = `
Open Sans brukes for andre typer tekst; brødtekst (paragraph), ingress, mikrotekst etc.
`;

const tabItems = [
	{
		title: 'Oversikt',
		path: '/oversikt',
	}, {
		title: 'Begrunnelse',
		path: '/begrunnelse',
	}, {
		title: 'Tilgjengelighet',
		path: '/tilgjengelighet',
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

const codeHeadingReact = `
<Title size="1">Title h1</Title>
<Title size="2">Title h2</Title>
<Title size="3">Title h3</Title>
<Title size="4">Title h4</Title>
<Title size="5">Title h5</Title>
<Title size="6">Title h6</Title>
`;

const codeHeadingHtml = `
<h1 class="ssb-title">Title h1</h1>
<h2 class="ssb-title">Title h2</h2>
<h3 class="ssb-title">Title h3</h3>
<h4 class="ssb-title">Title h4</h4>
<h5 class="ssb-title">Title h5</h5>
<h6 class="ssb-title">Title h6</h6>
`;

const codeTextReact = `
<Text>Default text here</Text>
<Text small>Small text here</Text>
<Text negative>Negative text here</Text>
`;

const codeTextHtml = `
<span class="ssb-text-wrapper">Default text here</span>
<span class="ssb-text-wrapper small-text">Small text here</span>
<span class="ssb-text-wrapper negative">Negative text here</span>
`;

const codeParagraphReact = `
<Paragraph>This is paragraph</Paragraph>
<Paragraph negative>Negative text here</Paragraph>
<LeadParagraph>Default text here</LeadParagraph>
<LeadParagraph negative>Negative text here</LeadParagraph>
`;

const codeParagraphHtml = `
<p class="ssb-paragraph">Default text here</p>
<p class="ssb-paragraph negative">Negative text here</p>
<p class="ssb-lead-paragraph">Default text here</p>
<p class="ssb-lead-paragraph negative">Negative text here</p>
`;

const TypographyInfo = () => {
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
			<Title size={1}>Typografi</Title>
			<LeadParagraph>
				{leadParagraphText}
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider />

			{activeTab === '/oversikt' && (
				<div className="mt-3">
					<div className="row mt-3">
						<Title size={3} className="col-lg-12">Overskrifter</Title>
						<div className="col-lg-6">
							<p>{overviewTextHeadings}</p>
						</div>
						<div className="col-lg-6">
							<Title size={1}>Title h1</Title>
							<Title size={2}>Title h2</Title>
							<Title size={3}>Title h3</Title>
							<Title size={4}>Title h4</Title>
							<Title size={5}>Title h5</Title>
							<Title size={6}>Title h6</Title>
						</div>
						<div className="col-lg-12">
							<div className="col-lg-12 mt-3">
								<Divider light className="mt-3" />
								<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
								<Divider />
							</div>
							{activeCodeTab === '/react' && (
								<div className="col-lg-12 mt-3">
									<Title size={4}>React code</Title>
									<CodeSnippet code={codeHeadingReact} language="jsx" />
								</div>
							)}
							{activeCodeTab === '/html' && (
								<div className="col-lg-12 mt-3">
									<Title size={4}>Html code</Title>
									<CodeSnippet code={codeHeadingHtml} language="html" />
								</div>
							)}
						</div>
						<div className="col-lg-12">
							<Title size={4} className="col-lg-12 mt-3">Props</Title>
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
						</div>
					</div>

					<Divider className="mt-3" />


					<div className="row mt-3">
						<Title size={3} className="col-lg-12">Vanlig tekst</Title>
						<div className="col-lg-6">
							<p>{overviewRegularText}</p>
						</div>
						<div className="col-lg-6">
							<Text>This is default Text<br /></Text>
							<Text small>This is small Text</Text>
						</div>
						<div className="col-lg-12">
							<div className="col-lg-12 mt-3">
								<Divider light className="mt-3" />
								<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
								<Divider />
							</div>
							{activeCodeTab === '/react' && (
								<div className="col-lg-12 mt-3">
									<Title size={4}>React code</Title>
									<CodeSnippet code={codeTextReact} language="jsx" />
								</div>
							)}
							{activeCodeTab === '/html' && (
								<div className="col-lg-12 mt-3">
									<Title size={4}>Html code</Title>
									<CodeSnippet code={codeTextHtml} language="html" />
								</div>
							)}
						</div>
						<div className="col-lg-12">
							<Title size={4} className="col-lg-12 mt-3">Props</Title>
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
										<td>Style textsize</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<Divider className="mt-3" />

					<div className="row mt-3">
						<Title size={3} className="col-lg-12">Paragraf</Title>
						<div className="col-lg-6">
							<Paragraph>This is paragraph</Paragraph>
							<LeadParagraph>This is Leadparagraph</LeadParagraph>
						</div>
						<div className="col-lg-12">
							<div className="col-lg-12 mt-3">
								<Divider light className="mt-3" />
								<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
								<Divider />
							</div>
							{activeCodeTab === '/react' && (
								<div className="col-lg-12 mt-3">
									<Title size={4}>React code</Title>
									<CodeSnippet code={codeParagraphReact} language="jsx" />
								</div>
							)}
							{activeCodeTab === '/html' && (
								<div className="col-lg-12 mt-3">
									<Title size={4}>Html code</Title>
									<CodeSnippet code={codeParagraphHtml} language="html" />
								</div>
							)}
						</div>
						<div className="col-lg-12">
							<Title size={4} className="col-lg-12 mt-3">Props</Title>
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
										<td><code>children</code></td>
										<td>Required node</td>
										<td>Content within the wrapper</td>
									</tr>
									<tr>
										<td><code>negative</code></td>
										<td>bool</td>
										<td>Toggles text color</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

				</div>
			)}
		</div>
	);
};

export default TypographyInfo;
