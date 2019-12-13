import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Dialog, Divider, LeadParagraph, Link, Paragraph, Tabs, Text, Title } from '@statisticsnorway/ssb-component-library';

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

const codeWarningReact = `
<Dialog type='warning' title="A fitting title">
  Insert content here
</Dialog> 
`;

const codeWarningHtml = `
<div class="ssb-dialog warning">
  <div class="icon-panel">
    <i class="icon">{feather.alertTriangle 40px}</i>
  </div>
  <div class="dialog-content">
    <span class="dialog-title">A fitting title</span>
    <div class="content">
      Insert content here
    </div>
  </div>
</div>
`;

const codeInfoReact = `
<Dialog type='info' title="A fitting title">
  Insert content here
</Dialog> 
`;

const codeInfoHtml = `
<div class="ssb-dialog info">
  <div class="icon-panel">
    <i class="icon">{feather.alertCircle 40px}</i>
  </div>
  <div class="dialog-content">
    <span class="dialog-title">A fitting title</span>
    <div class="content">
      Insert content here
    </div>
  </div>
</div>
`;

const WarningsErrorsInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Warning Alerts</Title>
			<LeadParagraph>
				Varsler er et type banner som brukes for å gjøre brukeren oppmerksom på spesiell informasjon.
				Det kan være enten feilmeldinger eller informasjonvarsler. Feilmeldinger brukes når noe har blitt utført galt.
				Informasjonsvarsler er meldinger med informasjon som kan være bra å vite, men som ikke er kritisk for å komme videre.
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-4" />

			{activeTab === '/oversikt' && (
				<div>
					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Error warning</Title>
						<div className="col-lg-6">
							<Paragraph>
								Feilmeldinger er i rød farge for å indikere at noe har gått galt. De presenteres sammen med et trekantet varselsikon.
							</Paragraph>
						</div>
						<div className="component-example col-lg-6 divider-left d-flex flex-column align-items-center mb-4">
							<Dialog type="warning" title="A fitting title">
								Insert content here
							</Dialog>
						</div>
						<div className="col-lg-12">
							<div className="mt-4">
								<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
								<Divider light />
							</div>
							{activeCodeTab === '/react' && <CodeSnippet code={codeWarningReact} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeWarningHtml} language="html" />}
						</div>
					</div>

					<Divider light className="mb-4" />

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Information warning</Title>
						<div className="col-lg-6">
							<Paragraph>
								Informasjonsvarsler er i blå farge for å skille seg fra de røde feilmeldingene. De presenteres sammen med et sirkelformet informasjonsikon.
							</Paragraph>
						</div>
						<div className="component-example col-lg-6 divider-left d-flex flex-column align-items-center mb-4">
							<Dialog type="info" title="A fitting title">
								Insert content here
							</Dialog>
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeInfoReact} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeInfoHtml} language="html" />}
						</div>
					</div>

				</div>
			)}
			{activeTab === '/begrunnelse' && (
				<div className="row mb-4">
					<Title size={2} className="col-lg-12">Colors</Title>
					<div className="col-lg-6">
						Rød farge på feilmeldinger er valgt fordi rødt gir assosiasjoner til feil. Blå farge er valgt for å skille seg ut fra rødt og grønt.
						Fargene har også blitt testet gjennom fargeblindhetstester slik at de tilfredsstiller forskjell i kontrast
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
								<td><code>children</code></td>
								<td>Required node</td>
								<td>Content within the wrapper</td>
							</tr>
							<tr>
								<td><code>className</code></td>
								<td>String</td>
								<td>Optional container class</td>
							</tr>
							<tr>
								<td><code>title</code></td>
								<td>Required string</td>
								<td>Bold text as a title</td>
							</tr>
							<tr>
								<td><code>type</code></td>
								<td>info or warning</td>
								<td>Changes color and icon</td>
							</tr>
						</tbody>
					</table>

					<Divider className="mb-4" light />

					<div className="mb-4">
						<Text>Depends on</Text>
						<ul>
							<li><Link href="https://github.com/statisticsnorway/ssb-component-library/tree/master/src/components/Paragraph" isExternal>Paragraph</Link></li>
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

export default WarningsErrorsInfo;
