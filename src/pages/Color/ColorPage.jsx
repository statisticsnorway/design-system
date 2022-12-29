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
									<div className="background" style={{ background: '#DC3400' }} />
									<div className="hex-label" style={{ border: '2px solid #DC3400' }}>#DC3400</div>
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

						<div className="col-lg-12 mb-4">
							<Title size={2}>Figurfarger</Title>
							<Paragraph className="mb-4">
								Figurer er mye brukt. Det er viktig at alle følger samme mal. Om nye figurer settes opp skal de følge spesifikasjonene under.
							</Paragraph>

							<div className="mb-4">
								<div className="color-box-grid" style={{ background: '#162327', color: '#FFFFFF' }}>
									<div className="color-name">Dark 6</div>
									<div className="hex-label">#162327</div>
									<div className="color-text">Tekst</div>
								</div>
								<div className="color-box-grid" style={{ background: '#274247', color: '#FFFFFF' }}>
									<div className="color-name">Dark 5</div>
									<div className="hex-label">#274247</div>
									<div className="color-text">Rammeverk linjer x- og y-akser</div>
								</div>
								<div className="color-box-grid" style={{ background: '#C3DCDC' }}>
									<div className="color-name">Dark 2</div>
									<div className="hex-label">#C3DCDC</div>
									<div className="color-text">Rammeverk bodylinjer</div>
								</div>
								<div className="color-box-grid" style={{ background: '#FFFFFF' }}>
									<div className="color-name">White</div>
									<div className="hex-label">#FFFFFF</div>
									<div className="color-text">Rammeverk bakgrunnsfarge</div>
								</div>
								<div className="color-box-grid" style={{ background: '#9272FC' }}>
									<div className="color-name">Purple 3</div>
									<div className="hex-label">#9272FC</div>
									<div className="color-text">Markerer verdien man peker på</div>
								</div>
							</div>

							<Paragraph className="mb-4">
								Figurfarger (UU-godkjente, nivå AA). I prioritert rekkefølge.
							</Paragraph>

							<div className="color-palette mb-4">
								<div className="color-box">
									<div className="background" style={{ background: '#1A9D49' }} />
									<div className="hex-label">#1A9D49</div>
								</div>
								<div className="color-box">
									<div className="background" style={{ background: '#075745' }} />
									<div className="hex-label">#075745</div>
								</div>
								<div className="color-box">
									<div className="background" style={{ background: '#1D9DE2' }} />
									<div className="hex-label">#1D9DE2</div>
								</div>
								<div className="color-box">
									<div className="background" style={{ background: '#0F2080' }} />
									<div className="hex-label">#0F2080</div>
								</div>
								<div className="color-box">
									<div className="background" style={{ background: '#C78800' }} />
									<div className="hex-label">#C78800</div>
								</div>
								<div className="color-box">
									<div className="background" style={{ background: '#471F00' }} />
									<div className="hex-label">#471F00</div>
								</div>
								<div className="color-box">
									<div className="background" style={{ background: '#C775A7' }} />
									<div className="hex-label">#C775A7</div>
								</div>
								<div className="color-box">
									<div className="background" style={{ background: '#A3136C' }} />
									<div className="hex-label">#A3136C</div>
								</div>
								<div className="color-box">
									<div className="background" style={{ background: '#909090' }} />
									<div className="hex-label">#909090</div>
								</div>
								<div className="color-box">
									<div className="background" style={{ background: '#000000' }} />
									<div className="hex-label">#000000</div>
								</div>
							</div>

						</div>

					</div>
				</div>
			)}

			{activeTab === '/usage' && (
				<div>
					<div className="row mb-4">
						<div className="col-lg-12 mb-4">
							<Title size={2}>Primærfarger</Title>
							<Paragraph className="mb-4">
								Dette er en oversikt over fargebruk på de vanligste komponentene og de større bruksområdene.
								For visuelle eksempler og spesifikasjoner, se hver enkelt komponent og maler.
							</Paragraph>
						</div>

						<div className="col-lg-12 mb-4">
							<Title size={3}>Bakgrunner</Title>
							<Paragraph className="mb-4">
								Bakgrunnspaletten kan benyttes til differensiering og gruppering av innhold. Hovedbakgrunnsfargen i rammeverket til SSB er hvit.
							</Paragraph>

							<div className="mb-4">
								<div className="color-box-grid" style={{ background: '#FFFFFF' }}>
									<div className="color-name">White</div>
									<div className="hex-label">#FFFFFF</div>
									<div className="color-text">Hovedbakgrunnsfarge</div>
								</div>
								<div className="color-box-grid" style={{ background: '#ECFEED' }}>
									<div className="color-name">Green 1</div>
									<div className="hex-label">#ECFEED</div>
									<div className="color-text">Inndeling og gruppering av innhold</div>
								</div>
								<div className="color-box-grid" style={{ background: '#F0F8F9' }}>
									<div className="color-name">Dark 1</div>
									<div className="hex-label">#F0F8F9</div>
									<div className="color-text">Inndeling og gruppering av innhold</div>
								</div>
								<div className="color-box-grid" style={{ background: '#274247', color: '#FFFFFF' }}>
									<div className="color-name">Dark 5</div>
									<div className="hex-label">#274247</div>
									<div className="color-text">Inndeling og gruppering av innhold</div>
								</div>
							</div>
						</div>

						<div className="col-lg-12 mb-4">
							<Title size={3}>Markering</Title>
							<Paragraph className="mb-4">
								Fargene brukes i figur og tabell samt ved tastaturnavigasjon, alltid for å markere hvor du er.
							</Paragraph>

							<div className="mb-4">
								<div className="color-box-grid" style={{ background: '#F2F0FF' }}>
									<div className="color-name">Purple 1</div>
									<div className="hex-label">#F2F0FF</div>
									<div className="color-text">Markerer rad man peker på i tabeller</div>
								</div>
								<div className="color-box-grid" style={{ background: '#9272FC' }}>
									<div className="color-name">Purple 3</div>
									<div className="hex-label">#9272FC</div>
									<div className="color-text">Markerer verdien man peker på i figurer. Markering av tastaturnavigasjon.</div>
								</div>
							</div>
						</div>

						<div className="col-lg-12 mb-4">
							<Title size={3}>Varsel</Title>
							<Paragraph className="mb-4">
								Brukes for å markere lokale feil (eks. feil utfylling av skjema) og globale feil (eks. siden fungerer ikke som den skal).
							</Paragraph>

							<div className="mb-4">
								<div className="color-box-grid" style={{ background: '#ED5935' }}>
									<div className="color-name">Red 3</div>
									<div className="hex-label">#ED5935</div>
									<div className="color-text">Varsler om feil globalt og lokalt</div>
								</div>
							</div>
						</div>

						<div className="col-lg-12 mb-4">
							<Title size={3}>Informasjon</Title>
							<Paragraph className="mb-4">
								Globale og lokale dialogbokser (eks. at en statistikk er flyttet eller ikke oppdateres lenger) som informerer brukeren om noe viktig skal bruke Blue 3.
							</Paragraph>

							<div className="mb-4">
								<div className="color-box-grid" style={{ background: '#3396D2' }}>
									<div className="color-name">Blue 3</div>
									<div className="hex-label">#3396D2</div>
									<div className="color-text">Informerer om endringer o.l. globalt og lokalt</div>
								</div>
							</div>
						</div>

						<div className="col-lg-12 mb-4">
							<Title size={3}>Tekst og lenker</Title>
							<Paragraph className="mb-4">
								Hovedtekstfargen til SSB er Dark 6. Negativ tekstfarge er hvit. I noen tilfeller brukes Dark 5,
								ofte på stor tekst (eks. nøkkeltall) hvor Dark 6 blir for voldsom.
							</Paragraph>

							<div className="mb-4">
								<div className="color-box-grid" style={{ background: '#162327', color: '#FFFFFF' }}>
									<div className="color-name">Dark 6</div>
									<div className="hex-label">#162327</div>
									<div className="color-text">Hovedtekstfarge og lenke m/ikon mot lys bakgrunn</div>
								</div>
								<div className="color-box-grid" style={{ background: '#274247', color: '#FFFFFF' }}>
									<div className="color-name">Dark 5</div>
									<div className="hex-label">#274247</div>
									<div className="color-text">Store tall (eks. nøkkeltall)</div>
								</div>
								<div className="color-box-grid" style={{ background: '#2D6975', color: '#FFFFFF' }}>
									<div className="color-name">Dark 4</div>
									<div className="hex-label">#2D6975</div>
									<div className="color-text">Placeholdertekst (eks. søkefelt)</div>
								</div>
								<div className="color-box-grid" style={{ background: '#FFFFFF' }}>
									<div className="color-name">White</div>
									<div className="hex-label">#FFFFFF</div>
									<div className="color-text">Negativ tekst og lenke m/ikon	mot mørk bakgrunn</div>
								</div>
								<div className="color-box-grid" style={{ background: '#B6E8B8' }}>
									<div className="color-name">Green 2</div>
									<div className="hex-label">#B6E8B8</div>
									<div className="color-text">Lenker u/ikon mot mørk bakgrunn</div>
								</div>
								<div className="color-box-grid" style={{ background: '#00824D', color: '#FFFFFF' }}>
									<div className="color-name">Green 4</div>
									<div className="hex-label">#00824D</div>
									<div className="color-text">Lenker u/ikon mot lys bakgrunn</div>
								</div>
							</div>
						</div>

						<div className="col-lg-12 mb-4">
							<Title size={3}>Ikoner</Title>
							<Paragraph className="mb-4">
								Ikoner skal være ensfargede. To farger kan brukes i spesielle tilfeller hvor brukeren kan ha nytte av det.
							</Paragraph>

							<div className="mb-4">
								<div className="color-box-grid" style={{ background: '#274247', color: '#FFFFFF' }}>
									<div className="color-name">Dark 5</div>
									<div className="hex-label">#274247</div>
									<div className="color-text">Ikke-klikkbart ikon mot lys bakgrunn. Klikkbart i knapp.</div>
								</div>
								<div className="color-box-grid" style={{ background: '#FFFFFF' }}>
									<div className="color-name">White</div>
									<div className="hex-label">#FFFFFF</div>
									<div className="color-text">Ikke-klikkbart ikon mot mørk bakgrunn. Klikkbart i knapp.</div>
								</div>
								<div className="color-box-grid" style={{ background: '#B6E8B8' }}>
									<div className="color-name">Green 2</div>
									<div className="hex-label">#B6E8B8</div>
									<div className="color-text">Klikkbart ikon mot mørk bakgrunn</div>
								</div>
								<div className="color-box-grid" style={{ background: '#00824D', color: '#FFFFFF' }}>
									<div className="color-name">Green 4</div>
									<div className="hex-label">#00824D</div>
									<div className="color-text">Klikkbart ikon mot lys bakgrunn</div>
								</div>
							</div>
						</div>

						<div className="col-lg-12 mb-4">
							<Title size={3}>Knapper</Title>
							<Paragraph className="mb-4">
								Aktive knapper skal være grønne. Passive bruker Dark. Se komponenten «Buttons» for nærmere fspesifikasjoner og visuelle eksempler.
							</Paragraph>

							<div className="mb-4">
								<div className="color-box-grid" style={{ background: '#274247', color: '#FFFFFF' }}>
									<div className="color-name">Dark 5</div>
									<div className="hex-label">#274247</div>
									<div className="color-text">Tekst og ikon</div>
								</div>
								<div className="color-box-grid" style={{ background: '#2D6975', color: '#FFFFFF' }}>
									<div className="color-name">Dark 4</div>
									<div className="hex-label">#2D6975</div>
									<div className="color-text">Passiv knapp mot mørk bakgrunn. Tekst og ikon</div>
								</div>
								<div className="color-box-grid" style={{ background: '#C3DCDC' }}>
									<div className="color-name">Dark 2</div>
									<div className="hex-label">#C3DCDC</div>
									<div className="color-text">Passiv knapp mot lys bakgrunn. Tekst og ikon</div>
								</div>
								<div className="color-box-grid" style={{ background: '#FFFFFF' }}>
									<div className="color-name">White</div>
									<div className="hex-label">#FFFFFF</div>
									<div className="color-text">Tekst og ikon</div>
								</div>
								<div className="color-box-grid" style={{ background: '#B6E8B8' }}>
									<div className="color-name">Green 2</div>
									<div className="hex-label">#B6E8B8</div>
									<div className="color-text">Knapp mot mørk bakgrunn. Tekst og ikon</div>
								</div>
								<div className="color-box-grid" style={{ background: '#00824D', color: '#FFFFFF' }}>
									<div className="color-name">Green 4</div>
									<div className="hex-label">#00824D</div>
									<div className="color-text">Knapp mot lys bakgrunn. Tekst og ikon</div>
								</div>
							</div>
						</div>

						<div className="col-lg-12 mb-4">
							<Title size={3}>Hover</Title>
							<Paragraph className="mb-4">
								Aktive knapper skal være grønne. Passive bruker Dark. Se komponenten «Buttons» for nærmere fspesifikasjoner og visuelle eksempler.
							</Paragraph>

							<div className="mb-4">
								<div className="color-box-grid" style={{ background: '#274247', color: '#FFFFFF' }}>
									<div className="color-name">Dark 5</div>
									<div className="hex-label">#274247</div>
									<div className="color-text">Knapper, leftside menu, drop down, tabs, search</div>
								</div>
								<div className="color-box-grid" style={{ background: '#FFFFFF' }}>
									<div className="color-name">White</div>
									<div className="hex-label">#FFFFFF</div>
									<div className="color-text">Negative buttons, pagination</div>
								</div>
								<div className="color-box-grid" style={{ background: '#B6E8B8' }}>
									<div className="color-name">Green 2</div>
									<div className="hex-label">#B6E8B8</div>
									<div className="color-text">Lenke mot mørk bakgrunn, word explanation</div>
								</div>
								<div className="color-box-grid" style={{ background: '#00824D', color: '#FFFFFF' }}>
									<div className="color-name">Green 4</div>
									<div className="hex-label">#00824D</div>
									<div className="color-text">Link (mot lys bakgrunn), menu text, input, radio button, check box, search, tags, map, cards</div>
								</div>
							</div>
						</div>

						<div className="col-lg-12 mb-4">
							<Title size={3}>Delelinjer</Title>
							<Paragraph className="mb-4">
								Det finnes mange behov for mer eller mindre tydelig deling av innhold. Hver farge har sitt bruksområde.
							</Paragraph>

							<div className="mb-4">
								<div className="color-box-grid" style={{ background: '#274247', color: '#FFFFFF' }}>
									<div className="color-name">Dark 5</div>
									<div className="hex-label">#274247</div>
									<div className="color-text">Deling mellom grupper, 1px tykk linje</div>
								</div>
								<div className="color-box-grid" style={{ background: '#C3DCDC' }}>
									<div className="color-name">Dark 2</div>
									<div className="hex-label">#C3DCDC</div>
									<div className="color-text">Deling innad i en gruppe, 1px tykk linje. Ramme cards 1px tykk.</div>
								</div>
								<div className="color-box-grid" style={{ background: '#FFFFFF' }}>
									<div className="color-name">White</div>
									<div className="hex-label">#FFFFFF</div>
									<div className="color-text">Negativ delelinje, brukes mot Dark 5 bakgrunn, 1px tykk linje</div>
								</div>
								<div className="color-box-grid" style={{ background: '#1A9D49' }}>
									<div className="color-name">Green 3</div>
									<div className="hex-label">#1A9D49</div>
									<div className="color-text">Blokkinndelinger (faktasider), kort og markering av større titler, 4 px tykk linje</div>
								</div>
							</div>
						</div>

						<div className="col-lg-12 mb-4">
							<Title size={3}>Tabeller</Title>
							<Paragraph className="mb-4">
								Tabeller er mye brukt. Det er viktig at alle følger samme mal. Om nye tabeller settes opp skal de følge spesifikasjonene under.
							</Paragraph>

							<div className="mb-4">
								<div className="color-box-grid" style={{ background: '#162327', color: '#FFFFFF' }}>
									<div className="color-name">Dark 6</div>
									<div className="hex-label">#162327</div>
									<div className="color-text">Tekst</div>
								</div>
								<div className="color-box-grid" style={{ background: '#274247', color: '#FFFFFF' }}>
									<div className="color-name">Dark 5</div>
									<div className="hex-label">#274247</div>
									<div className="color-text">Rammeverk header og ramme rundt hele tabell</div>
								</div>
								<div className="color-box-grid" style={{ background: '#62919A' }}>
									<div className="color-name">Dark 3</div>
									<div className="hex-label">#62919A</div>
									<div className="color-text">Rammeverk body</div>
								</div>
								<div className="color-box-grid" style={{ background: '#FFFFFF' }}>
									<div className="color-name">White</div>
									<div className="hex-label">#FFFFFF</div>
									<div className="color-text">Rammeverk bakgrunnsfarge</div>
								</div>
								<div className="color-box-grid" style={{ background: '#ECFEED' }}>
									<div className="color-name">Green 1</div>
									<div className="hex-label">#ECFEED</div>
									<div className="color-text">Bakgrunn annen hver rad, ved behov (alle tabeller med +5 rader)</div>
								</div>
								<div className="color-box-grid" style={{ background: '#F2F0FF' }}>
									<div className="color-name">Purple 1</div>
									<div className="hex-label">#F2F0FF</div>
									<div className="color-text">Markerer hele raden når man peker på den</div>
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
