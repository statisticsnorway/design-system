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

const codeExample = `
<Accordion header="This is a standard accordion">
	{Insert content here}
</Accordion>
`;

const codeExampleHtml = `
<div class="ssb-accordion">
	<button class="accordion-header closed" aria-expanded="false" onclick="{toggle classname to 'open' and aria-expanded to 'true'} tabindex="0">
		<span class="button-grid">
			<span class="header-text">This is a standard accordion</span>
			{20px ChevronDown icon, add class="expand-icon" }
		</span>
	</button>
	<div class="accordion-body closed">
		{insert content}
	</div>
</div>
`;

const codeExampleSubheader = `
<Accordion header="This is a secondary header" subHeader="Tabell 1" >
	{Insert content here}
</Accordion>
`;

const codeExampleSubheaderHtml = `
<div class="ssb-accordion with-sub-header">
	<button class="accordion-header closed" aria-expanded="false" onclick="{toggle classname to 'open' and aria-expanded to 'true'} tabindex="0">
		<span class="button-grid">
			<span class="sub-header">Tabell 1</span>
			<span class="header-text">This is a table accordion</span>
			{20px ChevronDown icon, add class="expand-icon" }
		</span>
	</button>
	<div class="accordion-body closed">
		{insert content}
	</div>
</div>
`;

const nestedExample = `
<Accordion header="This is a nested accordion">
	{Insert content here}
	<NestedAccordion header="This is a nested accordion">
		{Insert content here}
	</NestedAccordion>
</Accordion>
`;

const nestedExampleHtml = `
<div class="ssb-accordion">
    <button class="accordion-header closed" aria-expanded="false" onclick="{toggle classname to 'open' and aria-expanded to 'true'}" tabindex="0">
        <span class=" button-grid ">
			<span class="header-text">This is a nested accordion</span>
            <!-- If open -->
            {20px chevronUp icon, add class="expand-icon" }
            <!-- If closed -->
            {20px chevronDown icon, add class="expand-icon" }
    	</span>
    </button>
    <div class="accordion-body open ">This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
        <div class="ssb-nested-accordion">
            <button class="nested-accordion-header closed" aria-expanded="false" onclick="{toggle classname to 'open' and aria-expanded to 'true'}">
                <span class=" button-grid ">
                    <!-- If open -->
                    {16px chevronUp icon, add class="expand-icon" }
                    <i class="expand-icon">{feather.chevronUp 16px}</i>
                    <!-- If closed -->
                    {16px chevronDown icon, add class="expand-icon" }
                    <span class="header-text">This is a nested accordion</span>
                </span>
            </button>
            <div class="nested-accordion-body closed">
                {insert content}
            </div>
        </div>
    </div>
</div>
`;

const AccordionInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Accordion</Title>
			<LeadParagraph>
				Accordion sparer plass ved å utvide eller lukke seksjoner med innhold. På en effektiv måte gir de brukeren mulighet til å se innholdet når brukeren selv ønsker.
				De gir god oversikt over innhold i lange lister, kan brukes til å vise lange tabeller eller til ulike seksjoner i filtrering.
				Accordions er godt egnet på mobil hvor de sparer plass. Accordion er derfor som regel lukket som default.
			</LeadParagraph>

			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-4" />
			{activeTab === '/overview' && (
				<div>
					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Standard accordion</Title>
						<div className="col-lg-6">
							<Paragraph>
								Brukes til filtrering, lange lister med flere seksjoner, menyer, tillegg, osv.
							</Paragraph>
						</div>
						<div className="component-example col-lg-6 divider-left align-items-center">
							<Accordion header="This is a standard accordion">{accordionFillerText}</Accordion>
							<Accordion header="This is a standard accordion">{accordionFillerText}</Accordion>
							<Accordion header="This is a standard accordion">{accordionFillerText}</Accordion>
						</div>
						<div className="col-lg-12 mt-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeExample} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeExampleHtml} language="html" />}
						</div>

					</div>

					<Divider light className="mb-4" />

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Nested accordions</Title>
						<div className="col-lg-6">
							<Paragraph>
								Nested accordion brukes når det er behov for flere nivåer på innholdet.
								Versjonen organiserer komplekst innhold og gir det hierarki og struktur. Det gir en bedre brukervennlighet og dermed en bedre brukeropplevelse.
							</Paragraph>
						</div>
						<div className="component-example col-lg-6 divider-left align-items-center">
							<Accordion header="This is a nested accordion" openByDefault>
								<NestedAccordion header="This is a nested accordion" openByDefault>
									{accordionFillerText}
								</NestedAccordion>
								<NestedAccordion header="This is a nested accordion">
									{accordionFillerText}
								</NestedAccordion>
							</Accordion>
						</div>
						<div className="col-lg-12 mt-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={nestedExample} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={nestedExampleHtml} language="html" />}
						</div>
					</div>

					<Divider light className="mb-4" />

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Table accordion</Title>
						<div className="col-lg-6">
							<Paragraph>
								Det er utviklet egen accordion til tabeller. Accordiontekst er tabellens tittel, nummereringen er tabellens plassering på siden.
							</Paragraph>
						</div>
						<div className="component-example col-lg-6 divider-left align-items-center">
							<Accordion subHeader="Tabell 1" header="This is a table accordion">
								{accordionFillerText}
							</Accordion>
							<Accordion subHeader="Tabell 2" header="This is a table accordion">
								{accordionFillerText}
							</Accordion>
							<Accordion subHeader="Tabell 3" header="This is a table accordion">
								{accordionFillerText}
							</Accordion>
						</div>
						<div className="col-lg-12 mt-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeExampleSubheader} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeExampleSubheaderHtml} language="html" />}
						</div>
					</div>

					<Divider light className="mb-4" />
				</div>
			)}

			{activeTab === '/rationale' && (
				<div>
					<div className="row mb-4">
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
								<td><code>id</code></td>
								<td>string</td>
								<td>Optional id</td>
							</tr>
							<tr>
								<td><code>children</code></td>
								<td>node</td>
								<td>Accordion content</td>
							</tr>
							<tr>
								<td><code>className</code></td>
								<td>string</td>
								<td>Optional container class</td>
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
								<td><code>subHeader</code></td>
								<td>string</td>
								<td>Renders the header with the sub header design</td>
							</tr>
							<tr>
								<td><code>withoutBorders</code></td>
								<td>bool</td>
								<td>Default false, Accordion without border on top and bottom if value is true</td>
							</tr>
							<tr>
								<td><code>onToggle</code></td>
								<td>func</td>
								<td>Callback with isOpen boolean that is triggered on open/close</td>
							</tr>
						</tbody>
					</table>

					<Divider className="mb-4" light />

					<div>
						<Text>Depends on</Text>
						<ul>
							<li><Link href="https://github.com/statisticsnorway/ssb-component-library/tree/master/src/components/Title" isExternal>Title</Link></li>
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

export default AccordionInfo;
