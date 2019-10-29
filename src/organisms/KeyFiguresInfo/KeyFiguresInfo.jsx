import React, { useState } from 'react';
import { Divider, LeadParagraph, KeyFigures, Paragraph, Tabs, Title } from '@statisticsnorway/ssb-component-library';
import CodeSnippet from '@atoms/CodeSnippet/CodeSnippet';
import { Home } from 'react-feather';

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
		title: 'Tilgjengelighet',
		path: '/tilgjengelighet',
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

const AccordionInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => {
		changeTab(e);
	};
	const tabCodeClicked = e => {
		changeCodeTab(e);
	};

	return (
		<div className="col-lg-12">
			<Title size={1}>Nøkkeltall</Title>
			<LeadParagraph>
				{leadParagraphText}
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider />
			{activeTab === '/oversikt' && (
				<div className="mt-3">
					<div className="row mb-3">
						<Title size={3} className="col-lg-12">Nøkkeltall</Title>
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
								icon={<Home size="140" />}
							/>
						</div>
						<div className="col-lg-12">
							<Divider light className="mt-3" />
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider />
							{activeCodeTab === '/react' && (
								<div className="col-lg-12 mt-3">
									<Title size={3}>React code</Title>
									<CodeSnippet code={codeReact} language="jsx" />
								</div>
							)}
							{activeCodeTab === '/html' && (
								<div className="col-lg-12 mt-3">
									<Title size={3}>Html code</Title>
									<CodeSnippet code={codeHtml} language="html" />
								</div>
							)}
						</div>
					</div>
					<div className="row">
						<Title size={3} className="col-lg-12 mt-3">Props</Title>
						<table className="col-lg-12">
							<thead style={{ textAlign: 'left' }}>
								<tr>
									<th><h5>Prop name</h5></th>
									<th><h5>Type</h5></th>
									<th><h5>Description</h5></th>
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
					</div>
				</div>
			)}

			{activeTab === '/begrunnelse' && (
				<div className="mt-3">
					<div className="row mb-3">
						<Title size={3} className="col-lg-12">Elementstørrelse</Title>
						<div className="col-lg-6">
							<Paragraph>{rationaleText}</Paragraph>
						</div>
					</div>

					<div className="row mb-3">
						<Title size={4} className="col-lg-12">Large</Title>
						<Divider light className="mt-1 mb-3" />
						<div className="col-lg-12">
							<KeyFigures
								number="789 398"
								title="Antall husholdninger"
								numberDescription="husholdninger"
								time="2018"
								size="large"
								icon={<Home size="280" />}
							/>
						</div>
					</div>

					<div className="row mb-3">
						<Title size={4} className="col-lg-12">Medium</Title>
						<Divider light className="mb-3" />
						<div className="col-lg-12">
							<KeyFigures
								number="789 398"
								title="Antall husholdninger"
								numberDescription="husholdninger"
								time="2018"
								size="medium"
								icon={<Home size="210" />}
							/>
						</div>
					</div>

					<div className="row mb-3">
						<Title size={4} className="col-lg-12">Small</Title>
						<Divider light className="mb-3" />
						<div className="col-lg-12">
							<KeyFigures
								number="789 398"
								title="Antall husholdninger"
								numberDescription="husholdninger"
								time="2018"
								size="small"
								icon={<Home size="140" />}
							/>
						</div>
					</div>

				</div>
			)}
		</div>
	);
};

export default AccordionInfo;
