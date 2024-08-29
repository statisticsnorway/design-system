import React, { useState } from 'react';
import { ExpansionBox, Divider, LeadParagraph, Link, Tabs, Title, Paragraph } from '@statisticsnorway/ssb-component-library';
import ComponentExample from '../ComponentExample';

const leadParagraphText = `
ExpansionBox samler innhold i en boks som åpnes og lukkes ved brukerinteraksjon. Komponenten er egnet til å vise en oppsummering av informasjon, 
samle relatert innhold på ett sted og for å spare plass på siden ved å vise informasjon når brukeren ber om det. 
Komponenten er uegnet til store mengder innhold og innhold som bruker må få med seg. 
`;

const overviewTextExpansionBoxStandard = `
ExpansionBox Standard brukes der innholdet i boksen kan beskrives med en kort tittel.
`;

const overviewTextExpansionBoxSneakPeek = `
ExpansionBox SneakPeek brukes der bruker trenger kontekst for å forstå innholdet i boksen.
`;

const overviewTextExpansionBoxAI = `
ExpansionBox AI brukes kun til AI-generert innhold. For eksempel ved å gi bruker tilgang til en kort oppsummering av en artikkel.
Ikonet er konvensjonen for AI og kan ikke fjernes eller byttes ut.
`;

const tabItems = [
	{
		title: 'Oversikt',
		path: '/oversikt',
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

const exampleContentSneakPeek = (
	<div>
		<Paragraph>
			BNP er en økonomisk størrelse som måler summen av alle varer og tjenester produsert i et land i løpet av et år, minus de varene og tjenestene som blir brukt under produksjonen.
		</Paragraph>

		<Title size={3}>Viktige tall</Title>
		<ul>
			<li>I 2023 var Norges BNP på 5 129 milliarder kroner, noe som var en nedgang fra 5 708 milliarder kroner i 2022.</li>
			<li>Volumveksten i BNP fra 2022 til 2023 var positiv, på 0,5 prosent.</li>
			<li>BNP Fastlands-Norge beregnes uten inntekter fra utvinning av olje og gass, rørtransport, og utenriks sjøfart for å gi et mer nøyaktig bilde av økonomien ekskludert oljesektoren.</li>
			<li>BNP per innbygger i Norge var 50 prosent over gjennomsnittet i EU i 2022, noe som plasserer Norge blant verdens rikeste land.</li>
		</ul>
		<Link href="/">Se flere tall fra statistikken Nasjonalregnskap</Link>
	</div>
);

const exampleContentAI = (
	<div>
		<Paragraph>
			BNP er en økonomisk størrelse som måler summen av alle varer og tjenester produsert i et land i løpet av et år, minus de varene og tjenestene som blir brukt under produksjonen.
		</Paragraph>

		<Title size={3}>Viktige tall</Title>
		<ul>
			<li>I 2023 var Norges BNP på 5 129 milliarder kroner, noe som var en nedgang fra 5 708 milliarder kroner i 2022.</li>
			<li>Volumveksten i BNP fra 2022 til 2023 var positiv, på 0,5 prosent.</li>
			<li>BNP Fastlands-Norge beregnes uten inntekter fra utvinning av olje og gass, rørtransport, og utenriks sjøfart for å gi et mer nøyaktig bilde av økonomien ekskludert oljesektoren.</li>
			<li>BNP per innbygger i Norge var 50 prosent over gjennomsnittet i EU i 2022, noe som plasserer Norge blant verdens rikeste land.</li>
		</ul>
		<Link href="/">Se flere tall fra statistikken Nasjonalregnskap</Link>

		<Paragraph className="mt-3">
			Oppsummeringen er laget ved hjelp av en KI-tjeneste fra OpenAi. Innholdet er kvalitetssikret av SSB før publisering.
		</Paragraph>
	</div>
);

const codeDefaultReact = `
<ExpansionBox
	header="Artikkelen oppsummert" 
	text={insert content or text}
/>
`;

const codeDefaultHtml = `
<div class='ssb-expansion-box'>
  <button aria-expanded='false' class='header'>
    <span class='header-text'>Artikkelen oppsummert</span>
    <div class='icon-wrapper'>
      <i class="expand-icon">{feather.chevronDown 20px}</i>
    </div>
  </button>
  <div class='content closed'>{insert content or text}</div>
</div>
`;

const codeSneakPeakReact = `
<ExpansionBox 
	header='Artikkelen oppsummert' 
	text={insert content or text} 
	sneakPeek />
`;

const codeSneakPeakHtml = `
<div class="ssb-expansion-box sneak-peek">
   <button class="header" aria-expanded="false">
      <span class="header-text">Artikkelen oppsummert</span>
      <div class="icon-wrapper">
         <i class="expand-icon">{feather.chevronDown 20px}</i>
      </div>
   </button>
   <div class="content closed">
      {insert content or text}
   </div>
</div>
`;

const codeAIReact = `
<ExpansionBox 
	header='Artikkelen oppsummert' 
	text={insert content or text}
	aiIcon sneakPeek />
`;

const codeAIHtml = `
<div class="ssb-expansion-box sneak-peek">
   <button class="header" aria-expanded="false">
      <div class="icon">
        <i>{sparkle 32px}</i>
      </div>
      <span class="header-text">Artikkelen oppsummert</span>
      <div class="icon-wrapper">
         <i class="expand-icon">{feather.chevronDown 20px}</i>
      </div>
   </button>
   <div class="content closed">
      {insert content or text}
   </div>
</div>
`;

const ExpansionBoxInfo = () => {
	const [activeTab, setActiveTab] = useState(tabItems[0].path);
	const tabClicked = e => setActiveTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>ExpansionBox</Title>
			<LeadParagraph>
				{leadParagraphText}
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider />

			{activeTab === '/oversikt' && (
				<div>
					<ComponentExample
						title="ExpansionBox Standard"
						overviewText={overviewTextExpansionBoxStandard}
						exampleContent={<ExpansionBox header="Artikkelen oppsummert" text={exampleContentSneakPeek} />}
						codeReact={codeDefaultReact}
						codeHtml={codeDefaultHtml}
						tabCode={tabCode}
					/>

					<ComponentExample
						title="ExpansionBox SneakPeek"
						overviewText={overviewTextExpansionBoxSneakPeek}
						exampleContent={(
							<ExpansionBox
								header="Artikkelen oppsummert"
								text={exampleContentSneakPeek}
								sneakPeek
							/>
						)}
						codeReact={codeSneakPeakReact}
						codeHtml={codeSneakPeakHtml}
						tabCode={tabCode}
					/>

					<ComponentExample
						title="ExpansionBox AI"
						overviewText={overviewTextExpansionBoxAI}
						exampleContent={(
							<ExpansionBox
								header="Artikkelen oppsummert"
								text={exampleContentAI}
								sneakPeek
								aiIcon
							/>
						)}
						codeReact={codeAIReact}
						codeHtml={codeAIHtml}
						tabCode={tabCode}
					/>

				</div>
			)}

			{activeTab === '/props' && (
				<div>
					<div className="row col-lg-12 ">
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
									<td><code>aiIcon</code></td>
									<td>bool</td>
									<td>Use if AI-generated content</td>
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
									<td><code>sneakPeek</code></td>
									<td>bool</td>
									<td>Show a sneakpeek of the text. Defaults to false</td>
								</tr>
								<tr>
									<td><code>openByDefault</code></td>
									<td>bool</td>
									<td>Open when rendered. Defaults to false</td>
								</tr>
								<tr>
									<td><code>text</code></td>
									<td>string or element</td>
									<td>Content in expansionBox</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			)}
		</div>
	);
};

export default ExpansionBoxInfo;
