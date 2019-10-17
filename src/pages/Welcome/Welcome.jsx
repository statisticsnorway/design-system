import React from 'react';
import { Title, Paragraph } from '@statisticsnorway/ssb-component-library';

const Welcome = () => (
	<div className="welcome page-wrapper">
		<section>
			<Title size={2}>Introduksjon</Title>
			<Paragraph>
				Det er en utfordring å lage en konsistent webløsning innenfor en stor organisasjon med en mengde teams som jobber med sin del
				av en webside eller et produkt. Hva vi ofte ser, er at disse løsningene har en tendens til å skille seg fra hverandre både
				visuelt og i hierarkisk layout. Med det nye designsystemet i SSB, ønsker vi å løse disse utfordringene ved å lage et
				komponentbasert designsystem som tillater hvem som helst å bruke de ulike komponenter med både ferdig design og kode slik at
				de raskt kan bygge den løsningen de ønsker. Samtidig vil de ved å bruke disse komponentene alltid sikre at resultatet blir
				enhetlig og raskt gjenkjent som levert av SSB.
			</Paragraph>

			<Title size={2}>Designere</Title>
			<Paragraph>
				Med designsystemet har vi laget komponenter som enkelt kan bli brukt for å skape et visuelt tiltalende og intuitivt design.
				Vi håper at våre komponenter også skal bidra til å bygge merkevare og identitet. Men en designsystem er aldri helt ferdig.
				Det vil alltid være i utvikling avhengig av behov, og vi tar alltid imot nye forslag og tilleggsfunksjonalitet.
				Så hvis det er noe som du ser mangler eller trenger å bli endret,
				snakk med de ansvarlige for design og send oss forslag med begrunnelse.
			</Paragraph>

			<Title size={2}>Programmerere</Title>
			<Paragraph>
				Selv om designsystemet forenkler og gjør det lettere å skape et konsistent design, betyr det ikke at designeren nå er overflødig.
				Det er fortsatt viktig å inkludere designere i designprosessen for å sjekke at sluttproduktet gir brukeren den
				optimale opplevelsen ved bruk av designet.
			</Paragraph>
		</section>
	</div>
);

export default Welcome;
