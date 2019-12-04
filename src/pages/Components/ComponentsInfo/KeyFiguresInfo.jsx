import React, { useState } from 'react';
import { Divider, LeadParagraph, KeyFigures, Paragraph, Tabs, Title, Text, Link } from '@statisticsnorway/ssb-component-library';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import KeyFiguresExample from '../../../../public/customIcons/keyFiguresExample.svg';

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

const codeLargeReact = `
<KeyFigures
	number="789 398"
	title="Antall husholdninger"
	numberDescription="husholdninger"
	time="2018"
	size="large"
	icon={<Home size="240" />}
/>
`;

const codeLargeHtml = `
<div class="ssb-key-figures large">
  <div class="kf-icon large"><!-- Insert icon --></div>
  <div>
    <span class="kf-title">Title</span>
    <div class="kf-time">2019</div>
    <div class="number-section">
      <div class="ssb-number large">12 345</div>
      <span class="kf-title subtitle">husholdninger</span>
    </div>
  </div>
</div>
`;

const codeMediumReact = `
<KeyFigures
	number="80.6"
	title="Menn"
	numberDescription="år"
	time="2018"
	size="medium"
	icon={<img alt="IconExample" src={KeyFiguresExample} />}
/>
`;

const codeMediumHtml = `
<div class="ssb-key-figures medium">
  <div class="kf-icon medium"><!-- Insert icon --></div>
  <div>
    <span class="kf-title">Menn</span>
    <div class="kf-time">2018</div>
    <div class="number-section">
      <div class="ssb-number medium">80,6</div>
      <span class="kf-title subtitle">år</span>
    </div>
  </div>
</div>
`;

const codeSmallReact = `
<KeyFigures
	number="80.6"
	title="Menn"
	numberDescription="år"
	time="2018"
	size="small"
	icon={<img alt="IconExample" src={KeyFiguresExample} />}
/>
`;

const codeSmallHtml = `
<div class="ssb-key-figures small">
  <div class="kf-icon small"><!-- Insert icon --></div>
  <div>
    <span class="kf-title">Menn</span>
    <div class="kf-time">2018</div>
    <div class="number-section">
      <div class="ssb-number small">80,6</div>
      <span class="kf-title subtitle">år</span>
    </div>
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
				Nøkkeltall er tall vi ønsker å fremheve (hovedtall). De kommer i tre størrelser – S, M og L, og skaper spenning og dynamikk på siden.
				Når nøkkeltall settes sammen til en gruppe er det viktig å tenke på hva du vil si. Det viktigste kommer øverst – og skal dermed være størst.
				Grupper skal alltid følge rekkefølgen L + M + S, M + S, L + M eller L + S. I grupper hvor alle nøkkeltall har lik størrelse brukes alltid størrelse S.
				De ulike nivåene skilles med lys skillelinje (se definisjon i «Komponenter»).
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-4" />
			{activeTab === '/oversikt' && (
				<div>
					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Large</Title>
						<div className="col-lg-12 mb-4">
							<Paragraph>
								De viktigste tallene settes i denne størrelsen. Det skal aldri være mer enn ett large nøkkeltall i en gruppe.
							</Paragraph>
						</div>
						<div className="col-lg-12 mb-4">
							<KeyFigures
								number="789 398"
								title="Antall husholdninger"
								numberDescription="husholdninger"
								time="2018"
								size="large"
								icon={<img alt="IconExample" src={KeyFiguresExample} />}
							/>
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeLargeReact} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeLargeHtml} language="html" />}
						</div>
					</div>

					<Divider className="mb-4" />

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Medium</Title>
						<div className="col-lg-12 mb-4">
							<Paragraph>
								Medium nøkkeltall skal alltid være en gruppe på to. De to tallene skal alltid stå på høyde med hverandre, ikke under hverandre – bortsett fra i mobilvisning.
							</Paragraph>
						</div>
						<div className="col-lg-6 mb-4">
							<KeyFigures
								number="80,6"
								title="Menn"
								numberDescription="år"
								time="2018"
								size="medium"
								icon={<img alt="IconExample" src={KeyFiguresExample} />}
							/>
						</div>
						<div className="col-lg-6 mb-4">
							<KeyFigures
								number="84,7"
								title="Kvinner"
								numberDescription="år"
								time="2018"
								size="medium"
								icon={<img alt="IconExample" src={KeyFiguresExample} />}
							/>
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeMediumReact} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeMediumHtml} language="html" />}
						</div>
					</div>

					<Divider className="mb-4" />

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Small</Title>
						<div className="col-lg-12 mb-4">
							<Paragraph>
								Små nøkkeltall skal alltid være en gruppe på minimum to. Antallet små nøkkeltall i en gruppe skal alltid følge togangen – 2, 4, 6, osv.
								Det anbefales ikke å bruke grupper på mer enn seks small nøkkeltall.
							</Paragraph>
						</div>
						<div className="col-lg-6 mb-4">
							<KeyFigures
								number="80,6"
								title="Menn"
								numberDescription="år"
								time="2018"
								size="small"
								icon={<img alt="IconExample" src={KeyFiguresExample} />}
							/>
						</div>
						<div className="col-lg-6 mb-4">
							<KeyFigures
								number="80,6"
								title="Menn"
								numberDescription="år"
								time="2018"
								size="small"
								icon={<img alt="IconExample" src={KeyFiguresExample} />}
							/>
						</div>
						<div className="col-lg-6 mb-4">
							<KeyFigures
								number="84,7"
								title="Kvinner"
								numberDescription="år"
								time="2018"
								size="small"
								icon={<img alt="IconExample" src={KeyFiguresExample} />}
							/>
						</div>
						<div className="col-lg-6 mb-4">
							<KeyFigures
								number="84,7"
								title="Kvinner"
								numberDescription="år"
								time="2018"
								size="small"
								icon={<img alt="IconExample" src={KeyFiguresExample} />}
							/>
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeSmallReact} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeSmallHtml} language="html" />}
						</div>
					</div>

				</div>
			)}

			{activeTab === '/begrunnelse' && (
				<div className="row mb-4">
					<Title size={2} className="col-lg-12">Elementstørrelse</Title>
					<div className="col-lg-6">
						<Paragraph>
							Det er bare selve tallet som endrer størrelse i de ulike visningene for nøkkeltall. De andre elementene beholder samme størrelse.
							Dette er gjort slik at det er mulig å skape en klar og konsistent designstruktur.
						</Paragraph>
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

					<Divider className="mb-4" light />

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
