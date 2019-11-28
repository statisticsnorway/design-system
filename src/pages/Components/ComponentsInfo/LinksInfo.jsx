import React, { useState } from 'react';
import { ArrowRight } from 'react-feather';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Divider, LeadParagraph, Link, Paragraph, Tabs, Title } from '@statisticsnorway/ssb-component-library';

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
<Link href="">Link text</Link>
<Link negative href="">Link text</Link>
`;

const ordinaryLinkHtml = `
<a class="ssb-link" href=" " target="" rel="">
  <span class="link-text">A regular link</span>
</a>

<a class="ssb-link negative" href=" " target="" rel="">
  <span class="link-text">A regular link</span>
</a>
`;

const iconLinks = `
<Link href=" " icon={<ArrowRight size="20" />}>Link text</Link>
<Link negative href=" " icon={<ArrowRight size="20" />}>Link text</Link>
`;

const iconLinksHtml = `
<a class="ssb-link" href=" " target="" rel="">
  {insert icon here}
  <span class="link-text">A regular link</span>
</a>

<a class="ssb-link negative" href=" " target="" rel="">
  {insert icon here}
  <span class="link-text">A regular link</span>
</a>
`;

const profiledLinks = `
<Link href=" " linkType="profiled">Link text</Link>
<Link negative href=" " linkType="profiled">Link text</Link>
<Link href=" " linkType="profiled" icon={<ArrowRight size="20" />}>Link text</Link>
<Link negative href=" " linkType="profiled" icon={<ArrowRight size="20" />}>Link text</Link>
`;

const profiledLinksHtml = `
<a class="ssb-link" href=" " target="" rel="">
  <span class="link-text">A regular link</span>
</a>

<a class="ssb-link negative" href=" " target="" rel="">
  <span class="link-text">A regular link</span>
</a>

<a class="ssb-link" href=" " target="" rel="">
  {insert icon here}
  <span class="link-text">A regular link</span>
</a>

<a class="ssb-link negative" href=" " target="" rel="">
  {insert icon here}
  <span class="link-text">A regular link</span>
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
				Lenker stiles slik at det er lett å forstå at de er hyperlenker til andre sider. De følger stilen til tekst de står sammen med i paragrafen,
				men er understreket og har grønn farge for å differensieres fra teksten. Lenker kan også bli brukt i andre former som lenkelister, profilerte lenker og lenker med ikon.
			</LeadParagraph>

			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-3" />
			{activeTab === '/overview' && (
				<div>
					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Lenker</Title>
						<div className="col-lg-6">
							<Paragraph>
								Ordinære lenker kan blir brukt både i løpende tekst og som frittstående lenker.
							</Paragraph>
						</div>
						<div className="col-lg-6 divider-left d-flex flex-column align-items-center">
							<div className="d-flex justify-content-center mb-4 flex-wrap component-wrapper">
								<Link href=" ">Link text</Link>
							</div>
							<div className="d-flex justify-content-center flex-wrap negative-wrapper">
								<Link href=" " negative>Link text</Link>
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
						<Title size={2} className="col-lg-12">Lenker med ikon</Title>
						<div className="col-lg-6">
							<Paragraph>
								Lenker med ikon brukes vanligvis ikke i løpende tekst, men gjerne på frittstående lenker.
								Men de kan også blir brukt sammen med andre lenker med ikon for å differensiere eller indikere forskjellig funksjonalitet.
							</Paragraph>
						</div>
						<div className="col-lg-6 divider-left d-flex flex-column align-items-center">
							<div className="d-flex justify-content-center mb-4 flex-wrap component-wrapper">
								<Link href=" " icon={<ArrowRight size="20" />}>Link text</Link>
							</div>
							<div className="d-flex justify-content-center flex-wrap negative-wrapper">
								<Link negative href=" " icon={<ArrowRight size="20" />}>Link text</Link>
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
						<Title size={2} className="col-lg-12">Profilerte lenker med og uten ikon</Title>
						<div className="col-lg-6">
							<Paragraph>
								Profilerte lenker brukes for å presisere hierarki og de kan bli brukt i kombinasjon med andre typer lenker for å fremheve viktighet.
							</Paragraph>
						</div>
						<div className="col-lg-6 divider-left d-flex flex-column align-items-center">
							<div className="d-flex justify-content-center mb-4 flex-wrap component-wrapper">
								<Link className="mr-4" href=" " linkType="profiled">Link text</Link><br />
								<Link href=" " linkType="profiled" icon={<ArrowRight size="20" />}>Link text</Link>
							</div>
							<div className="d-flex justify-content-center flex-wrap negative-wrapper">
								<Link className="mr-4" negative href=" " linkType="profiled">Link text</Link><br />
								<Link negative href=" " linkType="profiled" icon={<ArrowRight size="20" />}>Link text</Link>
							</div>
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={profiledLinks} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={profiledLinksHtml} language="html" />}
						</div>
					</div>
				</div>
			)}

			{activeTab === '/rationale' && (
				<div className="mt-3">
					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Farge</Title>
						<div className="col-lg-6">
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
					<Title size={2} className="mb-3">Props</Title>
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
