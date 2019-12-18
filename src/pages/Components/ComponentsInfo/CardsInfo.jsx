import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Button, Card, Divider, ImageLink, LeadParagraph, Link, Paragraph, Tabs, Title } from '@statisticsnorway/ssb-component-library';
import { ArrowRight } from 'react-feather';
import exampleImage from '../../../../public/img/card_image.png';
import imageLinkExample from '../../../../public/img/imageLinkExample.png';

const rationaleText = `
As can be seen between these different profiled box elements, even though these are labeled underneath the same element, 
these elements have quite different design when compared with each other. This is done purposely in order to create a variety in 
design for both visual experience but most crucially to make it very easy for users to quickly distinguish the different 
type of content that these profiled boxes offer. 
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
<Card>
	<Title size={2}>Profiled box header</Title>
	<Paragraph>Explain something about something with something clever.</Paragraph>
	<Button primary>Handling</Button>
</Card>
`;

const codeHtml = `
<div class="ssb-card">
  <a class="card-content">
    {fill with content}
  </a>
  /* Optional download field */
  <a download href=" " class="download-section">
    <i class="download-icon" size="20" />
    <span>Last ned</span>
  </a>
</div>
`;

const CardsInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Cards</Title>
			<LeadParagraph>
				Kort er klikkbare innganger som skal promotere innhold og ta brukeren videre til annet innhold.
				Ikke la kort ta brukeren til eksterne nettsteder – bruk i stedet lenke. Kort brukes til flere ulike innholdstyper, og må i stor grad tilpasses unike behov.
				Sjekk alltid hvilke kort som finnes før nye lages. Det skal ikke brukes to ulike kort til samme innholdstype.
				For å holde et konsistent uttrykk skal det alltid tas utgangspunkt i et av kortene vist nedenfor. Nye versjoner skal alltid godkjennes av ansvarlig designer for designsystemet.
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-4" />

			{activeTab === '/oversikt' && (
				<div>
					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Vertical picture & text card</Title>
						<div className="col-lg-6">
							<Paragraph>
								Brukes der flere kort kan plasseres horisontalt ved siden av hverandre. Kortet har fleksibel høyde, med lenketittel.
								Bildet beholder dimensjonene selv om kortet blir høyere eller større.Tekstmengde i kortet bør begrenses.
								Brukes som inngang til artikler eller annet innhold hvor det er viktig at brukeren får et kort sammendrag av innholdet.
							</Paragraph>
						</div>
						<div className="col-lg-6">
							<Card image={<img src={exampleImage} alt="example" />} imagePlacement="top">
								<Title size={2}>Card header</Title>
								<Paragraph>Explain something about something with something clever.</Paragraph>
								<Button primary>Handling</Button>
							</Card>
						</div>
						<div className="col-lg-12 mb-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeReact} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeHtml} language="html" />}
						</div>
					</div>

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Horisontal picture & text card</Title>
						<div className="col-lg-12 mb-4">
							<Paragraph>
								Brukes der ett eller flere kort plasseres under hverandre. Kortet har fleksibel bredde, med lenketittel.
								Bildet beholder dimensjonene selv om kortet blir høyere eller større. Tekstmengde i kortet bør begrenses.
								Brukes som inngang til artikler eller annet innhold hvor det er viktig at brukeren får et kort sammendrag av innholdet.
							</Paragraph>
						</div>
						<div className="col-lg-12 mb-4">
							<Card image={<img src={exampleImage} alt="example" />} imagePlacement="left">
								<Title size={2}>Card header</Title>
								<Paragraph>Explain something about something with something clever.</Paragraph>
								<Button primary>Handling</Button>
							</Card>
						</div>
						<div className="col-lg-12 mb-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeReact} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeHtml} language="html" />}
						</div>
					</div>

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Simple cards</Title>
						<div className="col-lg-12">
							<Paragraph>
								Kortene passer godt i større grupper, som visuelle innganger til sider innen samme innholdstype (eksempelvis statistikksider).
								Bør aldri inneholde mer enn et par linjer forklarende tekst i tillegg til en kort tittel.
								Ikonene skal hjelpe brukeren til å forstå innholdet. Ikonene skal hentes fra Feather icons eller følge denne stilen.
								Kortene kan også brukes uten ikon. Versjonen med knapp bør brukes når det er behov for tydelige innganger.
								Ved sammenstilling av flere kort med knapp og lik verdi bør sekundærknapp eller pilikon benyttes.
							</Paragraph>
						</div>
						<div className="col-lg-6 mb-4">
							<Card>
								<Title size={2}>Card header</Title>
								<Paragraph>Explain something about something with something clever.</Paragraph>
								<Button primary>Handling</Button>
							</Card>
						</div>
						<div className="col-lg-6 mb-4">
							<Card fileLocation="./not_a_file">
								<Title size={2}>Card header</Title>
								<Paragraph>Explain something about something with something clever.</Paragraph>
								<Button primary>Handling</Button>
							</Card>
						</div>
						<div className="col-lg-12 mb-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeReact} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeHtml} language="html" />}
						</div>
					</div>

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Profiled cards</Title>
						<div className="col-lg-6">
							<Paragraph>
								Kortene passer godt i mindre grupper, som visuelle innganger til sider med ulik innholdstype.
								Bør aldri inneholde mer enn et par linjer forklarende tekst i tillegg til en kort tittel.
								Ikonene skal hjelpe brukeren til å forstå innholdet. Ikonene skal følge SSBs ikonstil for store ikoner.
								Kortene kan også brukes uten ikon. Versjonen med knapp bør brukes når det er behov for tydelige innganger.
								Ved sammenstilling av flere kort med knapp og lik verdi bør sekundærknapp eller pilikon benyttes.
							</Paragraph>
						</div>
						<div className="col-lg-6">
							<Card fileLocation="./not_a_file">
								<Title size={2}>Card header</Title>
								<Paragraph>Explain something about something with something clever.</Paragraph>
								<Button primary>Handling</Button>
							</Card>
						</div>
						<div className="col-lg-12 mb-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeReact} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeHtml} language="html" />}
						</div>
					</div>

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Card list</Title>
						<div className="col-lg-12 mb-4">
							<Paragraph>
								Når flere kort plasseres sammen til en gruppe/liste skal de følge layout-griden med 20px mellomrom til neste kort både horisontalt og vertikalt.
							</Paragraph>
						</div>
						<div className="col-lg-12 mb-4 grid-column grid-3">
							<Card>
								<Title size={2}>Card header</Title>
								<Paragraph>Explain something about something with something clever.</Paragraph>
								<Link icon={<ArrowRight />} href=" " />
							</Card>
							<Card>
								<Title size={2}>Card header</Title>
								<Paragraph>Explain something about something with something clever.</Paragraph>
								<Link icon={<ArrowRight />} href=" " />
							</Card>
							<Card>
								<Title size={2}>Card header</Title>
								<Paragraph>Explain something about something with something clever.</Paragraph>
								<Link icon={<ArrowRight />} href=" " />
							</Card>
						</div>
						<div className="col-lg-12 mb-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeReact} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeHtml} language="html" />}
						</div>
					</div>

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Faktaside vertical card</Title>
						<div className="col-lg-6 mb-4">
							<Paragraph>
								Kort til faktasider har fullbilde for å kommunisere at sidene er visuelle. Bildet gjør at kortene synes godt og stikker seg ut på siden.
								Kortene har en tydelig pil for å kommunisere at kortet er klikkbart.
							</Paragraph>
						</div>
						<div className="col-lg-6 mb-4">
							<ImageLink image={<img src={imageLinkExample} alt="example" />} type="Type" title="Tittel" />
						</div>
						<div className="col-lg-12 mb-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeReact} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeHtml} language="html" />}
						</div>
					</div>

				</div>
			)}
			{activeTab === '/begrunnelse' && (
				<div className="row mb-4">
					<Title size={2} className="col-lg-12">Different designs</Title>
					<div className="col-lg-6">
						<Paragraph>{rationaleText}</Paragraph>
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
								<td><code>centered</code></td>
								<td>bool</td>
								<td>Centers text</td>
							</tr>
							<tr>
								<td><code>children</code></td>
								<td>node</td>
								<td>Required. Fills box with content</td>
							</tr>
							<tr>
								<td><code>fileLocation</code></td>
								<td>string</td>
								<td>Path to downloadable file. Ads the download field</td>
							</tr>
							<tr>
								<td><code>onClick</code></td>
								<td>func</td>
								<td>Callback function</td>
							</tr>
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default CardsInfo;
