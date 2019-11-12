import React from 'react';
import { LeadParagraph, Title } from '@statisticsnorway/ssb-component-library';

const GridSpacing = () => (
	<div className="col-lg-12">
		<Title size={1}>Avstand og luft</Title>
		<LeadParagraph>
			Komponenters plassering i forhold til hverandre gir visuell hjelp til hvordan elementene fungerer.
			I vårt designsystem bruker vi et 10-punktssystem som gjør det enklere for utvikleren å anslå avstanden mellom elementene i stedet for å tilfeldig gjette hva det kan være.
		</LeadParagraph>
	</div>
);

export default GridSpacing;
