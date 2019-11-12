import React from 'react';
import { LeadParagraph, Link, Paragraph, Title } from '@statisticsnorway/ssb-component-library';

const TypographyPage = () => (
	<div className="col-lg-12">
		<Title size={1}>Typografi</Title>
		<LeadParagraph>
			Typography is an important core component of the Design system as it conveys the look and feel of the website and the brand identity.
			In the SSB Design System Roboto, Roboto Condensed and Open Sans are used.
			These fonts have a slightly rounded form and gives an open and kind expression.
		</LeadParagraph>
		<Paragraph>
			On all UI elements, Roboto is used in order to differentiate UI elements with regular text,
			making it easier to differentiate these elements from each other.
		</Paragraph>

		<Title size={2}>Overskrifter</Title>
		<Paragraph>Roboto og Roboto Condensed brukes for overskrifter. For tekst større enn 24, brukes Roboto Condensed. Overskrifter finnes i 6 forskjellige nivåer, fra størst til minst.</Paragraph>

		<Title size={2}>Vanlig tekst</Title>
		<Paragraph>Open Sans brukes for andre typer tekst; brødtekst (paragraph), ingress, mikrotekst etc.</Paragraph>

		<Title size={2}>Ikonografi</Title>
		<Paragraph>For å sikre konsistent design gjennom hele designsystemet, har vi valgt å bruke ikonbiblioteket “feather icon library” som leverer et sett avrundede og minimalistiske ikoner.
			Feather har mer enn 280 ulike open source ikoner som dekker de mest brukte ikonene.
			Ikonene finnes her: <Link isExternal href="https://feathericons.com/">https://feathericons.com/</Link>
		</Paragraph>
		<Paragraph>
			Hvis et spesielt ikon ikke finnes i dette biblioteket, er det greit å finne et ikon fra et annet bibliotek så lenge det har likhet med feather-ikonene:
			<ul>
				<li>Lett avrundede hjørner</li>
				<li>Vennlig stil</li>
			</ul>
		</Paragraph>
		<Paragraph>Men husk at uansett må ikonet godkjennes av ansvarlig designer før det blir implementert. Hvis det ikke er egnet, vil designer lage et.</Paragraph>
		<Paragraph>Spesielle ikoner som er unike for SSB vil våre interne designere lage. Kontakt profilansvarlig for spesielle ønsker.</Paragraph>
	</div>
);

export default TypographyPage;
