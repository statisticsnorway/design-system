import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Facebook, Twitter, Linkedin, Rss } from 'react-feather';
import { Button, Divider, Footer, LeadParagraph, Link, Paragraph, Tabs, Title } from '@statisticsnorway/ssb-component-library';
import ssbLogo from '../../../../public/ssb-logo-white.svg';

const tabItems = [
	{
		title: 'Oversikt',
		path: '/oversikt',
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

const codeTag = `
<Footer>
    <div className="top-row flex-row justify-space-between flex-wrap">
        <img src={ssbLogo} alt="ssb-logo" />
        <Button negative onClick={()=> window.scroll({ top: 0, behavior: 'smooth' })}> Til Toppen
        </Button>
    </div>

    <div className="footer-content">
        Fyll med innhold
    </div>

    <div className="bottom-row flex-row justify-space-between flex-wrap">
        <div className="global-links">
            <Link href="https://www.ssb.no/" isExternal negative>Statistisk sentralbyrå © 2019</Link>
            <Link href="https://www.ssb.no/a-aa" isExternal negative>A-Å</Link>
            <Link href="https://www.ssb.no/nettstedskart" isExternal negative>Nettstedskart</Link>
        </div>
        <div className="social-links">
            <Link href="https://www.facebook.com/statistisksentralbyra/" isExternal negative icon={<Facebook size={24} />} />
            <Link href="https://twitter.com/ssbnytt" isExternal negative icon={<Twitter size={24} />} />
            <Link href="https://www.linkedin.com/company/statistics-norway/" isExternal negative icon={<Linkedin size={24} />} />
            <Link href="https://www.ssb.no/informasjon/rss" isExternal negative icon={<Rss size={24} />} />
        </div>
    </div>
</Footer>
`;

const codeTagHtml = `
<div class="ssb-footer-wrapper">
<!-- Fill with content, as below -->
    <div class="top-row flex-row justify-space-between flex-wrap">
        {insert SSB logo} 
        <button type="button" class="ssb-btn negative secondary-btn ">Til Toppen</button>
    </div>
    <div class="footer-content">Fyll med innhold</div>
    <div class="bottom-row flex-row justify-space-between flex-wrap">
        <div class="global-links">
            <a class="ssb-link negative" href="https://www.ssb.no/" target="_blank" rel="noopener noreferrer">
                <span class="link-text">Statistisk sentralbyrå © 2019</span>
            </a>
            <a class="ssb-link negative" href="https://www.ssb.no/a-aa" target="_blank" rel="noopener noreferrer">
                <span class="link-text">A-Å</span>
            </a>
            <a class="ssb-link negative" href="https://www.ssb.no/nettstedskart" target="_blank" rel="noopener noreferrer">
                <span class="link-text">Nettstedskart</span>
            </a>
        </div>
        <div class="social-links">
            <a class="ssb-link negative with-icon" href="https://www.facebook.com/statistisksentralbyra/" target="_blank" rel="noopener noreferrer">
                <div class="icon-wrapper">
                    <i>{feather.facebook 24px}</i>
                </div>
            </a>
            <a class="ssb-link negative with-icon" href="https://twitter.com/ssbnytt" target="_blank" rel="noopener noreferrer">
                <div class="icon-wrapper">
                    <i>{feather.twitter 24px}</i>
                </div>
            </a>
            <a class="ssb-link negative with-icon" href="https://www.linkedin.com/company/statistics-norway/" target="_blank" rel="noopener noreferrer">
                <div class="icon-wrapper">
                    <i>{feather.linkedin 24px}</i>
                </div>
            </a>
            <a class="ssb-link negative with-icon" href="https://www.ssb.no/informasjon/rss" target="_blank" rel="noopener noreferrer">
                <div class="icon-wrapper">
                    <i>{feather.ress 24px}</i>
                </div>
            </a>
        </div>
    </div>
</div>
`;

const FooterInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Footer</Title>
			<LeadParagraph>
				Footer er et navigasjonselement på slutten av siden som hjelper brukeren å finne snarveier i form av linker til andre sider på nettstedet.
				Den inneholder også nyttig informasjon av typen copyright, lenker til sosiale medier etc.
				Footeren har også en “til toppen”-knapp som hjelper brukeren til å raskt kunne navigere seg tilbake til toppen av siden.
				<br />
				<br />
				Innenfor footeren er lenkene til andre sider gruppert innenfor ulike kategorier, og de presenteres med innhold “Link with icon”.
				Nede til venstre er copyright vist tydelig med en klikkbar lenke. Lenkene til sosiale medier presenteres med sine respektive ikoner ned til høyre i footeren.
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-4" />

			{activeTab === '/oversikt' && (
				<div>
					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Footer</Title>
						<div className="component-example col-lg-12">
							<Footer>
								<div className="top-row flex-row justify-space-between flex-wrap">
									<img src={ssbLogo} alt="ssb-logo" />
									<Button negative onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}>
										Til Toppen
									</Button>
								</div>

								<div className="footer-content">
									Fyll med innhold
								</div>

								<div className="bottom-row flex-row justify-space-between flex-wrap">
									<div className="global-links">
										<Link href="https://www.ssb.no/" isExternal negative>Statistisk sentralbyrå © 2019</Link>
										<Link href="https://www.ssb.no/a-aa" isExternal negative>A-Å</Link>
										<Link href="https://www.ssb.no/nettstedskart" isExternal negative>Nettstedskart</Link>
									</div>
									<div className="social-links">
										<Link href="https://www.facebook.com/statistisksentralbyra/" isExternal negative icon={<Facebook size={24} />} />
										<Link href="https://twitter.com/ssbnytt" isExternal negative icon={<Twitter size={24} />} />
										<Link href="https://www.linkedin.com/company/statistics-norway/" isExternal negative icon={<Linkedin size={24} />} />
										<Link href="https://www.ssb.no/informasjon/rss" isExternal negative icon={<Rss size={24} />} />
									</div>
								</div>
							</Footer>
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeTag} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeTagHtml} language="html" />}
						</div>
					</div>

				</div>
			)}

			{activeTab === '/rationale' && (
				<div>
					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Til toppen-knapp</Title>
						<div className="col-lg-6">
							<Paragraph>
								Grunnen til å ha en til toppen-knapp er å gi brukeren en rask måte å navigere seg tilbake ved behov.
								Dette kan være spesielt nyttig på våre nettsider da mye av vårt innhold er lange artikler.
							</Paragraph>
						</div>

						<Title size={2} className="col-lg-12">Mørk bakgrunn</Title>
						<div className="col-lg-6">
							<Paragraph>
								I motsetning til resten av siten som i hovedsak vises med hvit bakgrunn, er footeren plassert på en mørk bakgrunn.
								Dette er for å gjøre forskjellen tydelig mellom innholdet og informere brukeren om at han har nådd slutten av siden.
							</Paragraph>
						</div>
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
								<td>node</td>
								<td>All rendered content</td>
							</tr>
							<tr>
								<td><code>className</code></td>
								<td>string</td>
								<td>Optional container class</td>
							</tr>
						</tbody>
					</table>
				</div>
			)}

		</div>
	);
};

export default FooterInfo;
