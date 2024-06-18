import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Card, Divider, Link, PictureCard, LeadParagraph, Paragraph, Tabs, Title, Text } from '@statisticsnorway/ssb-component-library';
import { Globe } from 'react-feather';
import exampleImage from '../../../../public/img/editorialCard.png';
import pictureCardVertical from '../../../../public/img/pictureCardVertical.png';
import pictureCardHorizontal from '../../../../public/img/pictureCardHorizontal.png';

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

const codeStandard = `
<Card title="Tittel" href=" ">
    <Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
</Card>

<Card title="Tittel" href=" " icon={<Globe size={32} />}>
    <Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
</Card>
`;

const codeStandardHtml = `
<div class="ssb-card">
    <a href=" " class="clickable top-orientation">
        <div class="card-content">
            <div class="card-title">Tittel</div>
            <span class="ssb-text-wrapper">Tekst om innholdet skrives her for å utdype eller fortelle.</span>
            <i class="arrow-icon">{feather.arrowRight 22px}</i>
        </div>
    </a>
</div>

<div class="ssb-card">
    <a href=" " class="clickable top-orientation">
        <div class="card-content">
			<div class="card-icon">
				<!-- Insert icon -->
            </div>
            <div class="card-title">Tittel</div>
            <span class="ssb-text-wrapper">Tekst om innholdet skrives her for å utdype eller fortelle.</span>
            <i class="arrow-icon">{feather.arrowRight 22px}</i>
        </div>
    </a>
</div>
`;

const codeProfile = `
<Card title="Tittel" href=" " profiled>
    <Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
</Card>

<Card title="Tittel" icon={<Globe size={120} />} profiled>
    <Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
</Card>
`;

const codeProfileHtml = `
<div class="ssb-card">
    <a href=" " class="clickable top-orientation">
        <div class="card-content profiled">
            <div class="card-title">Tittel</div>
            <span class="ssb-text-wrapper">Tekst om innholdet skrives her for å utdype eller fortelle.</span>
            <i class="arrow-icon">{feather.arrowRight 22px}</i>
        </div>
    </a>
</div>

<div class="ssb-card">
    <a href=" " class="clickable top-orientation">
        <div class="card-content profiled">
            <div class="card-icon">
                <!-- Insert icon -->
            </div>
            <div class="card-title">Tittel</div>
            <span class="ssb-text-wrapper">Tekst om innholdet skrives her for å utdype eller fortelle.</span>
            <i class="arrow-icon">{feather.arrowRight 22px}</i>
        </div>
    </a>
</div>
`;

const codeEditorial = `
<Card 
	href=" " 
	image={<img src={image} alt="" />} 
	imagePlacement="top" 
	title="Tittel" 
	subTitle="Type  /  DD. Måned ÅÅÅÅ"
>
	<Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
</Card>

<Card 
	href=" " 
	image={<img src={image} 
	alt="" />} 
	imagePlacement="left" 
	title="Tittel" 
	subTitle="Type  /  DD. Måned ÅÅÅÅ"
>
	<Text>Tekst om innholdet skrives her for å utdype eller fortelle. Gjerne over flere linjer.</Text>
</Card>
`;

const codeEditorialHtml = `
<div class="ssb-card">
    <a href=" " class="clickable top-orientation">
        <div class="card-image">
            <img src="" alt="" />
        </div>
        <div class="card-content with-image">
            <div class="card-subtitle">Type  /  DD. Måned ÅÅÅÅ</div>
            <div class="card-title">Tittel</div>
            <span class="ssb-text-wrapper">Tekst om innholdet skrives her for å utdype eller fortelle.</span>
        </div>
    </a>
</div>

<div class="ssb-card">
    <a href=" " class="clickable left-orientation">
        <div class="card-image">
            <img src="" alt="" />
        </div>
        <div class="card-content with-image">
            <div class="card-subtitle">Type  /  DD. Måned ÅÅÅÅ</div>
            <div class="card-title">Tittel</div>
            <span class="ssb-text-wrapper">Tekst om innholdet skrives her for å utdype eller fortelle.</span>
        </div>
    </a>
</div>
`;

const codePictureCard = `
<PictureCard 
	imageSrc={} 
	altText="example" 
	type="Type" 
	title="Tittel" 
/>

<PictureCard 
	horizontal
	imageSrc={} 
	altText="example" 
	type="Type" 
	title="Tittel" 
/>
`;

const codePictureCardHtml = `
<a class="ssb-picture-card vertical">
   <div class="image-background">
   		<img src="" alt="example">
   </div>
   <div class="overlay">
      <span class="il-type">Type</span>
	  <span class="il-title">Tittel</span>
      {feather.arrowRightCircle 32px}
   </div>
</a>

<a class="ssb-picture-card horizontal">
   <div class="image-background">
   		<img src="" alt="example">
   </div>
   <div class="overlay">
      <span class="il-type">Type</span>
	  <span class="il-title">Tittel</span>
      {feather.arrowRightCircle 32px}
   </div>
</a>
`;

const codeCardList = `
<Card href=" " title="Tittel">
    <Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
</Card>
<Card href=" " title="Tittel">
    <Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
</Card>
<Card href=" " title="Tittel">
    <Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
</Card>
<Card title="Tittel">
    <Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
</Card>
<Card href=" " title="Tittel">
    <Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
</Card>
<Card href=" " title="Tittel">
    <Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
</Card>
`;

const codeCardListHtml = `
<div class="col-lg-12 grid-column grid-3 grid-row-gap">
   <div class="ssb-card">
      <a href=" " class="clickable top-orientation">
         <div class="card-content">
            <div class="card-title">Tittel</div>
            <span class="ssb-text-wrapper">Tekst om innholdet skrives her for å utdype eller fortelle.</span>
            <i class="arrow-icon">{feather.arrowRight 22px}</i>
         </div>
      </a>
   </div>
   <div class="ssb-card">
      <a href=" " class="clickable top-orientation">
         <div class="card-content">
            <div class="card-title">Tittel</div>
            <span class="ssb-text-wrapper">Tekst om innholdet skrives her for å utdype eller fortelle.</span>
            <i class="arrow-icon">{feather.arrowRight 22px}</i>
         </div>
      </a>
   </div>
   <div class="ssb-card">
      <a href=" " class="clickable top-orientation">
         <div class="card-content">
            <div class="card-title">Tittel</div>
            <span class="ssb-text-wrapper">Tekst om innholdet skrives her for å utdype eller fortelle.</span>
            <i class="arrow-icon">{feather.arrowRight 22px}</i>
         </div>
      </a>
   </div>
   <div class="ssb-card">
      <a href=" " class="clickable top-orientation">
         <div class="card-content">
            <div class="card-title">Tittel</div>
            <span class="ssb-text-wrapper">Tekst om innholdet skrives her for å utdype eller fortelle.</span>
            <i class="arrow-icon">{feather.arrowRight 22px}</i>
         </div>
      </a>
   </div>
   <div class="ssb-card">
      <a href=" " class="clickable top-orientation">
         <div class="card-content">
            <div class="card-title">Tittel</div>
            <span class="ssb-text-wrapper">Tekst om innholdet skrives her for å utdype eller fortelle.</span>
            <i class="arrow-icon">{feather.arrowRight 22px}</i>
         </div>
      </a>
   </div>
   <div class="ssb-card">
      <a href=" " class="clickable top-orientation">
         <div class="card-content">
            <div class="card-title">Tittel</div>
            <span class="ssb-text-wrapper">Tekst om innholdet skrives her for å utdype eller fortelle.</span>
            <i class="arrow-icon">{feather.arrowRight 22px}</i>
         </div>
      </a>
   </div>
</div>
`;

const codeExtension = `
<Card title="Tittel" href=" " fileLocation="./not_a_file.md" downloadText="Last ned filnavn.filtype">
	<Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
</Card>

`;

const codeExtensionHtml = `
<div class="ssb-card">
   <a href=" " class="clickable top-orientation">
      <div class="card-content">
         <div class="card-title">Tittel</div>
         <span class="ssb-text-wrapper">Tekst om innholdet skrives her for å utdype eller fortelle.</span>
         <i class="arrow-icon">{feather.arrowRight 22px}</i>
      </div>
   </a>
   <a download="" href="./not_a_file.md" class="download-section">
      <i class="download-icon">{feather.downLoad 22px}</i>
      <span>Last ned filnavn.filtype</span>
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
				Kort er klikkbare innganger som promoterer og tar brukeren til annet innhold.
				Kort skal aldri ta brukeren til eksterne nettsteder – bruk lenke til dette formålet.
				Nye kort skal ta utgangspunkt i et av kortene vist på denne siden,
				og godkjennes av ansvarlig designer for designsystemet før utvikling/publisering.
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-4" />

			{activeTab === '/oversikt' && (
				<div>
					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Standard card</Title>
						<div className="col-lg col-md-12">
							<Paragraph>
								Kortet brukes når inngangen er underordnet annet innhold på siden. For eksempel til å promotere/lenke til relatert innhold.
								Teksten bør kort og konsist si noe om innholdet kortet lenker til. Versjonen brukes når et større antall kort sammenstilles til en kortliste. Kortene i listen skal,
								som regel, lenke til samme innholdstype, men ulike sider – for eksempel ulike statistikksider. Ikon kan brukes for å differensiere.
								Alle kort i en liste skal være like – enten har alle eller ingen ikon.
								Ikoner hentes fra <Link href="https://feathericons.com/" isExternal> feathericons.com</Link> eller følger samme stil som feather icons.
							</Paragraph>
						</div>
						<div className="component-example col-lg col-md-12 divider-left d-flex flex-column align-items-center">
							<div className="mb-4">
								<Card href=" " title="Tittel">
									<Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
								</Card>
							</div>
							<div className="mb-4">
								<Card href=" " title="Tittel" icon={<Globe size={32} />}>
									<Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
								</Card>
							</div>
						</div>
						<div className="col-lg-12 mb-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeStandard} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeStandardHtml} language="html" />}
						</div>
					</div>

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Profiled card</Title>
						<div className="col-lg col-md-12">
							<Paragraph>
								Kortet brukes når inngangen er likestilt eller overordnet annet innhold på siden. For eksempel for å promotere ofte brukte tjenester,
								eller for å indikere at navigasjonen er viktig for videre prosess, forståelse, opplevelse eller lignende.
								Teksten bør kort og konsist si noe om innholdet kortet lenker til. Versjonen brukes når et mindre antall kort sammenstilles til en kortliste,
								og som regel når kortene i listen lenker til ulike innholdstyper – for eksempel ulike tjenester eller verktøy (f.eks. navnesøk og kalkulator).
								Ikon kan brukes for å differensiere. Alle kort i en liste skal være like – enten har alle eller ingen ikon. Ikoner skal følge SSBs ikonstil.
							</Paragraph>
						</div>
						<div className="component-example col-lg col-md-12 divider-left d-flex flex-column align-items-center">
							<div className="mb-4">
								<Card href=" " title="Tittel" profiled>
									<Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
								</Card>
							</div>
							<div className="mb-4">
								<Card href=" " title="Tittel" icon={<Globe size={120} />} profiled>
									<Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
								</Card>
							</div>
						</div>
						<div className="col-lg-12 mb-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeProfile} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeProfileHtml} language="html" />}
						</div>
					</div>

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Editorial Card</Title>
						<div className="col-lg col-md-12">
							<Title size={3}>Vertical</Title>
							<Paragraph>
								Brukes der flere kort kan plasseres horisontalt ved siden av hverandre. Kortet har fleksibel høyde, med lenketittel.
								Bildet beholder dimensjonene selv om kortet blir høyere eller større. Tekstmengde i kortet bør begrenses.
								Brukes som inngang til artikler eller annet innhold hvor det er viktig at brukeren får et kort sammendrag av innholdet.
							</Paragraph>
							<Title size={3} className="mt-5">Horizontal</Title>
							<Paragraph>
								Brukes der ett eller flere kort plasseres under hverandre. Kortet har fleksibel bredde, med lenketittel.
								Bildet beholder dimensjonene selv om kortet blir høyere eller større. Tekstmengde i kortet bør begrenses.
								Brukes som inngang til artikler eller annet innhold hvor det er viktig at brukeren får et kort sammendrag av innholdet.
							</Paragraph>
							<Paragraph className="mt-5">
								OBS!<br />
								Horisontale og vertikale kort skal ikke kombineres i en og samme liste.
							</Paragraph>
						</div>
						<div className="component-example divider-left col-lg col-md-12 mb-4">
							<Card href=" " image={<img src={exampleImage} alt="example" />} imagePlacement="top" title="Tittel" subTitle="Type  /  DD. Måned ÅÅÅÅ">
								<Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
							</Card>
						</div>
						<div className="col-lg-12 mb-4 mt-4">
							<Card href=" " image={<img src={exampleImage} alt="example" />} imagePlacement="left" title="Tittel" subTitle="Type  /  DD. Måned ÅÅÅÅ">
								<Text>Tekst om innholdet skrives her for å utdype eller fortelle. Gjerne over flere linjer.</Text>
							</Card>
						</div>
						<div className="col-lg-12 mb-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeEditorial} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeEditorialHtml} language="html" />}
						</div>
					</div>

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Picture Card</Title>
						<div className="col-lg col-md-12">
							<Title size={3}>Vertical</Title>
							<Paragraph>
								Kort til faktasider har fullbilde for å kommunisere at sidene er mer visuelle enn andre innholdstyper. Bildet gjør at kortene synes godt på siden.
							</Paragraph>
							<Title size={3} className="mt-5">Horizontal</Title>
							<Paragraph>
								Horisontalt kort brukes der faktasidekortene er sekundære til innholdet på siden, eller hvor primære kort blir for store og tar for mye oppmerksomhet.
							</Paragraph>
							<Paragraph className="mt-5">
								OBS!<br />
								Horisontale og vertikale kort skal ikke kombineres i en og samme liste
							</Paragraph>
							<Paragraph className="mt-4">
								Horisontalt kort kan skaleres i bredde for å tilpasses ulike innholdsmaler.
							</Paragraph>
						</div>
						<div className="component-example divider-left col-lg col-md-12 mb-4">
							<div className="float-right">
								<PictureCard imageSrc={pictureCardVertical} altText="example" type="Type" title="Tittel" />
							</div>
							<div className="float-right mt-5">
								<PictureCard imageSrc={pictureCardHorizontal} altText="example" orientation="horizontal" type="Type" title="Tittel" />
							</div>
						</div>
						<div className="col-lg-12 mb-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codePictureCard} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codePictureCardHtml} language="html" />}
						</div>
					</div>

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Card list</Title>
						<div className="col-lg-12 mb-4">
							<Paragraph>
								Kort i liste skal følge layoutgrid med 20px mellomrom til neste kort både horisontalt og vertikalt. Kort i samme liste bør ha lik høyde.
								Det gir et ryddig og oversiktlig uttrykk. Kort med behov for mye tekst, primært “Editorial card”,
								kan få ulik høyde ut fra tittel- og tekstlengde. Kortene på samme rad skal da flukte i topp. Neste rad plasseres 20px ned fra bunnen av høyeste kort i raden over.
							</Paragraph>
						</div>
						<div className="col-lg-12 grid-column grid-3 grid-row-gap">
							<Card href=" " title="Tittel">
								<Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
							</Card>
							<Card href=" " title="Tittel">
								<Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
							</Card>
							<Card href=" " title="Tittel">
								<Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
							</Card>
							<Card href=" " title="Tittel">
								<Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
							</Card>
							<Card href=" " title="Tittel">
								<Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
							</Card>
							<Card href=" " title="Tittel">
								<Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
							</Card>
						</div>
						<div className="col-lg-12 mb-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeCardList} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeCardListHtml} language="html" />}
						</div>
					</div>

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Extension</Title>
						<div className="col-lg col-md-12">
							<Paragraph>
								Kort skal ikke bestå av lenke, nedlasting eller annen funksjon ut over kortets egen – som er å ta brukeren til ny side.
								Ved behov for nedlasting i tilknytning til kort, skal et tillegg festes til bunn av kortet. Egen hover indikerer at det har en annen funksjon enn kortet.
								Tillegget skal kun benyttes der det, ut fra et brukerperspektiv, kan effektivisere prosesser eller øke forståelse av innholdet.
								Vurder alltid om tillegget vil forvirre mer enn det løser. Tillegget skal aldri brukes alene.
							</Paragraph>
						</div>
						<div className="component-example col-lg col-md-12 divider-left">
							<Card title="Tittel" href=" " fileLocation="./not_a_file.md" downloadText="Last ned filnavn.filtype">
								<Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
							</Card>
						</div>
						<div className="col-lg-12 mb-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeExtension} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeExtensionHtml} language="html" />}
						</div>
					</div>

				</div>
			)}
			{activeTab === '/begrunnelse' && (
				<div className="row mb-4">
					<Title size={2} className="col-lg-12">Different designs</Title>
					<div className="col-lg col-md-12">
						<Paragraph>{rationaleText}</Paragraph>
					</div>
				</div>
			)}

			{activeTab === '/props' && (
				<div>
					<div>
						<Title size={2}>Props Card</Title>
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
									<td>node</td>
									<td>Required. Fills box with content</td>
								</tr>
								<tr>
									<td><code>className</code></td>
									<td>string</td>
									<td>Optional container class</td>
								</tr>
								<tr>
									<td><code>downloadText </code></td>
									<td>string </td>
									<td>Text download link, default: Last ned</td>
								</tr>
								<tr>
									<td><code>fileLocation</code></td>
									<td>string</td>
									<td>Path to downloadable file. Ads the download field</td>
								</tr>
								<tr>
									<td><code>href</code></td>
									<td>string</td>
									<td>Destination for navigation</td>
								</tr>
								<tr>
									<td><code>hrefText</code></td>
									<td>string</td>
									<td>Text after arrow</td>
								</tr>
								<tr>
									<td><code>icon</code></td>
									<td>element</td>
									<td>Icon element</td>
								</tr>
								<tr>
									<td><code>image</code></td>
									<td>element</td>
									<td>Image element</td>
								</tr>
								<tr>
									<td><code>imagePlacement</code></td>
									<td>left or top</td>
									<td>Position of the image, default: top</td>
								</tr>
								<tr>
									<td><code>profiled</code></td>
									<td>bool</td>
									<td>Profiled layout</td>
								</tr>
								<tr>
									<td><code>subTitle</code></td>
									<td>string</td>
									<td>Smaller text above title</td>
								</tr>
								<tr>
									<td><code>title</code></td>
									<td>string</td>
									<td>Card title</td>
								</tr>
								<tr>
									<td><code>external</code></td>
									<td>bool</td>
									<td>Change icon from ArrowRight to ExternalLink</td>
								</tr>
							</tbody>
						</table>
					</div>
					<Divider className="mb-4" light />
					<div>
						<Title size={2}>Props PictureCard</Title>
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
									<td><code>className</code></td>
									<td>string</td>
									<td>Optional container class</td>
								</tr>
								<tr>
									<td><code>imageSrc</code></td>
									<td>required (url)</td>
									<td>URL of the image to be used</td>
								</tr>
								<tr>
									<td><code>altText</code></td>
									<td>required string</td>
									<td>alt text for screen readers</td>
								</tr>
								<tr>
									<td><code>link </code></td>
									<td>string </td>
									<td>Link to be navigated to</td>
								</tr>
								<tr>
									<td><code>onClick</code></td>
									<td>func</td>
									<td>Function callback to be used instead of link</td>
								</tr>
								<tr>
									<td><code>orientation</code></td>
									<td>horizontal or vertical</td>
									<td>Orientation of card</td>
								</tr>
								<tr>
									<td><code>title</code></td>
									<td>string</td>
									<td>Title text</td>
								</tr>
								<tr>
									<td><code>type</code></td>
									<td>string</td>
									<td>Type text</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			)}
		</div>
	);
};

export default CardsInfo;
