import React from 'react';
import { storiesOf } from '@storybook/react';
import NestedAccordion from '@molecules/NestedAccordion/NestedAccordion';
import Accordion from './Accordion';

const mockText = `This is paragraph text which explains the accordion,
 the rest of the text is just to fill it out and show the space it takes.`;

storiesOf('Molecules|Accordion', module)
	.add('Primary', () => (
		<div style={{ display: 'flex', marginTop: '10%' }}>
			<div className="col-lg-6">
				<Accordion primary header="This is a primary header">
					This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
				</Accordion>
			</div>
		</div>
	))
	.add('Primary w/ sub-header', () => (
		<div style={{ display: 'flex', marginTop: '10%' }}>
			<div className="col-lg-6">
				<Accordion primary subHeader="Sub-header" header="This is a primary header">
					This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
				</Accordion>
			</div>
		</div>
	))
	.add('Secondary w/ nested', () => (
		<div style={{ display: 'flex', marginTop: '10%' }}>
			<div className="col-lg-6">
				<Accordion header="This is a secondary header">
					<div style={{ marginBottom: '10px' }}>{mockText}</div>
					<NestedAccordion header="A nested accordion header">
						This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
					</NestedAccordion>
				</Accordion>
			</div>
		</div>
	));
