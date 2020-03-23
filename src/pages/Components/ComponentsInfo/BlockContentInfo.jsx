import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { BlockContent, Divider, LeadParagraph, Paragraph, Tabs, Title } from '@statisticsnorway/ssb-component-library';

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
<BlockContent pageNumber={1}>
  Insert content here
</BlockContent> 
`;

const codeExampleHtml = `
<div class="ssb-block-content">
  <div class="page-number">1</div>
  Insert content here
</div>
`;

const BlockContentInfo = () => {
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabCodeClicked = e => changeCodeTab(e);
	return (
		<div className="col-lg-12">
			<Title size={1}>Block Content</Title>
			<LeadParagraph>
				BlockContent is a wrapper for wrapping content.
			</LeadParagraph>

			<Divider className="mb-4" />

			<div>
				<div className="row mb-4">
					<Title size={2} className="col-lg-12">BlockContent</Title>
					<div className="col-lg-12">
						<Paragraph>
							The BlockContent components ads a green line on top of the container and a subtle drop shadow.
							It also has an optional rendering of a page number.
						</Paragraph>
					</div>

					<div className="col-lg-12 mb-4">
						<BlockContent pageNumber={1}>
							Insert content here
						</BlockContent>
					</div>

					<div className="col-lg-6">
						<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
						<Divider light />
						{activeCodeTab === '/react' && <CodeSnippet code={codeExample} language="jsx" />}
						{activeCodeTab === '/html' && <CodeSnippet code={codeExampleHtml} language="html" />}
					</div>
				</div>
			</div>
			<Divider light className="mb-4" />

			<div className="row mb-4">
				<div className="col-lg-12">
					<Title size={2} className="mt-4">Props</Title>
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
								<td>Required node</td>
								<td>Content within the wrapper</td>
							</tr>
							<tr>
								<td><code>className</code></td>
								<td>string</td>
								<td>Optional container class</td>
							</tr>
							<tr>
								<td><code>sectionNumber</code></td>
								<td>Optional number or string</td>
								<td>Optional rendering of a page number</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default BlockContentInfo;
