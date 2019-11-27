import React, { useState } from 'react';
import { Divider, LeadParagraph, Paragraph, Tabs, Title } from '@statisticsnorway/ssb-component-library';

const tabItems = [
	{
		title: 'Oversikt',
		path: '/overview',
	}, {
		title: 'Bruktsområder',
		path: '/usage',
	},
];

const ColorPage = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const tabClicked = e => changeTab(e);

	return (
		<div className="color-page col-lg-12">
			<Title size={1}>Farger</Title>
			<LeadParagraph>
				Den digitale fargepaletten skal bidra til en konsistent opplevelse på tvers av alle digitale flater.
				Fargene er basert på farger i SSBs visuelle identitet, og er nøye valgt ut for å stå godt til hverandre.
				«Bruksområder» beskriver sammenstillinger som tilfredsstiller WCAG-kravene (UU).
				Minimum kontrast for tekst er 4.5:1. Grafiske (UI) elementer som er viktige for oppfattelse av innhold og navigasjon skal ha min. 3:1.
			</LeadParagraph>

			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-4" />
			{activeTab === '/overview' && (
				<div>
					<div className="row mb-4">
						<div className="col-lg-12 mb-4">
							<Title size={2}>Primærfarger</Title>
							<Paragraph className="mb-4">
								Grønn, Mørk og hvit skal være bærende farger i våre digitale løsninger.
								Primærfargene brukes på større flater og/eller på komponenter som gjenbrukes ofte for å skape et konsistent og identitetsbærende uttrykk.
								Paletten legger til rette for et dynamisk uttrykk gjennom sammenstillinger med gode kontraster for å tilfredsstille WCAG (UU).
							</Paragraph>

							<div className="color-example-grid mb-4">
								<div className="color-box">
									<div className="background" style={{ background: '#00824D' }} />
									<div className="hex-label" style={{ border: '2px solid #00824D' }}>#00824D</div>
									<div className="name-label">Green 4</div>
								</div>
								<div className="color-box">
									<div className="background" style={{ background: '#ECFEED' }} />
									<div className="hex-label" style={{ border: '2px solid #ECFEED' }}>#ECFEED</div>
									<div className="name-label">Green 1</div>
								</div>
								<div className="color-box">
									<div className="background" style={{ background: '#FFFFFF', border: '2px solid #F0F8F9', borderBottom: 'none' }} />
									<div className="hex-label" style={{ border: '2px solid #F0F8F9' }}>#FFFFFF</div>
									<div className="name-label">White</div>
								</div>
								<div className="color-box">
									<div className="background" style={{ background: '#F0F8F9' }} />
									<div className="hex-label" style={{ border: '2px solid #F0F8F9' }}>#F0F8F9</div>
									<div className="name-label">Dark 1</div>
								</div>
								<div className="color-box">
									<div className="background" style={{ background: '#274247' }} />
									<div className="hex-label" style={{ border: '2px solid #274247' }}>#274247</div>
									<div className="name-label">Dark 5</div>
								</div>
							</div>
						</div>

						<div className="col-lg-12 mb-4">
							<Title size={2}>Støttefarger</Title>
							<Paragraph className="mb-4">
								Fargene er en utvidelse av primærpaletten og brukes kun ved behov; til mindre flater som skillelinjer, tynne rammer, fanemarkering og lignende.
							</Paragraph>

							<div className="color-example-grid small mb-4">
								<div className="color-box">
									<div className="background" style={{ background: '#1A9D49' }} />
									<div className="hex-label" style={{ border: '2px solid #1A9D49' }}>#1A9D49</div>
									<div className="name-label">Green 3</div>
								</div>
								<div className="color-box">
									<div className="background" style={{ background: '#B6E8B8' }} />
									<div className="hex-label" style={{ border: '2px solid #B6E8B8' }}>#B6E8B8</div>
									<div className="name-label">Green 2</div>
								</div>
								<div className="color-box">
									<div className="background" style={{ background: '#C3DCDC', border: '2px solid #C3DCDC' }} />
									<div className="hex-label" style={{ border: '2px solid #C3DCDC' }}>#C3DCDC</div>
									<div className="name-label">Dark 2</div>
								</div>
								<div className="color-box">
									<div className="background" style={{ background: '#62919A' }} />
									<div className="hex-label" style={{ border: '2px solid #62919A' }}>#62919A</div>
									<div className="name-label">Dark 3</div>
								</div>
								<div className="color-box">
									<div className="background" style={{ background: '#2D6975' }} />
									<div className="hex-label" style={{ border: '2px solid #2D6975' }}>#2D6975</div>
									<div className="name-label">Dark 4</div>
								</div>
							</div>
						</div>

						<div className="col-lg-12 mb-4">
							<Title size={2}>Funksjonsfarger</Title>
							<Paragraph className="mb-4">
								Funksjonsfargene har spesifikke bruksområder. Lilla gir brukeren god oversikt ved å markere for eksempel et årstall i en figur eller en rad i en tabell ved hover.
								Rødt signaler til brukeren at hun/han har gjort en feil eller at det er lokal eller global feil på siden.
								Blått gir nyttig informasjon, for eksempel at en statistikk er flyttet eller ikke lenger blir oppdatert.
								For å beholde sin «klare tale» skal fargene aldri brukes til annet enn det de er dedikert til.
							</Paragraph>

							<div className="color-example-grid smallest mb-4">
								<div className="color-box">
									<div className="background" style={{ background: '#F2F0FF' }} />
									<div className="hex-label" style={{ border: '2px solid #F2F0FF' }}>#F2F0FF</div>
									<div className="name-label">Purple 1</div>
								</div>
								<div className="color-box">
									<div className="background" style={{ background: '#9272FC' }} />
									<div className="hex-label" style={{ border: '2px solid #9272FC' }}>#9272FC</div>
									<div className="name-label">Purple 3</div>
								</div>
								<div className="color-box">
									<div className="background" style={{ background: '#ED5935' }} />
									<div className="hex-label" style={{ border: '2px solid #ED5935' }}>#ED5935</div>
									<div className="name-label">Red 3</div>
								</div>
								<div className="color-box">
									<div className="background" style={{ background: '#3396D2' }} />
									<div className="hex-label" style={{ border: '2px solid #3396D2' }}>#3396D2</div>
									<div className="name-label">Blue 3</div>
								</div>
								<div className="color-box">
									<div className="background" style={{ background: '#162327' }} />
									<div className="hex-label" style={{ border: '2px solid #162327' }}>#162327</div>
									<div className="name-label">Dark 6</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ColorPage;
