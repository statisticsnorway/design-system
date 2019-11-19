import React, { useState } from 'react';
import { Divider, LeadParagraph, KeyFigures, Paragraph, Tabs, Title, Text, Link } from '@statisticsnorway/ssb-component-library';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Home } from 'react-feather';
import KeyFiguresExample from '../../../../public/customIcons/keyFiguresExample.svg';

const leadParagraphText = `
Nøkkeltall er et visuelt element som viser fremhevede hovedtall. Nøkkeltall kan vises i 3 størrelser ut fra hvordan de skal brukes. 
Det store nøkkeltallet vises alene på egen linje, mens medium og lite nøkkeltall kan være plassert i grupper på to og to på samme linje.
`;

const overviewText = `
Nøkkeltall er sammensatt av 5 visuelle elementer; en tittel som beskriver tallet, tidspunkt tallet gjelder for (telletidspunkt eller tidsperiode), 
selve tallet, 
beskrivelse av tallet (benevning), og om nødvendig en tekst som beskriver endring i tallet.
`;

const rationaleText = `
Det er bare selve tallet som endrer størrelse i de ulike visningene for nøkkeltall. De andre elementene beholder samme størrelse. 
Dette er gjort slik at det er mulig å skape en klar og konsistent designstruktur.
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

const codeReact = `
<KeyFigures
	number="789 398"
	title="Antall husholdninger"
	numberDescription="husholdninger"
	time="2018"
	size="small"
	icon={<Home size="240" />}
/>
`;

const codeHtml = `
<div class="ssb-key-figures">
	<div class="kf-icon small"><i /></div>
	<div>
		<h4 class="ssb-title kf-title">Antall husholdninger</h4>
		<div class="kf-time">2018</div>
		<div class="ssb-number small">789 398</div>
		<h4 class="ssb-title kf-title">husholdninger</h4>
	</div>
</div>
`;

const KeyFiguresInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Nøkkeltall</Title>
			<LeadParagraph>
				{leadParagraphText}
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-3" />
			{activeTab === '/oversikt' && (
				<div>
					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Nøkkeltall</Title>
						<div className="col-lg-6">
							<Paragraph>{overviewText}</Paragraph>
						</div>
						<div className="col-lg-6">
							<KeyFigures
								number="789 398"
								title="Antall husholdninger"
								numberDescription="husholdninger"
								time="2018"
								size="small"
								icon={<img alt="IconExample" src={KeyFiguresExample} />}
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

			{activeTab === '/begrunnelse' && (
				<div>
					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Elementstørrelse</Title>
						<div className="col-lg-6">
							<Paragraph>{rationaleText}</Paragraph>
						</div>
					</div>

					<div className="row mb-3">
						<Title size={3} className="col-lg-12">Large</Title>
						<Divider light className="mt-1 mb-3" />
						<div className="col-lg-12">
							<KeyFigures
								number="789 398"
								title="Antall husholdninger"
								numberDescription="husholdninger"
								time="2018"
								size="large"
								icon={<img alt="IconExample" src={KeyFiguresExample} />}
							/>
						</div>
					</div>

					<div className="row mb-3">
						<Title size={3} className="col-lg-12">Medium</Title>
						<Divider light className="mb-3" />
						<div className="col-lg-12">
							<KeyFigures
								number="789 398"
								title="Antall husholdninger"
								numberDescription="husholdninger"
								time="2018"
								size="medium"
								icon={<img alt="IconExample" src={KeyFiguresExample} />}
							/>
						</div>
					</div>

					<div className="row mb-3">
						<Title size={3} className="col-lg-12">Small</Title>
						<Divider light className="mb-3" />
						<div className="col-lg-12">
							<KeyFigures
								number="789 398"
								title="Antall husholdninger"
								numberDescription="husholdninger"
								time="2018"
								size="small"
								icon={<img alt="IconExample" src={KeyFiguresExample} />}
							/>
						</div>
					</div>
				</div>
			)}

			{activeTab === '/props' && (
				<div>
					<Title size={2}>Props</Title>
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
								<td><code>icon</code></td>
								<td>node</td>
								<td>Renders an icon</td>
							</tr>
							<tr>
								<td><code>number</code></td>
								<td>string or number</td>
								<td>Large number to be displayed</td>
							</tr>
							<tr>
								<td><code>numberDescription</code></td>
								<td>string</td>
								<td>Subtitle</td>
							</tr>
							<tr>
								<td><code>size</code></td>
								<td>small, medium or large</td>
								<td>Change size of number and icon</td>
							</tr>
							<tr>
								<td><code>title</code></td>
								<td>string</td>
								<td>Displays title</td>
							</tr>
							<tr>
								<td><code>time</code></td>
								<td>string or number</td>
								<td>Displays time for the number between title and number</td>
							</tr>
						</tbody>
					</table>

					<Divider className="mb-3" light />

					<div>
						<Text>Depends on</Text>
						<ul>
							<li><Link href="https://github.com/statisticsnorway/ssb-component-library/tree/master/src/components/Number" isExternal>Number</Link></li>
							<li><Link href="https://github.com/statisticsnorway/ssb-component-library/tree/master/src/components/Title" isExternal>Title</Link></li>
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

export default KeyFiguresInfo;
