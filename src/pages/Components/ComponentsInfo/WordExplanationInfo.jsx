import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Divider, LeadParagraph, Paragraph, Title, Tabs, WordExplanation } from '@statisticsnorway/ssb-component-library';

const tabItems = [
	{
		title: 'Overview',
		path: '/overview',
	}, {
		title: 'Rationale',
		path: '/rationale',
	}, {
		title: 'Accessibility',
		path: '/accessibility',
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
	const tabClicked = e => {
		changeTab(e);
	};

	const tabCodeClicked = e => {
		changeCodeTab(e);
	};
	return (
		<div className="col-lg-12">
			<Title size={1}>Ordforklaring</Title>
			<LeadParagraph>
				Word explanation are used when there are words that are domain specific and difficult to understand or a word that can
				be provided with additional context in order to be better understood.
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider />

			{activeTab === '/overview' && (
				<div className="mt-3">
					<div className="row mt-3">
						<Title size={3} className="col-lg-12">Ordforklaring</Title>
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
							<Divider light className="mt-3" />
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider />
							{activeCodeTab === '/react' && (
								<div className="mt-3">
									<CodeSnippet code={codeExampleJsx} language="jsx" />
								</div>
							)}
							{activeCodeTab === '/html' && (
								<div className="mt-3">
									<CodeSnippet code={codeExampleHtml} language="html" />
								</div>
							)}
						</div>
					</div>

					<Divider className="mb-3 mt-3" />

					<div>
						<Title size={3} className="mb-3">Props</Title>
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

				</div>
			)}
		</div>
	);
};

export default WordExplanationInfo;
