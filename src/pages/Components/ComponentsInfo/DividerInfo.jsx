import React from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Divider, LeadParagraph, Paragraph, Title } from '@statisticsnorway/ssb-component-library';

const codeExample = `
// React
<Divider dark />
<Divider light />
`;

const codeExampleHtml = `
<!-- HTML -->
<hr class="ssb-divider type-dark" />
<hr class="ssb-divider type-light" />
`;

const DividerInfo = () => (
	<div className="col-lg-12">
		<Title size={1}>Divider</Title>
		<LeadParagraph>
			Delestreker brukes for å vise horisontale linjer mellom forskjellig grupperinger av innhold.
			Det brukes oftest på sider som har mye forskjellig innhold, f.eks. forsiden, artikler, statistikker.

			{/*Divider is an element used to draw horizontal lines between different content groupings,
			used mostly on open pages that have lots of different components present, i.e. front page,
			article page, statistic page etc.*/}
		</LeadParagraph>

		<Divider className="mb-4" />

		<div className="row mb-4">
			<Title size={2} className="col-lg-12">Divider</Title>
			<div className="col-lg-6">
				<Paragraph>
					Delestreken er alltid plassert i slutten av en innholdsgruppe og før starten av neste innholdsgruppe.
					{/*The divider element is always place at the end of a content grouping and before the start of the next new grouping.*/}
				</Paragraph>
			</div>
			<div className="col-lg-6">
				<div className="mb-4"><Divider dark /></div>
				<Divider light />
			</div>
			<div className="col-lg-6">
				<CodeSnippet code={codeExample} language="jsx" />
			</div>
			<div className="col-lg-6">
				<CodeSnippet code={codeExampleHtml} language="html" />
			</div>
		</div>

		<Divider light className="mb-4" />

		<div className="row mb-4">
			<div className="col-lg-12">
				<Title size={2} className="mt-4">Props</Title>
				<table className="col-lg-12">
					<thead style={{ textAlign: 'left' }}>
						<tr>
							<th><Title size={3}>Prop name</Title></th>
							<th><Title size={3}>Type</Title></th>
							<th><Title size={3}>Description</Title></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>className</code></td>
							<td>string</td>
							<td>Optional container class</td>
						</tr>
						<tr>
							<td><code>dark</code></td>
							<td>bool</td>
							<td>Changes color of component. Defaults to true.</td>
						</tr>
						<tr>
							<td><code>light</code></td>
							<td>bool</td>
							<td>Changes color of component. Defaults to false.</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
);

export default DividerInfo;
