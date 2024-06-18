import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { References, Divider, LeadParagraph, Link, Paragraph, Tabs, Title, Text } from '@statisticsnorway/ssb-component-library';

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

const codeReferenceSimple = `
<References
	title="Kilde"
	referenceList={[
		{
			href: ' ',
			label: 'reference link',
		},
	]}
/>

<References
	title="Kilde"
	referenceList={[
		{
			href: ' ',
			label: 'reference link',
			plainText: 'Paragraph text.',
		},
	]}
/>
`;

const codeReferenceSimpleHtml = `
<div class="ssb-references">
    <span class="reference-header">Kilde</span>
    <div>
        <a class="ssb-link" href=" " target="" rel="">
            <span class="link-text">reference link</span>
        </a>
    </div>
</div>

<div class="ssb-references">
    <span class="reference-header">Kilde</span>
    <div> <span class="ssb-text-wrapper">Paragraph text.&nbsp;</span>
        <a class="ssb-link" href=" " target="" rel="">
            <span class="link-text">reference link</span>
        </a>
    </div>
</div>
`;

const codeReact = `
<References
	title="Kilde"
	referenceList={[
		{
			href: ' ',
			label: 'reference link',
		},
		{
			href: ' ',
			label: 'reference link',
		},
		{
			href: ' ',
			label: 'reference link',
		},
	]}
/>

<References
	title="Kilde"
	referenceList={[
		{
			plainText: 'Paragraph text.',
		},
		{
			href: ' ',
			label: 'reference link',
		},
		{
			href: ' ',
			label: 'reference link',
		},
		{
			href: ' ',
			label: 'reference link',
		},
	]}
/>

`;

const codeHtml = `
<div class="ssb-references">
    <span class="reference-header">Kilde</span>
    <div>
        <a class="ssb-link" href=" " target="" rel="">
            <span class="link-text">reference link</span>
        </a>
    </div>
    <div>
        <a class="ssb-link" href=" " target="" rel="">
            <span class="link-text">reference link</span>
        </a>
    </div>
    <div>
        <a class="ssb-link" href=" " target="" rel="">
            <span class="link-text">reference link</span>
        </a>
    </div>
</div>

<div class="ssb-references">
    <span class="reference-header">Kilde</span>
    <div>
        <span class="ssb-text-wrapper">Paragraph text.&nbsp;</span>
        <a class="ssb-link" target="" rel="">
            <span class="link-text"></span>
        </a>
    </div>
    <div>
        <a class="ssb-link" href=" " target="" rel="">
            <span class="link-text">reference link</span>
        </a>
    </div>
    <div>
        <a class="ssb-link" href=" " target="" rel="">
            <span class="link-text">reference link</span>
        </a>
    </div>
    <div>
        <a class="ssb-link" href=" " target="" rel="">
            <span class="link-text">reference link</span>
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
			<Title size={1}>Reference</Title>
			<LeadParagraph>
				Kilden viser hvor innholdet er hentet fra.
				Den lar brukeren dykke dypere inn i internt eller eksternt innhold, samt vurdere om innholdet er til å stole på.
				Tydelige og solide kilder er derfor viktig for å bygge tillit hos brukerne våre.
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-4" />

			{activeTab === '/oversikt' && (
				<div>
					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Reference</Title>
						<div className="col-lg col-md-12">
							<Paragraph>
								Kilde-komponenten består av en tittel («Kilde») for å gjøre det enkelt for brukeren å identifisere den, og en lenke.
							</Paragraph>
						</div>
						<div className="component-example col-lg col-md-12 divider-left d-flex flex-column align-items-start">
							<div className="d-flex justify-content-start mb-4 flex-wrap">
								<References
									title="Kilde"
									referenceList={[
										{
											href: ' ',
											label: 'reference link',
										},
									]}
								/>
							</div>
							<div className="d-flex justify-content-start mb-4 flex-wrap">
								<References
									title="Kilde"
									referenceList={[
										{
											href: ' ',
											label: 'reference link',
											plainText: 'Paragraph text.',
										},
									]}
								/>
							</div>
						</div>

						<div className="col-lg-12 mt-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeReferenceSimple} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeReferenceSimpleHtml} language="html" />}
						</div>

					</div>

					<Divider light className="mb-3" />

					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Reference list</Title>
						<div className="col-lg col-md-12">
							<Paragraph>
								Kilde-komponenten består av en tittel («Kilde») for å gjøre det enkelt for brukeren å identifisere den, og en eller flere lenker.
								Der innholdet har flere kilder stiles kildene som lenkeliste.
								Ved behov kan det også skrives en beskrivende tekst til lenken. Denne settes i brødtekst-stil.
							</Paragraph>
						</div>
						<div className="component-example col-lg col-md-12 divider-left d-flex flex-column align-items-start">
							<div className="d-flex justify-content-start mb-4 flex-wrap">
								<References
									title="Kilde"
									referenceList={[
										{
											href: ' ',
											label: 'reference link',
										},
										{
											href: ' ',
											label: 'reference link',
										},
										{
											href: ' ',
											label: 'reference link',
										},
									]}
								/>
							</div>
							<div className="d-flex justify-content-start mb-4 flex-wrap">
								<References
									title="Kilde"
									referenceList={[
										{
											plainText: 'Paragraph text.',
										},
										{
											href: ' ',
											label: 'reference link',
										},
										{
											href: ' ',
											label: 'reference link',
										},
										{
											href: ' ',
											label: 'reference link',
										},
									]}
								/>
							</div>
						</div>

						<div className="col-lg-12 mt-4">
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
								<td><code>className</code></td>
								<td>string</td>
								<td>Optional container class</td>
							</tr>
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

					<Divider className="mb-4" light />

					<div>
						<Text>Depends on</Text>
						<ul>
							<li><Link href="https://github.com/statisticsnorway/ssb-component-library/tree/master/src/components/Link" isExternal>Link</Link></li>
							<li><Link href="https://github.com/statisticsnorway/ssb-component-library/tree/master/src/components/Text" isExternal>Text</Link></li>
						</ul>
					</div>
				</div>
			)}

		</div>
	);
};

export default ReferenceInfo;
