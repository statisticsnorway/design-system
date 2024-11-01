import React, { useState } from 'react';
import { ArrowRight } from 'react-feather';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Divider, LeadParagraph, Link, Paragraph, Tabs, TableLink, Title, CategoryLink } from '@statisticsnorway/ssb-component-library';

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

const ordinaryLink = `
<Link href="">This is a clickable text link</Link>
<Link negative href="">This is a clickable text link</Link>
`;

const ordinaryLinkHtml = `
<a class="ssb-link" href=" " target="" rel="">
  <span class="link-text">This is a clickable text link</span>
</a>

<a class="ssb-link negative" href=" " target="" rel="">
  <span class="link-text">This is a clickable text link</span>
</a>
`;

const iconLinks = `
<Link href=" " icon={<ArrowRight size="20" />}>This is a link with an icon</Link>
<Link negative href=" " icon={<ArrowRight size="20" />}>This is a link with an icon</Link>
`;

const iconLinksHtml = `
<a class="ssb-link with-icon" href=" " target="" rel="">
    <div class="icon-wrapper">
        {insert icon here}
    </div>
    <span class="link-text">This is a link with an icon</span>
</a>

<a class="ssb-link negative with-icon" href=" " target="" rel="">
    <div class="icon-wrapper">
        {insert icon here}
    </div>
    <span class="link-text">This is a link with an icon</span>
</a>
`;

const standAloneLinks = `
<Link href=" " standAlone>Stand-alone link</Link>
<Link href=" " icon={<ArrowRight size="20" />} standAlone>Stand-alone link with icon</Link>
<Link href=" " linkType="profiled" standAlone>Stand-alone link profile</Link>
<Link href=" " negative standAlone>Stand-alone link negative</Link>
`;

const standAloneLinksHtml = `
<a class="ssb-link stand-alone" href=" " target="" rel="">
  <span class="link-text">Stand-alone link</span>
</a>

<a class="ssb-link with-icon stand-alone" href=" " target="" rel="">
    <div class="icon-wrapper">
        {insert icon here}
    </div>
    <span class="link-text">Stand-alone link with icon<</span>
</a>

<a class="ssb-link profiled stand-alone" href=" " target="" rel="">
  <span class="link-text">Stand-alone link profile</span>
</a>

<a class="ssb-link negative stand-alone" href=" " target="" rel="">
  <span class="link-text">Stand-alone link negative</span>
</a>
`;

const profiledLinks = `
<Link href=" " linkType="profiled">This is a profiled text link</Link>
<Link negative href=" " linkType="profiled">This is a profiled text link</Link>
`;

const profiledLinksHtml = `
<a class="ssb-link profiled" href=" " target="" rel="">
  <span class="link-text">This is a profiled text link</span>
</a>

<a class="ssb-link profiled negative" href=" " target="" rel="">
  <span class="link-text">This is a profiled text link</span>
</a>
`;

const profiledLinksIcon = `
<Link href=" " linkType="profiled" icon={<ArrowRight size="20" />}>This is a profiled link with icon</Link>
<Link negative href=" " linkType="profiled" icon={<ArrowRight size="20" />}>This is a profiled link with icon</Link>
`;

const profiledLinksIconHtml = `
<a class="ssb-link profiled with-icon" href=" " target="" rel="">
    <div class="icon-wrapper">
        {insert icon here}
    </div>
    <span class="link-text">This is a profiled link with icon</span>
</a>

<a class="ssb-link negative profiled with-icon" href=" " target="" rel="">
    <div class="icon-wrapper">
        {insert icon here}
    </div>
    <span class="link-text">This is a profiled link with icon</span>
</a>
`;

const headerLinks = `
<Link href=" " linkType="header">This is a header link</Link>
<Link href=" " linkType="header" headingSize={3}>This is a header link with heading 3</Link>
<Link negative href=" " linkType="header">This is a header link</Link>
`;

const headerLinksHtml = `
<a class="ssb-link header" href=" " target="" rel="">
  <span class="link-text">This is a header link</span>
</a>

<a class="ssb-link header" href=" " target="" rel="">
	<h3 class="link-text">This is a header link with heading 3</h3>
</a>

<a class="ssb-link header negative" href=" " target="" rel="">
  <span class="link-text">This is a header link</span>
</a>
`;

const linkList = `
<Link href=" " linkType="header">This is a clickable text link in a link list</Link>
<Link href=" " linkType="header">This is a clickable text link in a link list</Link>
<Link href=" " linkType="header">This is a clickable text link in a link list</Link>
`;

const linkListHtml = `
<a class="ssb-link" href=" " target="" rel="">
	<span class="link-text">This is a clickable text link in a link list</span>
</a>
<a class="ssb-link" href=" " target="" rel="">
	<span class="link-text">This is a clickable text link in a link list</span>
</a>
<a class="ssb-link" href=" " target="" rel="">
	<span class="link-text">This is a clickable text link in a link list</span>
</a>
`;

const tableLink = `
<TableLink text="Tabell 1" href="" description="Gjennomsnittspris i fritt salg på eid tomt i 100-meterbeltet. 2015-2108." />
<TableLink text="Tabell 2" href="" description="Gjennomsnittspris i fritt salg på eid tomt i 100-meterbeltet. 2015-2108." />
`;

const tableLinkHtml = `
<a className="ssb-table-link" href="" target="_blank" rel="">
	<div className="tl-icon">
		<i>{insert icon here feather.arrowRight 22px}</i>
	</div>
	<div className="tl-info">
		<span className="tl-text">
			Tabell 1
		</span>
		<span className="tl-description">
			Gjennomsnittspris i fritt salg på eid tomt i 100-meterbeltet. 2015-2108.
		</span>
	</div>
</a>
<a className="ssb-table-link" href="" target="_blank" rel="">
    <div className="tl-icon">
        <i>{insert icon here feather.arrowRight 22px}</i>
    </div>
    <div className="tl-info">
        <span className="tl-text">
            Tabell 2
        </span>
        <span className="tl-description">
            Gjennomsnittspris i fritt salg på eid tomt i 100-meterbeltet. 2015-2108.
        </span>
    </div>
</a>
`;

const categoryLinks = `
<CategoryLink href="" titleText="Category link with description" subText="Description goes here" />
`;
const categoryLinksHtml = `
<a class="ssb-category-link no-minwidth" href=" ">
	<div class="div-wrapper">
		<div class="text-divs title-wrapper">
			<span class="link-title-text">Category link with description</span>
		</div>
		<div class="text-divs sub-wrapper">
			<span class="link-sub-text">Description goes here</span>
		</div>
		<svg class="arrow-icon">
			{insert svg icon with same class as above}
		</svg>
	</div>
</a>
`;

const LinksInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Link</Title>
			<LeadParagraph>
				Lenker stiles slik at det er lett å forstå at de er klikkbare og tar brukeren til andre sider.
				De kan stå enkeltvis, i brødtekst eller settes sammen til lenkelister. Lenker stiles etter UU-krav.
				Lenketeksten skal gi brukeren en tydelig indikasjon på lenkens funksjon.
			</LeadParagraph>

			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-3" />
			{activeTab === '/overview' && (
				<div>
					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Link</Title>
						<div className="col-lg col-md-12">
							<Paragraph>
								Standard lenke følger stilen til brødtekst, men er understreket og har grønn farge for å skille den fra ikke-klikkbar tekst.
								Kan stå alene eller sammen med flere i lenkeliste. Den kan også brukes i brødtekst.
							</Paragraph>
						</div>
						<div className="component-example col-lg col-md-12 divider-left d-flex flex-column align-items-center">
							<div className="d-flex justify-content-center mb-4 flex-wrap component-wrapper">
								<Link href=" ">This is a clickable text link</Link>
							</div>
							<div className="ps-4 mb-4">
								<Link href=" ">This is a long clickable text link that will go over several lines</Link>
							</div>
							<div className="d-flex justify-content-center flex-wrap negative-wrapper">
								<Link href=" " negative>This is a clickable text link</Link>
							</div>
						</div>

						<div className="col-lg-12 mt-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={ordinaryLink} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={ordinaryLinkHtml} language="html" />}
						</div>

					</div>

					<Divider light className="mb-3" />

					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Link with icon</Title>
						<div className="col-lg col-md-12">
							<Paragraph>
								Lenker med ikon brukes som frittstående lenker. Flere lenker med ikon kan settes sammen til lenkeliste.
								Ikonet brukes for å differensiere eller indikere ulik funksjonalitet. Ikonet skal alltid gi brukeren økt forståelse for lenkens funksjon.
							</Paragraph>
						</div>
						<div className="component-example col-lg col-md-12 divider-left d-flex flex-column align-items-center">
							<div className="d-flex justify-content-center mb-4 flex-wrap component-wrapper">
								<Link href=" " icon={<ArrowRight size="20" />}>This is a link with an icon</Link>
							</div>
							<div className="ps-4 mb-4">
								<Link href=" " icon={<ArrowRight size="20" />}>This is a long link with an icon that will go over several lines</Link>
							</div>
							<div className="d-flex justify-content-center flex-wrap negative-wrapper">
								<Link negative href=" " icon={<ArrowRight size="20" />}>This is a link with an icon</Link>
							</div>
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={iconLinks} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={iconLinksHtml} language="html" />}
						</div>
					</div>

					<Divider light className="mb-3" />

					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Link (stand-alone)</Title>
						<div className="col-lg col-md-12">
							<Paragraph>
								Den frittstående lenken har et attributt &apos;standAlone&apos;, som kan brukes på alle lenker på denne siden.
								Kan stå alene eller sammen med flere i en lenket liste. Bør brukes utenfor en brødtekst.
							</Paragraph>
							<Paragraph>
								Denne lenken brukes til å oppfylle kravene til tilgjengelighet med et klikkområde som dekker 44px bredde og 44px høyde.
							</Paragraph>
						</div>
						<div className="component-example col-lg col-md-12 divider-left d-flex flex-column align-items-center">
							<div className="d-flex justify-content-center mb-4 flex-wrap component-wrapper">
								<Link href=" " standAlone>Stand-alone link</Link>
							</div>
							<div className="ps-4 mb-4">
								<Link href=" " icon={<ArrowRight size="20" />} standAlone>Stand-alone link with icon</Link>
							</div>
							<div className="d-flex justify-content-center mb-4 flex-wrap component-wrapper">
								<Link className="me-4" href=" " linkType="profiled" standAlone>Stand-alone link profile</Link><br />
							</div>
							<div className="d-flex justify-content-center flex-wrap negative-wrapper">
								<Link href=" " negative standAlone>Stand-alone link negative</Link>
							</div>
						</div>

						<div className="col-lg-12 mt-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={standAloneLinks} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={standAloneLinksHtml} language="html" />}
						</div>
					</div>

					<Divider light className="mb-3" />

					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Profiled link</Title>
						<div className="col-lg col-md-12">
							<Paragraph>
								Profilerte lenker brukes der man ønsker en lenke som gjør mer ut av seg enn en standard lenke. Innholdet lenken tar deg til er av stor betydning for brukeren.
								Profilert lenke kan brukes i kombinasjon med andre typer lenker for å skape hierarki. Skal aldri ta brukeren til ekstern side.
							</Paragraph>
						</div>
						<div className="component-example col-lg col-md-12 divider-left d-flex flex-column align-items-center">
							<div className="d-flex justify-content-center mb-4 flex-wrap component-wrapper">
								<Link className="me-4" href=" " linkType="profiled">This is a profiled text link</Link><br />
							</div>
							<div className="ps-4 mb-4">
								<Link className="me-4" href=" " linkType="profiled">This is a long profiled text link that will go over several lines</Link>
							</div>
							<div className="d-flex justify-content-center flex-wrap negative-wrapper">
								<Link negative className="me-4" href=" " linkType="profiled">This is a profiled text link</Link><br />
							</div>
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={profiledLinks} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={profiledLinksHtml} language="html" />}
						</div>
					</div>

					<Divider light className="mb-3" />

					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Profiled link with icon</Title>
						<div className="col-lg col-md-12">
							<Paragraph>
								Se forklaring under «Profiled Link». Ikonet brukes for å differensiere eller indikere ulik funksjonalitet.
								Ikonet skal alltid gi brukeren økt forståelse for lenkens funksjon. Skal aldri ta brukeren til ekstern side.
							</Paragraph>
						</div>
						<div className="component-example col-lg col-md-12 divider-left d-flex flex-column align-items-center">
							<div className="d-flex justify-content-center mb-4 flex-wrap component-wrapper">
								<Link className="me-4" href=" " icon={<ArrowRight size="20" />} linkType="profiled">This is a profiled link with icon</Link><br />
							</div>
							<div className="ps-4 mb-4">
								<Link className="me-4" href=" " icon={<ArrowRight size="20" />} linkType="profiled">This is a long profiled link with icon that will go over several lines</Link>
							</div>
							<div className="d-flex justify-content-center flex-wrap negative-wrapper">
								<Link negative className="me-4" href=" " icon={<ArrowRight size="20" />} linkType="profiled">This is a profiled link with icon</Link><br />
							</div>
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={profiledLinksIcon} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={profiledLinksIconHtml} language="html" />}
						</div>
					</div>

					<Divider light className="mb-3" />

					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Header link</Title>
						<div className="col-lg col-md-12">
							<Paragraph>
								Tittellenke brukes der det er naturlig at tittelen er lenken. For eksempel kan dette brukes i innganger til artikler hvor titlene er beskrivende for innholdet.
								Tittellenke kan også brukes der det er vanskelig å finne lenketekst som erstatter «Les mer».
							</Paragraph>
						</div>
						<div className="component-example col-lg col-md-12 divider-left d-flex flex-column align-items-center">
							<div className="d-flex justify-content-center mb-4 flex-wrap component-wrapper">
								<Link href=" " linkType="header">This is a header link</Link>
							</div>
							<div className="ps-4 mb-4">
								<Link href=" " linkType="header" headingSize={3}>This is a header link with heading 3</Link>
							</div>
							<div className="ps-4 mb-4">
								<Link href=" " linkType="header">This is a long header link that will go over several lines</Link>
							</div>
							<div className="d-flex justify-content-center flex-wrap negative-wrapper">
								<Link href=" " linkType="header" negative>This is a header link</Link>
							</div>
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={headerLinks} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={headerLinksHtml} language="html" />}
						</div>
					</div>

					<Divider light className="mb-3" />

					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Link list</Title>
						<div className="col-lg col-md-12">
							<Paragraph>
								Standard lenke og standard lenke med ikon kan settes sammen til lenkeliste. Lenkelister brukes uten kulepunkter.
							</Paragraph>
						</div>
						<div className="component-example col-lg col-md-12 divider-left d-flex flex-column align-items-center">
							<div className="d-flex justify-content-center mb-4 flex-wrap component-wrapper">
								<Link href=" ">This is a clickable text link in a link list</Link>
								<Link href=" ">This is a clickable text link in a link list</Link><br />
								<Link href=" ">This is a clickable text link in a link list</Link><br />
							</div>
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={linkList} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={linkListHtml} language="html" />}
						</div>
					</div>

					<Divider light className="mb-3" />

					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Table link</Title>
						<div className="col-lg-12">
							<Paragraph>
								Tabell-lenker brukes for å kunne lenke til et lagret søk eller til en vedleggstabell inne i en brødtekst. Disse lenkene går ut av den siden man er inne på.
							</Paragraph>
						</div>

						<Divider light className="mb-3" />

						<div className="component-example col-lg-12 mb-3">
							<div className="component-wrapper">
								<TableLink text="Tabell 1" href="" description="Gjennomsnittspris i fritt salg på eid tomt i 100-meterbeltet. 2015-2108." />
								<TableLink text="Tabell 2" href="" description="Gjennomsnittspris i fritt salg på eid tomt i 100-meterbeltet. 2015-2108." />
							</div>
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={tableLink} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={tableLinkHtml} language="html" />}
						</div>
					</div>

					<Divider light className="mb-3" />

					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Category Link</Title>
						<div className="col-lg col-md-12">
							<Paragraph>
								Category link brukes for å fremheve innganger til et neste steg i navigasjonen på nettsiden. De brukes primært på veien fra et hovedemne til et delemne på ssb.no.
							</Paragraph>
						</div>
						<div className="component-example col-lg col-md-12 divider-left d-flex flex-column align-items-center">
							<CategoryLink className="no-minwidth" href="" titleText="Category link with description" subText="Description goes here" />
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={categoryLinks} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={categoryLinksHtml} language="html" />}
						</div>
					</div>

				</div>
			)}

			{activeTab === '/rationale' && (
				<div className="mt-3">
					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Farge</Title>
						<div className="col-lg col-md-12">
							<Paragraph>
								Fargen på lenker er SSB grønn 4. Denne fargen er valgt for å passe inn i helheten i  designsystemet,
								og samtidig lære brukeren at grønn farge alltid er klikkbart på ssb.no.
							</Paragraph>
						</div>
					</div>
				</div>
			)}

			{activeTab === '/props' && (
				<div>
					<Title size={2} className="mb-3">Props Link</Title>
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
								<td><code>ariaLabel</code></td>
								<td>string</td>
								<td>Defines a string value that describe the link if no link text</td>
							</tr>
							<tr>
								<td><code>children</code></td>
								<td>node</td>
								<td>Required. Something that renders to wrap the link around</td>
							</tr>
							<tr>
								<td><code>className</code></td>
								<td>string</td>
								<td>Optional container class</td>
							</tr>
							<tr>
								<td><code>headingSize</code></td>
								<td>1, 2, 3, 4, 5 or 6</td>
								<td>Changes header element size for header links</td>
							</tr>
							<tr>
								<td><code>href</code></td>
								<td>string</td>
								<td>Required. Destination for navigation</td>
							</tr>
							<tr>
								<td><code>icon</code></td>
								<td>node</td>
								<td>Renders an icon</td>
							</tr>
							<tr>
								<td><code>isExternal</code></td>
								<td>bool</td>
								<td>Will make the link open in new tab. Defaults to <code>false</code></td>
							</tr>
							<tr>
								<td><code>linkType</code></td>
								<td>string</td>
								<td>
									Changes the style. Can be &apos;regular&apos;, &apos;profiled&apos;, or &apos;header&apos;.
									Defaults to &apos;regular&apos;.
								</td>
							</tr>
							<tr>
								<td><code>negative</code></td>
								<td>bool</td>
								<td>Will change component style. Defaults to <code>false</code></td>
							</tr>
							<tr>
								<td><code>tabIndex</code></td>
								<td>number</td>
								<td>Tab index for focus</td>
							</tr>
							<tr>
								<td><code>title</code></td>
								<td>string</td>
								<td>The title attribute is used to provide additional information</td>
							</tr>
							<tr>
								<td><code>onClick</code></td>
								<td>function</td>
								<td>Callback for anchor click</td>
							</tr>
							<tr>
								<td><code>standAlone</code></td>
								<td>bool</td>
								<td>Resizing of a stand alone link to meet accessibility requirements</td>
							</tr>
						</tbody>
					</table>

					<Divider className="mb-4" light />

					<Title size={2}>Props TableLink</Title>
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
								<td><code>className</code></td>
								<td>string</td>
								<td>Optional container class</td>
							</tr>
							<tr>
								<td><code>description</code></td>
								<td>string</td>
								<td>Required. Description for tablelink</td>
							</tr>
							<tr>
								<td><code>href</code></td>
								<td>string</td>
								<td>Required. Destination for navigation</td>
							</tr>
							<tr>
								<td><code>isExternal</code></td>
								<td>bool</td>
								<td>Will make the link open in new tab. Defaults to <code>true</code></td>
							</tr>
							<tr>
								<td><code>tabIndex</code></td>
								<td>number</td>
								<td>Tab index for focus</td>
							</tr>
							<tr>
								<td><code>text</code></td>
								<td>string</td>
								<td>Required. Text for tablelink, above description</td>
							</tr>
							<tr>
								<td><code>title</code></td>
								<td>string</td>
								<td>The title attribute is used to provide additional information</td>
							</tr>
							<tr>
								<td><code>ariaLabel</code></td>
								<td>string</td>
								<td>Defines a string value that describe the link</td>
							</tr>
						</tbody>
					</table>

					<Divider className="mb-4" light />

					<Title size={2}>Props CategoryLink</Title>
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
								<td><code>ariaLabel</code></td>
								<td>string</td>
								<td>Defines a string value that describe the link</td>
							</tr>
							<tr>
								<td><code>className</code></td>
								<td>string</td>
								<td>Optional container class</td>
							</tr>
							<tr>
								<td><code>titleText</code></td>
								<td>string</td>
								<td>Required. main text for CategoryLink</td>
							</tr>
							<tr>
								<td><code>href</code></td>
								<td>string</td>
								<td>Required. Destination for navigation</td>
							</tr>
							<tr>
								<td><code>tabIndex</code></td>
								<td>number</td>
								<td>Tab index for focus</td>
							</tr>
							<tr>
								<td><code>subText</code></td>
								<td>string</td>
								<td>Required. description text for CategoryLink, underneath titleText</td>
							</tr>
							<tr>
								<td><code>title</code></td>
								<td>string</td>
								<td>The title attribute is used to provide additional information</td>
							</tr>
						</tbody>
					</table>
				</div>
			)}

		</div>
	);
};

LinksInfo.defaultProps = {};

LinksInfo.propTypes = {};

export default LinksInfo;
