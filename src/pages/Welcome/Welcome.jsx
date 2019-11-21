import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Title, Paragraph } from '@statisticsnorway/ssb-component-library';
import { Mail } from 'react-feather';
import usageIllustration from '../../../public/customIcons/illustrasjon-bruk.svg';
import componentsIllustration from '../../../public/customIcons/illustrasjon-komponenter.svg';
import contactIllustration from '../../../public/customIcons/illustrasjon-kontakt.svg';

const Welcome = () => (
	<div className="welcome-page page-wrapper">
		<section className="offset-lg-1">
			<div className="row mega-margin">
				<div className="col-lg-6 d-flex flex-column justify-content-end align-items-start">
					<Title size={2}>Designsystemets komponenter</Title>
					<Paragraph>
						Designsystemet er komponentbasert og skal brukes av alle som jobber med digitale produkter og tjenester for SSB.
						Her finner du komponenter som bidrar til å bygge merkevare, identitet og et intuitivt og brukervennlig design.
						Alle komponenter kommer ferdig designet, kodet og UU-sjekket slik at det raskt kan bygges helhetlige løsninger, uansett hvilket team eller prosjekt man jobber for.
					</Paragraph>
					<div><NavLink to="/components"><Button primary onClick={() => {}}>Se alle komponenter</Button></NavLink></div>
				</div>
				<div className="col-lg-6 d-flex flex-column justify-content-end align-items-start">
					<img className="paragraph-illustration" src={componentsIllustration} alt="Components" />
				</div>
			</div>

			<div className="row mega-margin">
				<div className="col-lg-6 d-flex flex-column justify-content-end align-items-start">
					<img className="paragraph-illustration" src={usageIllustration} alt="Usage" />
				</div>
				<div className="col-lg-6 d-flex flex-column justify-content-end align-items-start">
					<Title size={2}>Designsystemet i bruk</Title>
					<Paragraph>
						Ved oppstart av et nytt prosjekt anbefaler vi at de eksisterende sidemalene brukes som inspirasjon.
						En designer skal sikre riktig bruk av komponentene slik at sluttproduktet/-tjenesten dekker brukerens behov,
						har god brukervennlighet og representerer SSB på en tillitsvekkende måte.
						Det er derfor viktig å inkludere designer tidlig i prosessen.
					</Paragraph>
					<NavLink to="/templates"><Button onClick={() => {}}>Se alle sidemaler</Button></NavLink>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-6 d-flex flex-column justify-content-end align-items-start">
					<Title size={2}>Tilbakemelding og kontakt</Title>
					<Paragraph>
						Et designsystem er alltid i utvikling. Ulike behov, skiftende trender, endringer i WCAG (UU) og visuell profil samt brukertesting vil kunne føre til endringer.
						Kontakt alltid ansvarlig designer for designsystemet dersom du ser behov som ikke er dekket, eller en komponent som må tilpasses ditt prosjekt.
						Nye komponenter og maler skal ikke lanseres uten at de er klarert av designansvarlig for designsystemet.
					</Paragraph>
					<Button onClick={() => {}} icon={<Mail size={16} />}>Kontakt designansvarlig</Button>
				</div>
				<div className="col-lg-6 d-flex flex-column justify-content-end align-items-start">
					<img className="paragraph-illustration" src={contactIllustration} alt="Contact" />
				</div>
			</div>
		</section>
	</div>
);

export default Welcome;
