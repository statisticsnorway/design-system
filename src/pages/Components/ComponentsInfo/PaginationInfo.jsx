import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Divider, LeadParagraph, Pagination, Paragraph, Tabs, Title } from '@statisticsnorway/ssb-component-library';

const tabCode = [
	{
		title: 'React',
		path: '/react',
	}, {
		title: 'Html',
		path: '/html',
	},
];

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
	{ text: '1', path: '/1' },
	{ text: '2', path: '/2' },
	{ text: '3', path: '/3' },
	{ text: '4', path: '/4' },
	{ text: '5', path: '/5' },
	{ text: '6', path: '/6' },
	{ text: '7', path: '/7' },
	{ text: '8', path: '/8' },
	{ text: '9', path: '/9' },
	{ text: '10', path: '/10' },
	{	text: '11', path: '/11'	},
	{	text: '12', path: '/12'	},
	{	text: '13', path: '/13'	},
	{	text: '14', path: '/14'	},
	{	text: '15', path: '/15'	},
	{	text: '16', path: '/16'	},
	{	text: '17', path: '/17'	},
	{	text: '18', path: '/18'	},
	{	text: '19', path: '/19'	},
	{	text: '20', path: '/20'	},
];

const codeExample = `
const items = [
  { text: '1', path: '/1' },
  { text: '2', path: '/2' },
  { text: '3', path: '/3' },
  ...
  { text: '20', path: '/20' },
];
<Pagination items={items} selectedPage={items[4]} labelPrevious="Forrige" labelNext="Neste" />
`;

const codeExampleHtml = `
<nav class="ssb-pagination">
    <button class="direction-button previous">
    	<i class="chevron-icon">{feather.chevronLeft 18px}</i>
    	<span>Forrige</span>
    </button>
    <button class="nav-button-square">1</button>
    <button class="nav-button-square 2">2</button>
    <button class="nav-button-square 3">3</button>
    <button class="nav-button-square 4">4</button>
    <button class="nav-button-square 5 selected">5</button>
    <button class="nav-button-square 6">6</button>
    <button class="nav-button-square 7">7</button>
    <button class="nav-button-square 8">8</button>
    <div class="dotted-indicator">...</div>
    <button class="nav-button-square">20</button>
    <button class="direction-button next">
        <span>Neste</span>
        <i class="chevron-icon">{feather.chevronRight 18px}</i>
    </button>
</nav>
`;

const PaginationInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Pagination</Title>
			<LeadParagraph>
				Paginering gir en ordnet liste med linker i form av nummer som starter med 1. Komponenten består også
				av to knapper som gir brukeren muligheten til å velge forrige eller neste side i stedet for å klikke
				på numrene.
			</LeadParagraph>
			<ul className="mb-4 ml-2 col-lg-8">
				<li>
					Bruk paginering hvis det ikke er hensiktsmessig å vise alt innhold på en enkelt side.
				</li>
				<li>
					Bruk ikke paginering hvis du ikke vil at brukeren skal stoppe opp og navigere,
					siden paginering vil skjule tilgjengelig innhold.
				</li>
			</ul>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-4" />

			{activeTab === '/overview' && (
				<div className="row mt-4">
					<Title size={2} className="col-lg-12">Pagination</Title>
					<div className="col-lg-12">
						<Paragraph>
							Paginering gir brukeren muligheten til å se en begrenset mengde sortert innhold om gangen.
							Brukeren kan fortsette til neste side ved å klikke på numrene - som også viser hvor mange
							flere sider det finnes tilgjengelig.
						</Paragraph>
					</div>
					<div className="component-example col-lg-12">
						<div className="component-wrapper">
							<Pagination items={mockedItems} selectedPage={mockedItems[4]} labelPrevious="Forrige" labelNext="Neste" />
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
								<td><code>className</code></td>
								<td>string</td>
								<td>Optional container class</td>
							</tr>
							<tr>
								<td><code>items</code></td>
								<td>arrayOf(text (string), path (string))</td>
								<td>Required. Items for text label and path</td>
							</tr>
							<tr>
								<td><code>labelNext</code></td>
								<td>string</td>
								<td>Label for direction-button next , default is Next</td>
							</tr>
							<tr>
								<td><code>labelPrevious</code></td>
								<td>string</td>
								<td>Label for direction-button previous, default is Previous</td>
							</tr>
							<tr>
								<td><code>onSelect</code></td>
								<td>func</td>
								<td>Callback function</td>
							</tr>
							<tr>
								<td><code>selectedPage</code></td>
								<td>object</td>
								<td>Optional. Selected item on render</td>
							</tr>
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default PaginationInfo;
