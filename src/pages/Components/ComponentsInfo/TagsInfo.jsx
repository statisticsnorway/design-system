import React, { useState } from 'react';
import { Star } from 'react-feather';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Divider, LeadParagraph, Paragraph, Tabs, Tag, Title } from '@statisticsnorway/ssb-component-library';

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

const codeTag = `
<Tag>Tag with icon</Tag>
`;

const codeTagHtml = `
<button class="ssb-tag">Tag</button>
`;

const codeTagIcon = `
<Tag icon={<Star size={18} />}>Tag with icon</Tag>
`;

const codeTagIconHtml = `
<button class="ssb-tag">
    <div class="st-icon">
        {insert icon here}
    </div>Tag with icon
</button>
`;

const TagsInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Tags</Title>
			<LeadParagraph>
				Tekst kommer
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-4" />

			{activeTab === '/oversikt' && (
				<div>
					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Tags</Title>
						<div className="col-lg-6">
							<Paragraph>
								Tekst kommer
							</Paragraph>
						</div>
						<div className="component-example col-lg-6 divider-left d-flex flex-column align-items-center">
							<Tag>Tag</Tag>
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeTag} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeTagHtml} language="html" />}
						</div>
					</div>

					<Divider light className="mb-3" />

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Tags width icon</Title>
						<div className="col-lg-6">
							<Paragraph>
								Tekst kommer
							</Paragraph>
						</div>
						<div className="component-example col-lg-6 divider-left d-flex flex-column align-items-center">
							<Tag icon={<Star size={18} />}>Tag with icon</Tag>
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeTagIcon} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeTagIconHtml} language="html" />}
						</div>
					</div>

				</div>
			)}
			{activeTab === '/props' && (
				<div>
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
								<td><code>children</code></td>
								<td>Required node</td>
								<td>Tag text or/and icon</td>
							</tr>
							<tr>
								<td><code>className</code></td>
								<td>string</td>
								<td>Optional container class</td>
							</tr>
							<tr>
								<td><code>icon</code></td>
								<td>node</td>
								<td>Renders an icon</td>
							</tr>
							<tr>
								<td><code>onClick</code></td>
								<td>function</td>
								<td>Callback for tag click</td>
							</tr>
						</tbody>
					</table>
				</div>
			)}

		</div>
	);
};

export default TagsInfo;
