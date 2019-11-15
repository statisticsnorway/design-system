import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Divider, LeadParagraph, Paragraph, Title, Tabs, WordExplanation } from '@statisticsnorway/ssb-component-library';

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
Explain some <WordExplanation explanation={placeHolder}>word</WordExplanation>.
`;

const codeExampleHtml = `
<div>
  <div class="ssb-we-popup {open or closed}">
    <div class="content-box">
      <span class="info-text">{insert explanation}</span>
      <div class="ssb-we-closing">
        <XCircle size="14" /><span>Lukk</span>
      </div>
    </div>
	</div>
</div>
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

const WordExplanationInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Ordforklaring</Title>
			<LeadParagraph>
				Word explanation are used when there are words that are domain specific and difficult to understand or a word that can
				be provided with additional context in order to be better understood.
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-3" />

			{activeTab === '/overview' && (
				<div className="row mt-3">
					<Title size={2} className="col-lg-12">Ordforklaring</Title>
					<div className="col-lg-6">
						<Paragraph>
							Word explanations are defined by two attributes, first it&apos;s underlined by dotted line to differentiate itself from a regular link component.
							But to add another layer of clarity, it also has a word explanation icon in green at the end of the word.
						</Paragraph>
						<Paragraph>
							On hover, word explanation is marked with a green stripe that marks the whole word and a an additional explanation box is displayed.
							The word explanation box is displayed underneath the word explanation.
						</Paragraph>
					</div>
					<div className="col-lg-6">
						Explain this <WordExplanation explanation={placeHolder}>word</WordExplanation>.
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
				<div className="row mb-3">
					<Title size={2} className="col-lg-12">Animation</Title>
					<div className="col-lg-12">
						<Paragraph>
							The hover animation is a left to right marking animation,
							this in order to emulate reality where a user would mark word with a color marker and at the same time separate it from a link.
						</Paragraph>
					</div>
				</div>
			)}

			{activeTab === '/props' && (
				<div>
					<Title size={2} className="mb-3">Props</Title>
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

export default WordExplanationInfo;
