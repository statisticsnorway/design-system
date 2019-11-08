import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Divider, LeadParagraph, Quote, Tabs, Title } from '@statisticsnorway/ssb-component-library';

const leadParagraphText = `
Coming soon.   
`;

const overviewText = `
Coming soon.
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
<Quote>Default text here</Quote>
<Quote negative>Negative text here</Quote>
`;

const codeHtml = `
<span class="ssb-quote">Default text here</span>
<span class="ssb-quote negative">Negative text here</span>
`;

const QuotesInfo = () => {
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
			<Title size={1}>Quote</Title>
			<LeadParagraph>
				{leadParagraphText}
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider />

			{activeTab === '/oversikt' && (
				<div className="mt-3">
					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Quote</Title>
						<div className="col-lg-6">
							<p>{overviewText}</p>
						</div>
						<div className="col-lg-6 row">
							<div className="col-lg-6">
								<Quote>Default text here</Quote>
							</div>
							<div className="col-lg-6 dark-background">
								<Quote negative>Negative text here</Quote>
							</div>
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeReact} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeHtml} language="html" />}
						</div>
					</div>

					<Divider light className="mb-3" />

					<div className="row col-lg-12 ">
						<Title size={2} className="mt-3">Props</Title>
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
									<td><code>negative</code></td>
									<td>Optional boolean</td>
									<td>Styling for dark theme</td>
								</tr>
							</tbody>
						</table>
					</div>

				</div>
			)}
		</div>
	);
};

export default QuotesInfo;
