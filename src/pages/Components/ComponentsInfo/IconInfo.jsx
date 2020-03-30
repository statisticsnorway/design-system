import React from 'react';
import { Divider, LeadParagraph, Link, Paragraph, Title } from '@statisticsnorway/ssb-component-library';

const IconInfo = () => (
	<div className="col-lg-12">
		<Title size={1}>Icons (Ikonografi)</Title>
		<LeadParagraph>
			For å sikre konsistent design gjennom hele designsystemet, har vi valgt å bruke ikonbiblioteket “feather icon library” som leverer et sett avrundede og minimalistiske ikoner.
			Feather har mer enn 280 ulike open source ikoner som dekker de mest brukte ikonene.<br />
			Ikonene finnes her: <Link linkType="profiled" isExternal href="https://feathericons.com/">https://feathericons.com/</Link>
		</LeadParagraph>
		<Divider className="mb-4" />
		<Title size={2}>Andre ikoner</Title>
		<Paragraph>
			Hvis et spesielt ikon ikke finnes i dette biblioteket, er det greit å finne et ikon fra et annet bibliotek så lenge det har likhet med feather-ikonene:
		</Paragraph>
		<ul>
			<li>Lett avrundede hjørner</li>
			<li>Vennlig stil</li>
		</ul>

		<Paragraph>Men husk at uansett må ikonet godkjennes av ansvarlig designer før det blir implementert. Hvis det ikke er egnet, vil designer lage et.</Paragraph>
		<Paragraph>Spesielle ikoner som er unike for SSB vil våre interne designere lage. Kontakt profilansvarlig for spesielle ønsker.</Paragraph>
	</div>
);

export default IconInfo;
