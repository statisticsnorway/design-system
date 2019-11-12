import React from 'react';
import { LeadParagraph, Paragraph, Title } from '@statisticsnorway/ssb-component-library';

const ColorPage = () => (
	<div className="col-lg-12">
		<Title size={1}>Farger</Title>
		<LeadParagraph>Fargepaletten er et utvalg farger som er valgt for å brukes i designsystemet for å forsterke design og merkevaren SSB.
			Alle fargesammensettinger har blitt nøye utvalgt for å matche hverandre og tilfredsstille universell utforming.
		</LeadParagraph>
		<Title size={2}>Primærfarger</Title>
		<Paragraph>Disse fargene er basisfarger som brukes gjennom hele designet, på de ulike komponentene i designsystemet.</Paragraph>

		<Title size={2}>Sekundærfarger (figurfarger)</Title>
		<Paragraph>Sekundærfargene består av et utvalg farger som først og fremst brukes på figurer som krever en større variasjon og utvalg i fargeutvalg og differensiering.
			Disse fargene skal vanligvis ikke brukes på andre komponenter i designsystemet.
		</Paragraph>
	</div>
);

export default ColorPage;
