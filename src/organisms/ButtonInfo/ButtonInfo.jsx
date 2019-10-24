import React, { useState } from 'react';
import CodeSnippet from '@atoms/CodeSnippet/CodeSnippet';
import { Button, Divider, LeadParagraph, Link, Paragraph, Tabs, Title } from '@statisticsnorway/ssb-component-library';
import { ChevronDown } from 'react-feather';

const tabItems = [
	{
		title: 'Overview',
		path: '/overview',
	}, {
		title: 'Rationale',
		path: '/rationale',
	}, {
		title: 'Accessibility',
		path: '/accessibility',
	},
];

const codeExamplePrimary = `
// React
<Button primary>Primary</Button>
<Button primary disabled>Primary</Button>

// HTML
<button class="ssb-button primary-btn">Click me</button>
<button class="ssb-button primary-btn" disabled="true">Click me</button>
`;

const codeExampleSecondary = `
// React
<Button>Secondary</Button>
<Button disabled>Secondary</Button>

// HTML
<button class="ssb-button">Click me</button>
<button class="ssb-button" disabled="true">Click me</button>
`;

const codeExampleIcon = `
// React
<Button primary><ChevronDown size="18" />&nbsp;Primary</Button>
<Button><ChevronDown size="18" />&nbsp;Secondary</Button>

// HTML
<button class="ssb-button primary-btn">{insert icon}&nbsp;Click me</button>
<button class="ssb-button">{insert icon}&nbsp;Click me</button>
`;

const codeExampleDisabled = `
// React
<Button primary disabled>Primary</Button>
<Button disabled>Secondary</Button>

// HTML
<button class="ssb-button primary-btn" disabled="true">Click me</button>
<button class="ssb-button" disabled="true">Click me</button>
`;

const ButtonInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const tabClicked = e => {
		changeTab(e);
	};

	return (
		<div className="col-lg-12">
			<Title size={1}>Button</Title>
			<LeadParagraph>
				Knapper brukes for å kommunisere tydelig mulighet for handling. Knapp består av knappetekst, og noen ganger ikon for å tydeliggjøre hva brukeren får utført med knappen. Knappeteksten skal være så kort som mulig, og ikke gå over to linjer.
			</LeadParagraph>

			<ul className="mb-3 col-lg-8">
				<li>
					Primær- og sekundærknapper skal ikke brukes for navigasjon ut til eksterne sider. Bruk da i stedet <Link href="/#/components/links">lenker</Link>.
				</li>
				<li>
					Knapper brukes for å utføre handlinger og ikke for multiple-choice (flere valg). Bruk da i stedet check-bokser og radio-buttons hvis mulig.
				</li>
			</ul>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider />

			{activeTab === '/overview' && (
				<div className="mt-3">
					<div className="row mb-3">
						<Title size={3} className="col-lg-12">Primærknapp</Title>
						<div className="col-lg-6">
							<Paragraph>
								Primærknapp brukes for viktige handlinger for brukeren, en aksjon som er kritisk for brukerens videre fremdrift. Eksempel på en kritisk aksjon er “send inn” på et besetillingsskjema eller “logg inn” på en innloggingstjeneste.
							</Paragraph>
						</div>
						<div className="col-lg-6 d-flex flex-row">
							<Button primary>Primary</Button>
							<Button primary disabled>Primary</Button>
						</div>
						<div className="col-lg-12">
							<CodeSnippet code={codeExamplePrimary} language="jsx" />
						</div>
					</div>

					<div className="row mb-3">
						<Title size={3} className="col-lg-12">Sekundærknapp</Title>
						<div className="col-lg-6">
							<Paragraph>
								Sekundærknapp brukes for handlinger som er viktige, men ikke kritiske, for den videre fremdriften i brukerens oppgaver. Den kan brukes sammen men primærknappen for å skape et hierarki, eller sammen med andre sekundærknapper for å indikere likt hierarki.
							</Paragraph>
						</div>
						<div className="col-lg-6 d-flex flex-row">
							<Button>Secondary</Button>
							<Button disabled>Secondary</Button>
						</div>
						<div className="col-lg-12">
							<CodeSnippet code={codeExampleSecondary} language="jsx" />
						</div>
					</div>

					<div className="row mb-3">
						<Title size={3} className="col-lg-12">Knapp med ikon</Title>
						<div className="col-lg-6">
							<Paragraph>
								Både primær- og sekundærknapp kan ha ikon hvis det er viktig å kommunisere hva knappen gjør, eller for å tydeliggjøre forskjellen mellom knapper.
							</Paragraph>
						</div>
						<div className="col-lg-6 d-flex flex-row">
							<Button primary><ChevronDown size="18" />&nbsp;Primary</Button>
							<Button><ChevronDown size="18" />&nbsp;Secondary</Button>
						</div>
						<div className="col-lg-12">
							<CodeSnippet code={codeExampleIcon} language="jsx" />
						</div>
					</div>

					<div className="row mb-3">
						<Title size={3} className="col-lg-12">Ikke-aktiv knapp</Title>
						<div className="col-lg-6">
							<Paragraph>
								En ikke-aktiv knapp er grået ut og er ikke klikkbar. Den har heller ikke hover animasjon. Dette er for å indikere til brukeren at det ikke er noen funksjonalitet bak knappen.
							</Paragraph>
						</div>
						<div className="col-lg-6 d-flex flex-row">
							<Button primary disabled>Primary</Button>
							<Button disabled>Secondary</Button>
						</div>
						<div className="col-lg-12">
							<CodeSnippet code={codeExampleDisabled} language="jsx" />
						</div>
					</div>

					<Divider />

					<div className="row">
						<Title size={3} className="col-lg-12 mt-3 mb-3">Props</Title>
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

				</div>
			)}

			{activeTab === '/rationale' && (
				<div className="mt-3">
					<div className="row mb-3">
						<div className="col-lg-4">
							<Title size={3}>Avrundede hjørnen</Title>
						</div>
						<div className="col-lg-8">
							<span>
								Bruk av lett avrundede hjørner er for å skape et mer åpent og vennlig uttrykk for ssb.no. Det skaper også en sterkere kontrast til de mer skarpe firkantede komponentene i biblioteket, og gjør at knappene blir egenartet og står mer frem.
							</span>
						</div>
					</div>

					<div className="row mb-3">
						<div className="col-lg-4">
							<Title size={3}>Fylt bakgrunn</Title>
						</div>
						<div className="col-lg-8">
							<span>
								For sekundærknapper er bakgrunnen på knappen alltid fylt. Dette er for å sikre at knappeteksten alltid har god kontrast og synlighet for brukeren. Plassering av sekundærknapper vil dermed bli mer fleksibelt, og de vil alltid tilfredsstille UU-kravene.
							</span>
						</div>
					</div>

					<div className="row mb-3">
						<div className="col-lg-4">
							<Title size={3}>Understrek ved hoved</Title>
						</div>
						<div className="col-lg-8">
							<span>
								Alle knappevarianter har understrek ved hover for å tilfredsstille WCAG 2.0-kravene.
							</span>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ButtonInfo;
