import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Breadcrumb, Divider, LeadParagraph, Link, Paragraph, Tabs, Text, Title } from '@statisticsnorway/ssb-component-library';

const tabItems = [
	{
		title: 'Overview',
		path: '/overview',
	}, {
		title: 'Rationale',
		path: '/rationale',
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
<div class="ssb-breadcrumbs ">
	<div>
		<a class="ssb-link" href="">
			<span class="link-text">breadcrumb 1</span>
		</a>
		&nbsp;/&nbsp;
	</div>
	<div>
		<a class="ssb-link" href="">
			<span class="link-text">breadcrumb 2</span>
		</a>
		&nbsp;/&nbsp;
	</div>
	<div class="current-page">breadcrumb 3</div>
</div>
`;

const BreadcrumbInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const tabClicked = e => changeTab(e);
	const [activeCodeTab, changeCodeTab1] = useState(tabCode[0].path);
	const tabCodeClicked = e => changeCodeTab1(e);


	return (
		<div className="row">
			<div className="col-lg-12">
				<Title size={1}>Breadcrumb</Title>
				<LeadParagraph>
					Brødsmuler er en navigasjonshjelp som gir brukeren informasjon om hvor de befinner seg på nettstedet, ved en kombinasjon av lenker som er plassert under toppfeltet på en side.
				</LeadParagraph>

				<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
				<Divider />

				{activeTab === '/overview' && (
					<div className="mt-3">
						<div className="row mb-3">
							<Title size={3} className="col-lg-12">Brødsmuler</Title>
							<div className="col-lg-6">
								<Paragraph>
									Brødsmulene hjelper brukeren å se hvor de befinner seg på nettstedet. Ved å følge lenkene til tidligere sider/nivåer,
									vil brødsmulene fungere som en enkel navigasjon til foregående sider og innhold.
								</Paragraph>
							</div>
							<div className="col-lg-6">
								<Breadcrumb items={mockedItems} />
							</div>
							<div className="col-lg-12">
								<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
								<Divider light />
								{activeCodeTab === '/react' && (
									<CodeSnippet code={codeExample} language="jsx" />
								)}
								{activeCodeTab === '/html' && (
									<CodeSnippet code={codeExampleHtml} language="html" />
								)}
							</div>
						</div>

						<Divider />

						<div>
							<Title size={3} className="mt-3 mb-3">Props</Title>
							<table>
								<thead style={{ textAlign: 'left' }}>
									<tr>
										<th><Title size={5}>Prop name</Title></th>
										<th><Title size={5}>Type</Title></th>
										<th><Title size={5}>Description</Title></th>
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

							<Divider className="mt-3" />

							<div className="mt-3">
								<Text>Depends on</Text>
								<ul>
									<li><Link href="https://github.com/statisticsnorway/ssb-component-library/tree/master/src/components/Link" isExternal>Link</Link></li>
								</ul>
							</div>
						</div>
					</div>
				)}

				{activeTab === '/rationale' && (
					<div className="mt-3">
						<div className="row mb-3">
							<Title size={3} className="col-lg-5">Location based breadcrumbs</Title>
							<div className="col-lg-7">
								<Paragraph>
									We have opted for a location based breadcrumbs as it gives the user a good overview of where in the website
									hierarchy they are currently in, instead of path based breadcrumb which only show the path that the user have browsed.
								</Paragraph>
							</div>
						</div>
						<div className="row mb-3">
							<Title size={3} className="col-lg-5">Simplistic design</Title>
							<div className="col-lg-7">
								<Paragraph>
									As breadcrumbs are a secondary navigation, the overall design of breadcrumbs has been kept at a very simplistic level
									to avoid it being too prominent or confused for being a main navigational element.
								</Paragraph>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default BreadcrumbInfo;
