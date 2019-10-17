import React from 'react';
import { Paragraph, Title } from '@statisticsnorway/ssb-component-library';

const Templates = () => (
	<div className="templates page-wrapper">
		<section>
			<Title size={2}>Templates</Title>
			<Paragraph>
				One of the navigation category which provides an overview of available templates.
				Templates helps to get projects up and running faster. It also helps to create a consistent experience for the user of the system.
			</Paragraph>

			<Title size={3}>Typography</Title>
			<Title size={4}>Overview</Title>
			<Paragraph>
				Typography is an important core component of the Design system as it conveys the look and feel of the website and the brand identity.
				In the SSB Design System Roboto, Roboto Condensed and Open Sans are used.
				These fonts have a slightly rounded form and gives an open and kind expression.
			</Paragraph>
			<Paragraph>
				On all UI elements, Roboto is used in order to differentiate UI elements with regular text,
				making it easier to differentiate these elements from each other.
			</Paragraph>

			<Title size={4}>Headings</Title>
			<Paragraph>
				Roboto and Roboto Condensed are only used for headings. For text size 24 and above, Roboto Condensed is used.
				Headings are divided into 6 different levels, going from largest to smallest.
			</Paragraph>

			<Title size={4}>Paragraph</Title>
			<Paragraph>
				Open Sans font is only used for regular paragraph text.
			</Paragraph>

			<Title size={3}>Color Palette</Title>
			<Title size={4}>Overview</Title>
			<Paragraph>
				Color palette is a selection of colors chosen to be used within the design system to convey the design and the branding of SSB.
				All the color pairings have been carefully chosen to match each other and fulfilling the UU requirements.
			</Paragraph>

			<Title size={4}>Primary palettes</Title>
			<Paragraph>
				These colors displayed here are colors that has been used mostly throughout the
				designing of different components within the design system.
			</Paragraph>

			<Title size={4}>Secondary palettes</Title>
			<Paragraph>
				The secondary palettes consist of a range of colors that has been selected to be used most in the
				context of diagrams which requires a wide range of different colors for differentiation.
				These colors should in most cases not be used within the different components of the design system.
			</Paragraph>
		</section>
	</div>
);

export default Templates;
