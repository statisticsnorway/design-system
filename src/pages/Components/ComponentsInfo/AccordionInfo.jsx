import React, { useState } from 'react';
import { Accordion, Divider, LeadParagraph, Link, NestedAccordion, Paragraph, Tabs, Text, Title } from '@statisticsnorway/ssb-component-library';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';

const accordionFillerText = `
This is paragraph text which explains the accordion, the rest of the text is just to fill out space.
`;

const tabItems = [
	{
		title: 'Oversikt',
		path: '/overview',
	}, {
		title: 'Begrunnelse',
		path: '/rationale',
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

const codeExamplePrimary = `
<Accordion primary header="This is a primary header">
	{Insert content here}
</Accordion>
`;

const codeExamplePrimaryHtml = `
<div class="ssb-accordion">
  <div class="accordion-header closed" onclick="{toggle classname to 'open'}">
    {22px filled plus icon}
    <div class="ssb-title header-text no-margin"><h5>This is a primary header</h5></div>
  </div>
  <div class="accordion-body closed">
    {insert content here}
  </div>
</div>
`;

const codeExampleSecondary = `
<Accordion header="This is a secondary header">
	{Insert content here}
</Accordion>
`;

const codeExampleSecondaryHtml = `
<div class="ssb-accordion">
  <div class="accordion-header closed" onclick="{toggle classname to 'open'}">
    {20px unfilled plus icon}
    <div class="ssb-title header-text no-margin"><h5>This is a secondary header</h5></div>
  </div>
  <div class="accordion-body closed">
    {insert content here}
  </div>
</div>
`;

const nestedExample = `
<Accordion header="This is a secondary header">
	{Insert content here}
	<NestedAccordion header="A nested accordion header">
		{Insert content here}
	</NestedAccordion>
</Accordion>
`;

const nestedExampleHtml = `
<div class="ssb-accordion">
  <div class="accordion-header closed" onclick="{toggle classname to 'open'}">
    {22px filled plus icon}
    <div class="ssb-title header-text no-margin"><h5>This is a primary header</h5></div>
  </div>
  <div class="accordion-body closed">
    {insert content here}
    
    <div class="ssb-nested-accordion mt-3">
			<div class="nested-accordion-header closed" onclick="{toggle classname to 'open'}">
				{10px plus sign}
				<span class="header-text">Title</span>
			</div>
			<div class="accordion-body closed">
				{insert content}
			</div>
		</div>
    
  </div>
</div>
`;

const AccordionInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab1, changeCodeTab1] = useState(tabCode[0].path);
	const [activeCodeTab2, changeCodeTab2] = useState(tabCode[0].path);
	const [activeCodeTab3, changeCodeTab3] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCode1Clicked = e => changeCodeTab1(e);
	const tabCode2Clicked = e => changeCodeTab2(e);
	const tabCode3Clicked = e => changeCodeTab3(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Accordion (åpne/lukke-felter)</Title>
			<LeadParagraph>
				Accordions sparer plass ved å utvide eller lukke seksjoner med innhold. De tillater brukeren å vise kun den informasjon hun ønsker.
				Derfor er accordion-komponentene alltid lukket som default.
			</LeadParagraph>
			<Paragraph>
				Accordions må brukes med forsiktighet for primærinnhold på en side, siden det kan være vanskeligere for brukeren å finne den skjulte informasjonen.
				Det kan også skape kognitive problemer siden det kreves at brukeren må klikke hver gang hun vil ekspandere et innhold.
				Brukeren kan risikere å ignorere eller ikke se viktig informasjon. Les evt. mer om dette <Link href="https://www.nngroup.com/articles/accordions-complex-content/">her</Link>.
			</Paragraph>

			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider />
			{activeTab === '/overview' && (
				<div className="mt-3">
					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Primær Accordion</Title>
						<div className="col-lg-6">
							<Paragraph>
								Brukes når innholdet i dem er viktig for å forstå helheten i sidens innhold, og vi ønsker at brukeren skal se det.
							</Paragraph>
						</div>
						<div className="col-lg-6">
							<Accordion primary header="This is a primary header">{accordionFillerText}</Accordion>
						</div>

						<div className="col-lg-12 mt-3">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCode1Clicked} />
							<Divider light />
							{activeCodeTab1 === '/react' && <CodeSnippet code={codeExamplePrimary} language="jsx" />}
							{activeCodeTab1 === '/html' && <CodeSnippet code={codeExamplePrimaryHtml} language="html" />}
						</div>

					</div>

					<Divider light className="mb-3" />

					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Sekundær Accordion</Title>
						<div className="col-lg-6">
							<Paragraph>
								Sekundær accordion brukes når innholdet kun trenger å hentes frem når brukeren trenger det. Dette kan være forfattere, definisjoner, bakgrunn etc.
							</Paragraph>
						</div>
						<div className="col-lg-6">
							<Accordion header="This is a secondary header">{accordionFillerText}</Accordion>
						</div>
						<div className="col-lg-12 mt-3">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCode2Clicked} />
							<Divider light />
							{activeCodeTab2 === '/react' && <CodeSnippet code={codeExampleSecondary} language="jsx" />}
							{activeCodeTab2 === '/html' && <CodeSnippet code={codeExampleSecondaryHtml} language="html" />}
						</div>
					</div>

					<Divider light className="mb-3" />

					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Innflettet Accordion</Title>
						<div className="col-lg-6">
							<Paragraph>
								Innflettet accordion brukes når det er flere nivåer accordions, dvs. en accordion er inne i en annen accordion. Når det er flere nivåer på innholdet i den.
								Dens funksjon er å organisere innholdet og gi struktur og hierarki for en enklere brukeropplevelse.
							</Paragraph>
						</div>
						<div className="col-lg-6">
							<Accordion header="This is a secondary header">
								{accordionFillerText}
								<NestedAccordion header="A nested accordion header">
									{accordionFillerText}
								</NestedAccordion>
							</Accordion>
						</div>
						<div className="col-lg-12 mt-3">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCode3Clicked} />
							<Divider light />
							{activeCodeTab3 === '/react' && <CodeSnippet code={nestedExample} language="jsx" />}
							{activeCodeTab3 === '/html' && <CodeSnippet code={nestedExampleHtml} language="html" />}
						</div>
					</div>

					<Divider light className="mb-3" />

					<div className="row mb-3">
						<div className="col-lg-12">
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
										<td>node</td>
										<td>Accordion content</td>
									</tr>
									<tr>
										<td><code>header</code></td>
										<td>string</td>
										<td>Header text</td>
									</tr>
									<tr>
										<td><code>openByDefault</code></td>
										<td>bool</td>
										<td>Will set the open state on init</td>
									</tr>
									<tr>
										<td><code>primary</code></td>
										<td>bool</td>
										<td>Changes type and design of accordion</td>
									</tr>
									<tr>
										<td><code>subHeader</code></td>
										<td>string</td>
										<td>Renders the header with the sub header design</td>
									</tr>
								</tbody>
							</table>

							<Divider className="mt-3" />

							<div className="mt-3">
								<Text>Depends on</Text>
								<ul>
									<li><Link href="https://github.com/statisticsnorway/ssb-component-library/tree/master/src/components/Title" isExternal>Title</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			)}

			{activeTab === '/rationale' && (
				<div className="mt-3">
					<div className="row mb-3">
						<Title className="col-lg-12" size={2}>Primary and Secondary accordions</Title>
						<div className="col-lg-6">
							<Paragraph>
								The reason we have two variants of accordion is to create a good hierarchy between the content,
								while both primary and secondary accordions provides valuable information,
								primary accordions contains content that are crucial for user to see in order to
								understand the content on the page. Secondary accordions provide content that are important
								but not crucial for the understanding of the page.
							</Paragraph>
						</div>
					</div>

					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Single action accordions</Title>
						<div className="col-lg-6">
							<Paragraph>
								There are other accordion elements on other sites that collapse an open accordion when another is opened.
								This feature is not incorporated into our accordions as this behavior can be unpredictable for the users.
								Our user has full control over what type of content they would like to have remain visible.
							</Paragraph>
						</div>
					</div>

				</div>
			)}
		</div>
	);
};

export default AccordionInfo;
