import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Divider, LeadParagraph, Paragraph, Quote, Tabs, Title } from '@statisticsnorway/ssb-component-library'

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
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Quote</Title>
			<LeadParagraph>
				Vi bruker to ulike stiler for utheving av sitat og fremheving av viktig tekst.
				Et sitat eller en fremheving skal være kort.
				Vurder alltid om fremheving (highlighting) skal brukes i stedet for kursiv – ettersom kursiv kan være vanskelig å lese for en del brukere (UU).
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-4" />

			{activeTab === '/oversikt' && (
				<div className="row mb-4">
					<Title size={2} className="col-lg-12">Quote</Title>
					<div className="col-lg-6">
						<Paragraph>
							Et sitat gjengir ordrett noe som er sagt, eller er et tekstutdrag hentet fra ekstern kilde.
							Sitat løftes ut av brødteksten, settes i større font og med innrykket venstremarg. Husk å bruke riktig tegnsetting ved sitat; «norsk», “english”.
						</Paragraph>
					</div>
					<div className="col-lg-6 divider-left d-flex flex-column align-items-center">
						<div className="d-flex justify-content-center mb-4 flex-wrap component-wrapper">
							<div className="component-wrapper">
								<Quote>
									“The trouble with programmers is that you can never tell what a programmer is doing until it&apos;s too late”
								</Quote>
							</div>
						</div>
						<div className="d-flex justify-content-center flex-wrap negative-wrapper">
							<div className="component-wrapper">
								<Quote negative>
									“The trouble with programmers is that you can never tell what a programmer is doing until it&apos;s too late”
								</Quote>
							</div>
						</div>
					</div>
					<div className="col-lg-12">
						<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
						<Divider light />
						{activeCodeTab === '/react' && <CodeSnippet code={codeReact} language="jsx" />}
						{activeCodeTab === '/html' && <CodeSnippet code={codeHtml} language="html" />}
					</div>
				</div>
			)}

			{activeTab === '/props' && (
				<div>
					<Title size={2} className="mb-4">Props</Title>
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
			)}
		</div>
	);
};

export default QuotesInfo;
