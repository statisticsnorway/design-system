import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Divider, LeadParagraph, Paragraph, Tabs, Title } from '@statisticsnorway/ssb-component-library';

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
<Tabs
	activeOnInit="category1/"
	items={[
		{ title: 'Category 1', path: 'category1/' },
		{ title: 'Category 2', path: 'category2/' },
		{ title: 'Category 3', path: 'category3/' },
	]}
/>
`;

const codeHtml = `
<div class="ssb-tabs">
    <button class="navigation-item active">
        <span>Category 1</span>
    </button>
    <button class="navigation-item ">
        <span>Category 2</span>
    </button>
    <button class="navigation-item ">
        <span>Category 3</span>
    </button>
</div>
`;

const TabsInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Tabs</Title>
			<LeadParagraph>
				Faner er en navigasjonskomponent som gir brukeren mulighet til å navigere mellom ulikt innhold uten å forlate en side.
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />

			<Divider className="mb-4" />

			{activeTab === '/overview' && (
				<div>
					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Tabs</Title>
						<div className="col-lg-6">
							<Paragraph>
								Fane-tekst må være kort og konsis for at komponenten skal være enkel å navigere i. Kun ett ord – om mulig.
							</Paragraph>
						</div>
						<div className="component-example col-lg-6 divider-left">
							<Tabs
								activeOnInit="category1/"
								items={[
									{ title: 'Category 1', path: 'category1/' },
									{ title: 'Category 2', path: 'category2/' },
									{ title: 'Category 3', path: 'category3/' },
								]}
							/>
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

			{activeTab === '/rationale' && (
				<div className="row mb-4">
					<Title size={2} className="col-lg-12">Underscore</Title>
					<div className="col-lg-6">
						By using an underscore underneath the tabs, it becomes easier for the user to separate between the content.
						Especially using different colors between green and dark and having the underscore pop up during active hover.
					</div>
				</div>
			)}

			{activeTab === '/props' && (
				<div>
					<Title size={2} className="mb-4">Props</Title>
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
								<td><code>activeOnInit</code></td>
								<td>string</td>
								<td>Will set an item to be active on init</td>
							</tr>
							<tr>
								<td><code>className</code></td>
								<td>string</td>
								<td>Optional container class</td>
							</tr>
							<tr>
								<td><code>items</code></td>
								<td>arrayOf(title, path) </td>
								<td>Sets label and path of buttons</td>
							</tr>
							<tr>
								<td><code>onClick</code></td>
								<td>func</td>
								<td>Callback function</td>
							</tr>
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default TabsInfo;
