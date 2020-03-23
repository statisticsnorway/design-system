import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Card, Divider, ImageLink, LeadParagraph, Paragraph, Tabs, Title, Text } from '@statisticsnorway/ssb-component-library';
import { Globe } from 'react-feather';
import exampleImage from '../../../../public/img/card_image.png';
import imageLinkVertical from '../../../../public/img/imageLinkVertical.jpg';
import imageLinkHorizontal from '../../../../public/img/imageLinkHorizontal.jpg';

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

const codeImageTop = `
<Card
    imagePlacement="top"
    image={<img src=" " alt=" " />}
    href=" "
    subTitle="Type  /  DD. Måned ÅÅÅÅ"
    title="Tittel"
>
    <Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
</Card>
`;

const codeImageTopHtml = `
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
`;

const codeImageLeft = `
<Card
    imagePlacement="left"
    image={<img src=" " alt=" " />}
    href=" "
    subTitle="Type  /  DD. Måned ÅÅÅÅ"
    title="Tittel"
>
    <Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
</Card>
`;

const codeImageLeftHtml = `
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

const codeSimple = `
<Card title="Tittel" href=" " hrefText="Handling" icon={<Globe size={32} />}>
    <Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
</Card>

<Card title="Tittel" href=" " icon={<Globe size={32} />}>
    <Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
</Card>
`;

const codeSimpleHtml = `
<div class="ssb-card">
    <a href=" " class="clickable top-orientation">
        <div class="card-content">
            <div class="card-title">Tittel</div>
            <span class="ssb-text-wrapper">Tekst om innholdet skrives her for å utdype eller fortelle.</span>
            <div class="card-action">
                <i class="arrow-icon">{feather.arrowRight 22px}</i>
                <div class="href-text">Handling</div>
            </div>
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
`;

const codeProfile = `
<Card title="Tittel" href=" " icon={<Globe size={120} />} profiled>
    <Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
</Card>

<Card title="Tittel" fileLocation=" "  downloadText="Last ned" href=" " hrefText="Handling" icon={<Globe size={120} />} profiled>
    <Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
</Card>
`;

const codeProfileHtml = `
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

<div class="ssb-card">
    <a href=" " class="clickable top-orientation">
        <div class="card-content profiled">
            <div class="card-icon">
                <!-- Insert icon -->
            </div>
            <div class="card-title">Tittel</div>
            <span class="ssb-text-wrapper">Tekst om innholdet skrives her for å utdype eller fortelle.</span>
            <div class="card-action">
                <i class="arrow-icon">{feather.arrowRight 22px}</i>
                <div class="href-text">Handling</div>
            </div>
        </div>
    </a>
    <a download="" href=" " class="download-section">
        <i class="download-icon">{feather.downLoad 22px}</i>
        <span>Last ned</span>
    </a>
</div>
`;

const codeCardList = `
<Card href=" " hrefText="Handling" title="Tittel">
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
<div class="col-lg-12 mb-4 grid-column grid-3">
    <div class="ssb-card">
        <a href=" " class="clickable top-orientation">
            <div class="card-content">
                <div class="card-title">Tittel</div>
                <span class="ssb-text-wrapper">Tekst om innholdet skrives her for å utdype eller fortelle.</span>
                <div class="card-action">
                    <i class="arrow-icon">{feather.arrowRight 22px}</i>
                    <div class="href-text">Handling</div>
                </div>
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

const imageLinkCode = `
<ImageLink
	image={<img src={} alt="image" />}
	onClick={function}
	type="Type"
	title="Tittel"
/>
`;

const imageLinkCodeHtml = `
<a class="ssb-image-link" href=" ">
	<div class="image-background"><img src="" alt="" /></div>
	<span class="il-type">Type</span>
	<span class="il-title">Title</span>
	{feather.arrowRightCircle 32px}
</a>
`;

const imageLinkHorizontalCode = `
<ImageLink
	horizontal
	image={<img src={} alt="image" />}
	onClick={function}
	type="Type"
	title="Tittel"
/>
`;

const imageLinkHorizontalCodeHtml = `
<a class="ssb-image-link horizontal" href=" ">
	<div class="image-background"><img src="" alt="" /></div>
	<span class="il-type">Type</span>
	<span class="il-title">Title</span>
	{feather.arrowRightCircle 32px}
</a>
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
						<div className="component-example divider-left col-lg-6 mb-4">
							<Card href=" " image={<img src={exampleImage} alt="example" />} imagePlacement="top" title="Tittel" subTitle="Type  /  DD. Måned ÅÅÅÅ">
								<Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
							</Card>
						</div>
						<div className="col-lg-12 mb-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeImageTop} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeImageTopHtml} language="html" />}
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
							<Card href=" " image={<img src={exampleImage} alt="example" />} imagePlacement="left" title="Tittel" subTitle="Type  /  DD. Måned ÅÅÅÅ">
								<Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
							</Card>
						</div>
						<div className="col-lg-12 mb-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeImageLeft} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeImageLeftHtml} language="html" />}
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
							<Card href=" " hrefText="Handling" title="Tittel" icon={<Globe size={32} />}>
								<Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
							</Card>
						</div>
						<div className="col-lg-6 mb-4">
							<Card href=" " title="Tittel" icon={<Globe size={32} />}>
								<Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
							</Card>
						</div>
						<div className="col-lg-12 mb-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeSimple} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeSimpleHtml} language="html" />}
						</div>
					</div>

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Profiled cards</Title>
						<div className="col-lg-12">
							<Paragraph>
								Kortene passer godt i mindre grupper, som visuelle innganger til sider med ulik innholdstype.
								Bør aldri inneholde mer enn et par linjer forklarende tekst i tillegg til en kort tittel.
								Ikonene skal hjelpe brukeren til å forstå innholdet. Ikonene skal følge SSBs ikonstil for store ikoner.
								Kortene kan også brukes uten ikon. Versjonen med knapp bør brukes når det er behov for tydelige innganger.
								Ved sammenstilling av flere kort med knapp og lik verdi bør sekundærknapp eller pilikon benyttes.
							</Paragraph>
						</div>
						<div className="col-lg-6">
							<Card href=" " title="Tittel" icon={<Globe size={120} />} profiled>
								<Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
							</Card>
						</div>
						<div className="col-lg-6">
							<Card href=" " hrefText="Handling" title="Tittel" fileLocation="./not_a_file" icon={<Globe size={120} />} profiled>
								<Text>Tekst om innholdet skrives her for å utdype eller fortelle.</Text>
							</Card>
						</div>
						<div className="col-lg-12 mb-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeProfile} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeProfileHtml} language="html" />}
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
							<Card href=" " hrefText="Handling" title="Tittel">
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
						<Title size={2} className="col-lg-12">Faktaside vertical card</Title>
						<div className="col-lg-6 mb-4">
							<Paragraph>
								Kort til faktasider har fullbilde for å kommunisere at sidene er visuelle. Bildet gjør at kortene synes godt og stikker seg ut på siden.
								Kortene har en tydelig pil for å kommunisere at kortet er klikkbart.
							</Paragraph>
						</div>
						<div className="col-lg-6 mb-4">
							<ImageLink image={<img src={imageLinkVertical} alt="example" />} type="Type" title="Tittel" />
						</div>
						<div className="col-lg-12 mb-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={imageLinkCode} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={imageLinkCodeHtml} language="html" />}
						</div>
					</div>

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Faktaside horizontal card</Title>
						<div className="col-lg-12 mb-4">
							<Paragraph>
								Følger samme stil som vertikalt kort.
							</Paragraph>
						</div>
						<div className="col-lg-12 mb-4">
							<ImageLink orientation="horizontal" image={<img src={imageLinkHorizontal} alt="example" />} type="Type" title="Tittel" />
						</div>
						<div className="col-lg-12 mb-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={imageLinkHorizontalCode} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={imageLinkHorizontalCodeHtml} language="html" />}
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
									<td><code>Title</code></td>
									<td>string</td>
									<td>Card title</td>
								</tr>
							</tbody>
						</table>
					</div>
					<Divider className="mb-4" light />
					<div>
						<Title size={2}>Props ImageLink</Title>
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
									<td><code>image</code></td>
									<td>node</td>
									<td>An image to be put as background</td>
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
