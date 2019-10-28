import React from 'react';
import { Paragraph, Title } from '@statisticsnorway/ssb-component-library';

const Templates = () => (
	<div className="templates page-wrapper">
		<section>
			<Title size={2}>Templates/maler</Title>
			<Paragraph>
				Oversikt over tilgjengelige maler. Disse hjelper prosjektet med å komme i gang raskere. De bidrar også til en konsistent opplevelse for brukeren av systemet.
			</Paragraph>

			<Title size={3}>Avstand og luft</Title>
			<Paragraph>
				Komponenters plassering i forhold til hverandre gir visuell hjelp til hvordan elementene fungerer. I vårt designsystem bruker vi et 10-punktssystem som gjør det enklere for utvikleren å anslå avstanden mellom elementene i stedet for å tilfeldig gjette hva det kan være.
			</Paragraph>

			<Title size={3}>Typografi</Title>
			<Paragraph>
				Typography is an important core component of the Design system as it conveys the look and feel of the website and the brand identity.
				In the SSB Design System Roboto, Roboto Condensed and Open Sans are used.
				These fonts have a slightly rounded form and gives an open and kind expression.
			</Paragraph>
			<Paragraph>
				On all UI elements, Roboto is used in order to differentiate UI elements with regular text,
				making it easier to differentiate these elements from each other.
			</Paragraph>

			<Title size={4}>Overskrifter</Title>
			<Paragraph>
				Roboto og Roboto Condensed brukes for overskrifter. For tekst større enn 24, brukes Roboto Condensed. Overskrifter finnes i 6 forskjellige nivåer, fra størst til minst.
			</Paragraph>

			<Title size={4}>Vanlig tekst</Title>
			<Paragraph>
				Open Sans brukes for andre typer tekst; brødtekst (paragraph), ingress, mikrotekst etc.
			</Paragraph>

			<Title size={3}>Farger</Title>
			<Paragraph>
				Fargepaletten er et utvalg farger som er valgt for å brukes i designsystemet for å forsterke design og merkevaren SSB. Alle fargesammensettinger har blitt nøye utvalgt for å matche hverandre og tilfredsstille universell utforming.
			</Paragraph>
			<Title size={4}>Primærfarger</Title>
			<Paragraph>
				Disse fargene er basisfarger som brukes gjennom hele designet, på de ulike komponentene i designsystemet.
			</Paragraph>

			<Title size={4}>Sekundærfarger (figurfarger)</Title>
			<Paragraph>
				Sekundærfargene består av et utvalg farger som først og fremst brukes på figurer som krever en større variasjon og utvalg i fargeutvalg og differensiering. Disse fargene skal vanligvis ikke brukes på andre komponenter i designsystemet.
			</Paragraph>
		</section>
	</div>
);

export default Templates;
