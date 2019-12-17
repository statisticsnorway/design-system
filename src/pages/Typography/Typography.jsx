import React from 'react';
import { LeadParagraph, Paragraph, Title } from '@statisticsnorway/ssb-component-library';

const TypographyPage = () => (
	<div className="col-lg-12">
		<Title size={1}>Typografi</Title>
		<LeadParagraph>
			Typografien er en kjernekomponent i designsystemet, ettersom den bidrar til stil og tone på nettstedet og bidrar til å bygge profil.
			SSB sitt designsystem bruker skrifttypene Roboto, Roboto condensed og Opens Sans. Disse skrifttypene har en lett avrundet form,
			og gir et åpent og vennlig uttrykk.Roboto brukes for å skille ut interaksjonselementer fra vanlig tekst.
		</LeadParagraph>
		<Paragraph>
			På alle interaksjonselementer er Roboto brukt for å skille disse elementene ut fra vanlig tekst.
		</Paragraph>

		<Title size={2}>Overskrifter</Title>
		<Paragraph>Roboto og Roboto Condensed brukes for overskrifter. For tekst større enn 24, brukes Roboto Condensed. Overskrifter finnes i 6 forskjellige nivåer, fra størst til minst.</Paragraph>

		<Title size={2}>Vanlig tekst</Title>
		<Paragraph>Open Sans brukes for andre typer tekst; brødtekst (paragraph), ingress, mikrotekst etc.</Paragraph>
	</div>
);

export default TypographyPage;
