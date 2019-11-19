import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { References, Divider, LeadParagraph, Link, Paragraph, Tabs, Title, Text } from '@statisticsnorway/ssb-component-library';

const leadParagraphText = `
References is used to credit where the data has been collected from. The reference element also provides a convenient way for users to quickly locate relevant data if wanted.
`;

const overviewText = `
The reference element contains a header which allows the user to quickly understand this is a reference element and a text link 
which has the name of the referenced source and upon clicking will lead the user to the referenced link.
`;

const referenceWithAdditionalText = `
References can also have additional body text added in order to explain more regarding the references.  
`;

const tabItems = [
	{
		title: 'Oversikt',
		path: '/oversikt',
	}, {
		title: 'Begrunnelse',
		path: '/begrunnelse',
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

const referenceList = [
	{
		href: ' ',
		label: 'Link 1',
	}, {
		href: ' ',
		label: 'Link 2',
	}, {
		href: ' ',
		label: 'Link 3',
		plainText: 'A paragraph',
	},
];


const codeReact = `
const referenceList = [
  {
    href: ' ',
    label: 'Link 1',
  }, {
    href: ' ',
    label: 'Link 2',
  }, {
    href: ' ',
    label: 'Link 3',
    plainText: 'A paragraph',
  },
];

<References title="Sources" referenceList={referenceList} />
`;

const codeHtml = `
<div class="ssb-references">
    <h5 class="ssb-title no-margin">Sources</h5>
    <div>
        <a class="ssb-link" href=" " target="" rel="">
            <span class="link-text">Link 1</span>
        </a>
    </div>
    <div>
        <a class="ssb-link" href=" " target="" rel="">
            <span class="link-text">Link 2</span>
        </a>
    </div>
    <div>
        <span class="ssb-text-wrapper">A paragraph&nbsp;</span>
        <a class="ssb-link" href=" " target="" rel="">
            <span class="link-text">Link 3</span>
        </a>
    </div>
</div>
`;

const ReferenceInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>References</Title>
			<LeadParagraph>
				{leadParagraphText}
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-3" />

			{activeTab === '/oversikt' && (
				<div>
					<div className="row mb-3">
						<Title size={2} className="col-lg-12">References</Title>
						<div className="col-lg-6">
							<Paragraph>{overviewText}</Paragraph>
							<Paragraph>{referenceWithAdditionalText}</Paragraph>
						</div>
						<div className="col-lg-6">
							<References title="Sources" referenceList={referenceList} />
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeReact} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeHtml} language="html" />}
						</div>
					</div>
				</div>
			)}

			{activeTab === '/props' && (
				<div>
					<Title size={2} className="mb-3">Props</Title>
					<table className="col-lg-12 mb-3">
						<thead style={{ textAlign: 'left' }}>
							<tr>
								<th><Title size={3}>Prop name</Title></th>
								<th><Title size={3}>Type</Title></th>
								<th><Title size={3}>Description</Title></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><code>referenceList</code></td>
								<td>arrayOf( href, label, plainText )</td>
								<td>Required list of objects to render content</td>
							</tr>
							<tr>
								<td><code>title</code></td>
								<td>string</td>
								<td>Header text</td>
							</tr>
						</tbody>
					</table>

					<Divider className="mb-3" light />

					<div>
						<Text>Depends on</Text>
						<ul>
							<li><Link href="https://github.com/statisticsnorway/ssb-component-library/tree/master/src/components/Link" isExternal>Link</Link></li>
							<li><Link href="https://github.com/statisticsnorway/ssb-component-library/tree/master/src/components/Text" isExternal>Text</Link></li>
							<li><Link href="https://github.com/statisticsnorway/ssb-component-library/tree/master/src/components/Title " isExternal>Title </Link></li>
						</ul>
					</div>
				</div>
			)}

		</div>
	);
};

export default ReferenceInfo;
