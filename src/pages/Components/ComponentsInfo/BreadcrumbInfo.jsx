import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Breadcrumb, Divider, LeadParagraph, Link, Paragraph, Tabs, Text, Title } from '@statisticsnorway/ssb-component-library';

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

const mockedItems = [
	{
		link: ' ',
		text: 'breadcrumb 1',
	},
	{
		link: ' ',
		text: 'breadcrumb 2',
	},
	{
		text: 'breadcrumb 3',
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
<Breadcrumb items={items} />
`;

const codeExampleHtml = `
<div class="ssb-breadcrumbs">
    <div>
        <a class="ssb-link" href=" ">
            <span class="link-text">breadcrumb 1</span>
        </a>
        &nbsp;/&nbsp;
    </div>
    <div>
        <a class="ssb-link" href=" ">
            <span class="link-text">breadcrumb 2</span>
        </a>&nbsp;/&nbsp;
    </div>
    <span class="current-page">breadcrumb 3</span>
</div>
`;

const BreadcrumbInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const tabClicked = e => changeTab(e);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Breadcrumb</Title>
			<LeadParagraph>
				Brødsmuler er en navigasjonshjelp som gir brukeren informasjon om hvor de befinner seg på nettstedet, ved en kombinasjon av lenker som er plassert under toppfeltet på en side.
			</LeadParagraph>

			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-4" />

			{activeTab === '/overview' && (
				<div className="row mb-4">
					<Title size={2} className="col-lg-12">Brødsmuler</Title>
					<div className="col-lg-6">
						<Paragraph>
							Brødsmulene hjelper brukeren å se hvor de befinner seg på nettstedet. Ved å følge lenkene til tidligere sider/nivåer,
							vil brødsmulene fungere som en enkel navigasjon til foregående sider og innhold.
						</Paragraph>
					</div>
					<div className="col-lg-6 divider-left d-flex flex-column align-items-center mb-4">
						<div className="component-wrapper">
							<Breadcrumb items={mockedItems} />
						</div>
					</div>
					<div className="col-lg-12">
						<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
						<Divider light />
						{activeCodeTab === '/react' && <CodeSnippet code={codeExample} language="jsx" />}
						{activeCodeTab === '/html' && <CodeSnippet code={codeExampleHtml} language="html" />}
					</div>
				</div>
			)}

			{activeTab === '/rationale' && (
				<div className="row mb-4">
					<Title size={3} className="col-lg-12">Location based breadcrumbs</Title>
					<div className="col-lg-6">
						<Paragraph>
							We have opted for a location based breadcrumbs as it gives the user a good overview of where in the website
							hierarchy they are currently in, instead of path based breadcrumb which only show the path that the user have browsed.
						</Paragraph>
					</div>

					<Title size={3} className="col-lg-12">Simplistic design</Title>
					<div className="col-lg-6">
						<Paragraph>
							As breadcrumbs are a secondary navigation, the overall design of breadcrumbs has been kept at a very simplistic level
							to avoid it being too prominent or confused for being a main navigational element.
						</Paragraph>
					</div>
				</div>
			)}

			{activeTab === '/props' && (
				<div>
					<Title size={2} className="mt-4 mb-4">Props</Title>
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
								<td><code>items</code></td>
								<td>Required array of objects</td>
								<td>A list of objects. Object key <code>text</code> is required, <code>link</code> is optional.</td>
							</tr>
						</tbody>
					</table>

					<Divider className="mb-4" light />

					<div>
						<Text>Depends on</Text>
						<ul>
							<li><Link href="https://github.com/statisticsnorway/ssb-component-library/tree/master/src/components/Link" isExternal>Link</Link></li>
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

export default BreadcrumbInfo;
