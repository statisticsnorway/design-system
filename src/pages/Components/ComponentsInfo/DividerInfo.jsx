import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Divider, LeadParagraph, Paragraph, Tabs, Title } from '@statisticsnorway/ssb-component-library';

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

const codeReact = `
<Divider dark />
<Divider light />
`;

const codeHtml = `
<hr class="ssb-divider type-dark" />
<hr class="ssb-divider type-light" />
`;

const DividerInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Divider</Title>
			<LeadParagraph>
				Delestreker brukes for å vise horisontale linjer mellom forskjellig grupperinger av innhold.
				Det brukes oftest på sider som har mye forskjellig innhold, f.eks. forsiden, artikler, statistikker.
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-4" />

			{activeTab === '/oversikt' && (
				<div>
					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Divider</Title>
						<div className="col-lg-6">
							<Paragraph>
								Delestreken er alltid plassert i slutten av en innholdsgruppe og før starten av neste innholdsgruppe.
							</Paragraph>
						</div>
						<div className="component-example col-lg-6 divider-left d-flex flex-column align-items-center">
							<div className="d-flex mb-4 component-wrapper">
								<Divider dark />
							</div>
							<div className="d-flex component-wrapper">
								<Divider light />
							</div>
						</div>
						<div className="col-lg-12 mb-4">
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
					<Title size={2}>Props</Title>
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
								<td><code>className</code></td>
								<td>string</td>
								<td>Optional container class</td>
							</tr>
							<tr>
								<td><code>dark</code></td>
								<td>bool</td>
								<td>Changes color of component. Defaults to true.</td>
							</tr>
							<tr>
								<td><code>light</code></td>
								<td>bool</td>
								<td>Changes color of component. Defaults to false.</td>
							</tr>
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default DividerInfo;
