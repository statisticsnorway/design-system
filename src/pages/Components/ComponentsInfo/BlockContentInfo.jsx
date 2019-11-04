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

			<Divider />

			<div className="mt-3">
				<div className="row mb-3">
					<Title size={3} className="col-lg-12">BlockContent</Title>
					<div className="col-lg-6">
						<Paragraph>
							The BlockContent components ads a green line on top of the container and a subtle drop shadow.
							It also has an optional rendering of a page number.
						</Paragraph>

						<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
						<Divider light />
						{activeCodeTab === '/react' && (
							<CodeSnippet code={codeExample} language="jsx" />
						)}
						{activeCodeTab === '/html' && (
							<CodeSnippet code={codeExampleHtml} language="html" />
						)}
					</div>
					<div className="col-lg-6">
						<BlockContent pageNumber={1}>
							Insert content here
						</BlockContent>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlockContentInfo;
