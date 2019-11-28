import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Button, Divider, LeadParagraph, Link, Paragraph, Tabs, Title } from '@statisticsnorway/ssb-component-library';
import { ChevronDown, Upload } from 'react-feather';

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

const codeExample1 = `
<Button primary>Primary</Button>
<Button primary disabled>Primary</Button>
`;

const codeExample1Html = `
<button class="ssb-button primary-btn">Click me</button>
<button class="ssb-button primary-btn" disabled="true">Click me</button>
`;

const codeExample2 = `
<Button>Secondary</Button>
<Button disabled>Secondary</Button>
`;

const codeExample2Html = `
<button class="ssb-button">Click me</button>
<button class="ssb-button" disabled="true">Click me</button>
`;

const codeExample3 = `
<Button primary><ChevronDown size="18" />&nbsp;Primary</Button>
<Button><ChevronDown size="18" />&nbsp;Secondary</Button>
`;

const codeExample3Html = `
<button class="ssb-button primary-btn">{insert icon}&nbsp;Click me</button>
<button class="ssb-button">{insert icon}&nbsp;Click me</button>
`;

const codeExample4 = `
<Button primary disabled>Primary</Button>
<Button disabled>Secondary</Button>
`;

const codeExample4Html = `
<button class="ssb-button primary-btn" disabled="true">Click me</button>
<button class="ssb-button" disabled="true">Click me</button>
`;

const ButtonInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const tabClicked = e => changeTab(e);
	const [activeCodeTab1, changeCodeTab1] = useState(tabCode[0].path);
	const [activeCodeTab2, changeCodeTab2] = useState(tabCode[0].path);
	const [activeCodeTab3, changeCodeTab3] = useState(tabCode[0].path);
	const [activeCodeTab4, changeCodeTab4] = useState(tabCode[0].path);
	const tabCode1Clicked = e => changeCodeTab1(e);
	const tabCode2Clicked = e => changeCodeTab2(e);
	const tabCode3Clicked = e => changeCodeTab3(e);
	const tabCode4Clicked = e => changeCodeTab4(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Button</Title>
			<LeadParagraph>
				Knapper brukes for å kommunisere tydelig mulighet for handling. Knapp består av knappetekst, og noen ganger ikon for å tydeliggjøre hva brukeren får utført med knappen.
				Knappeteksten skal være så kort som mulig, og ikke gå over to linjer.
			</LeadParagraph>

			<ul className="mb-3 ml-2 col-lg-8">
				<li>
					Primær- og sekundærknapper skal ikke brukes for navigasjon ut til eksterne sider. Bruk da i stedet <Link href="#/components/links">lenker</Link>.
				</li>
				<li>
					Knapper brukes for å utføre handlinger og ikke for multiple-choice (flere valg). Bruk da i stedet check-bokser og radio-buttons hvis mulig.
				</li>
			</ul>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-3" />

			{activeTab === '/overview' && (
				<div>
					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Primærknapp</Title>
						<div className="col-lg-6">
							<Paragraph>
								Primærknapp brukes for viktige handlinger for brukeren, en aksjon som er kritisk for brukerens videre fremdrift.
								Eksempel på en kritisk aksjon er “send inn” på et bestillingsskjema eller “logg inn” på en innloggingstjeneste.
							</Paragraph>
						</div>
						<div className="col-lg-6 divider-left d-flex flex-column align-items-center">
							<div className="d-flex justify-content-center mb-4 flex-wrap component-wrapper">
								<Button primary>Primary</Button>
								<Button primary icon={<Upload size={18} />}>Primary</Button>
							</div>
							<div className="d-flex justify-content-center flex-wrap negative-wrapper">
								<Button negative primary>Primary</Button>
								<Button negative primary icon={<Upload size={18} />}>Primary</Button>
							</div>
						</div>
						<div className="col-lg-12 mt-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCode1Clicked} />
							<Divider light />
							{activeCodeTab1 === '/react' && <CodeSnippet code={codeExample1} language="jsx" />}
							{activeCodeTab1 === '/html' && <CodeSnippet code={codeExample1Html} language="html" />}
						</div>
					</div>

					<Divider light className="mb-3" />

					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Sekundærknapp</Title>
						<div className="col-lg-6">
							<Paragraph>
								Sekundærknapp brukes for handlinger som er viktige, men ikke kritiske, for den videre fremdriften i brukerens oppgaver.
								Den kan brukes sammen men primærknappen for å skape et hierarki, eller sammen med andre sekundærknapper for å indikere likt hierarki.
							</Paragraph>
						</div>
						<div className="col-lg-6 divider-left d-flex flex-column align-items-center">
							<div className="d-flex justify-content-center mb-4 flex-wrap component-wrapper">
								<Button>Secondary</Button>
								<Button icon={<Upload size={18} />}>Secondary</Button>
							</div>
							<div className="d-flex justify-content-center flex-wrap negative-wrapper">
								<Button negative>Secondary</Button>
								<Button negative icon={<Upload size={18} />}>Secondary</Button>
							</div>
						</div>
						<div className="col-lg-12 mt-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCode2Clicked} />
							<Divider light />
							{activeCodeTab2 === '/react' && <CodeSnippet code={codeExample2} language="jsx" />}
							{activeCodeTab2 === '/html' && <CodeSnippet code={codeExample2Html} language="html" />}
						</div>
					</div>

					<Divider light className="mb-3" />

					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Ikke-aktiv knapp</Title>
						<div className="col-lg-6">
							<Paragraph>
								En ikke-aktiv knapp er grået ut og er ikke klikkbar. Den har heller ikke hover animasjon.
								Dette er for å indikere til brukeren at det ikke er noen funksjonalitet bak knappen.
							</Paragraph>
						</div>
						<div className="col-lg-6 divider-left d-flex flex-column align-items-center">
							<div className="d-flex justify-content-center mb-4 flex-wrap component-wrapper">
								<Button primary disabled>Primary</Button>
								<Button disabled>Secondary</Button>
							</div>
							<div className="d-flex justify-content-center flex-wrap negative-wrapper">
								<Button primary disabled negative>Primary</Button>
								<Button disabled negative>Secondary</Button>
							</div>
						</div>
						<div className="col-lg-12 mt-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCode4Clicked} />
							<Divider light />
							{activeCodeTab4 === '/react' && <CodeSnippet code={codeExample4} language="jsx" />}
							{activeCodeTab4 === '/html' && <CodeSnippet code={codeExample4Html} language="html" />}
						</div>
					</div>
				</div>
			)}

			{activeTab === '/rationale' && (
				<div>
					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Avrundede hjørner</Title>
						<Paragraph className="col-lg-6">
							Bruk av lett avrundede hjørner er for å skape et mer åpent og vennlig uttrykk for ssb.no.
							Det skaper også en sterkere kontrast til de mer skarpe firkantede komponentene i biblioteket, og gjør at knappene blir egenartet og står mer frem.
						</Paragraph>
					</div>

					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Fylt bakgrunn</Title>
						<Paragraph className="col-lg-6">
							For sekundærknapper er bakgrunnen på knappen alltid fylt. Dette er for å sikre at knappeteksten alltid har god kontrast og synlighet for brukeren.
							Plassering av sekundærknapper vil dermed bli mer fleksibelt, og de vil alltid tilfredsstille UU-kravene.
						</Paragraph>
					</div>

					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Understrek ved hoved</Title>
						<Paragraph className="col-lg-6">
							Alle knappevarianter har understrek ved hover for å tilfredsstille WCAG 2.0-kravene.
						</Paragraph>
					</div>
				</div>
			)}

			{activeTab === '/props' && (
				<div>
					<Title size={2} className="mt-3 mb-3">Props</Title>

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
								<td>Required node</td>
								<td>Button text or/and icon</td>
							</tr>
							<tr>
								<td><code>disabled</code></td>
								<td>bool</td>
								<td>Decides if the button is disabled</td>
							</tr>
							<tr>
								<td><code>icon</code></td>
								<td>node</td>
								<td>Renders an icon</td>
							</tr>
							<tr>
								<td><code>negative</code></td>
								<td>bool</td>
								<td>Changes design</td>
							</tr>
							<tr>
								<td><code>onClick</code></td>
								<td>function</td>
								<td>Callback for button click</td>
							</tr>
							<tr>
								<td><code>primary</code></td>
								<td>bool</td>
								<td>Changes style to represent a primary button</td>
							</tr>
							<tr>
								<td><code>type</code></td>
								<td>string</td>
								<td>
									Button type. Can be &apos;submit&apos;, &apos;reset&apos;, or &apos;button&apos;.
									Defaults to &apos;button&apos;.
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default ButtonInfo;
