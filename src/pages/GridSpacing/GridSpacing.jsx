import React from 'react';
import { LeadParagraph, Paragraph, Title } from '@statisticsnorway/ssb-component-library';

const GridSpacing = () => (
	<div className="col-lg-12">
		<Title size={1}>Grid @ Spacing</Title>
		<LeadParagraph className="mb-4">
			Et grid er et rammeverk av kolonner og rader som gjør at man kan skape konsistente og responsive oppsett og strukturer på tvers av sidemaler,
			produkter og tjenester. Gridsystemet løfter fram sidens innhold gjennom en tydelig og strukturert oppbygging,
			noe som forenkler den visuelle navigasjonen gjennom innholdet og øker brukervennligheten.
		</LeadParagraph>

		<Title size={2}>Grid 12</Title>
		<Paragraph className="mb-4">
			SSBs gridsystem (layout grid) består av 12 kolonner på 80px, med 20px mellomrom (gutter).
			Til sammen utgjør dette 1180px. Gridet gir mange muligheter for ulike bredder og plasseringer som vist her:
		</Paragraph>

		<div className="grid-row mb-4">
			<div className="grid-column grid-12">
				<div className="grid-block">1</div>
				<div className="grid-block">1</div>
				<div className="grid-block">1</div>
				<div className="grid-block">1</div>
				<div className="grid-block">1</div>
				<div className="grid-block">1</div>
				<div className="grid-block">1</div>
				<div className="grid-block">1</div>
				<div className="grid-block">1</div>
				<div className="grid-block">1</div>
				<div className="grid-block">1</div>
				<div className="grid-block">1</div>
			</div>

			<div className="grid-column grid-6">
				<div className="grid-block">2</div>
				<div className="grid-block">2</div>
				<div className="grid-block">2</div>
				<div className="grid-block">2</div>
				<div className="grid-block">2</div>
				<div className="grid-block">2</div>
			</div>

			<div className="grid-column grid-4">
				<div className="grid-block">3</div>
				<div className="grid-block">3</div>
				<div className="grid-block">3</div>
				<div className="grid-block">3</div>
			</div>

			<div className="grid-column grid-3">
				<div className="grid-block">4</div>
				<div className="grid-block">4</div>
				<div className="grid-block">4</div>
			</div>

			<div className="grid-column grid-2">
				<div className="grid-block">6</div>
				<div className="grid-block">6</div>
			</div>

			<div className="grid-column grid-1">
				<div className="grid-block">12</div>
			</div>
		</div>

		<Title size={2}>Spacing</Title>
		<Paragraph className="mb-4">
			En bevisst og konsistent bruk av luft mellom komponentene gir en ryddig struktur og bygger hierarki på siden.
			Dette gir brukeren god oversikt over innholdet, og gjør det lettere å navigere og utføre de oppgavene brukeren kom for.
		</Paragraph>

		<Title size={2}>Baseline Grid</Title>
		<Paragraph className="mb-4">
			Vi bruker en baseline grid på 4px. Det vil si at alle mål bør kunne deles på 4.
			Padding rundt tekst måles fra default line hight for komponenter som ikke har flere tekstlinjer enn én (eks. knapp).
			Rund alltid opp til nærmeste 4px om linjeavstanden gjør at tekstboksen faller utenfor gridet.
			For komponenter med tekst som går over flere linjer skal riktig linjehøyde brukes, og padding måles ut fra dette.
		</Paragraph>

		<Title size={2}>Padding</Title>
		<Paragraph>
			Padding følger baseline grid.
		</Paragraph>
	</div>
);

export default GridSpacing;
