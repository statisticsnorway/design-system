import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Divider, Input, LeadParagraph, Link, Paragraph, Tabs, Text, TextArea, Title } from '@statisticsnorway/ssb-component-library';

const tabItems = [
	{
		title: 'Oversikt',
		path: '/overview',
	}, {
		title: 'Begrunnelse',
		path: '/rationale',
	}, {
		title: 'Props',
		path: '/props',
	},
];

const tabCode = [
	{
		title: 'React',
		path: '/react',
	}, {
		title: 'Html',
		path: '/html',
	},
];

const codeExample = `
<Input
  id="input1"
  label="Label"
  value={someValue}
  handleChange={handleChange}
/>
`;

const codeExampleHtml = `
<div class="ssb-input">
  <label for="input1">Label</label>
  <div class="input-wrapper">
    <input id="input1" value="value1" />
  </div>
</div>
`;

const codeExampleError = `
<Input
  id="input1"
  error
  errorMessage="Dette er feil"
  label="Label"
/>
`;

const codeExampleErrorHtml = `
<div class="ssb-input error">
  <label for="input1">Label</label>
  <div class="input-wrapper">
    <input id="input1" value="option1" />
    <div class="icon-wrapper">
      <icon>alert</icon>
    </div>
  </div>
  <span class="ssb-form-error">Dette er feil</span>
</div>
`;

const InputInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Inputfelt</Title>
			<LeadParagraph>
				Inputfelter er elementer som tillater at brukeren legger inn innhold. Det skal være en ledetekst (etikett)
				som forteller brukeren hva slags informasjon han skal legge inn i feltet.
				En placeholder tekst (erstatningstekst) kan blir brukt inne i inputfeltet hvis ledetekst ikke er nødvendig, se for eksempel på søkeboks.
			</LeadParagraph>

			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-4" />

			{activeTab === '/overview' && (
				<div>
					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Input</Title>
						<div className="col-lg-6">
							<Paragraph>
								Inputfelter har 3 ulike statuser; ikke valgt, hover (musepeker over den) og valgt.
								Når feltet ikke er valgt har det en tynn rektangulær mørk ramme. Når brukeren peker over
								den med musepekeren, blir rammen grønn. Når feltet er klikket på blir rammen grønn og tykkere,
								samtidig som det vises en blinkende strek inne i feltet for å indikere at brukeren kan starte å skrive.
							</Paragraph>
						</div>
						<div className="col-lg-6 divider-left d-flex flex-column align-items-center">
							<div className="d-flex justify-content-center mb-4 flex-wrap component-wrapper">
								<Input label="Label" />
							</div>
							<div className="d-flex justify-content-center flex-wrap negative-wrapper">
								<Input negative label="Label" />
							</div>
						</div>
						<div className="col-lg-12 mt-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeExample} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeExampleHtml} language="html" />}
						</div>
					</div>

					<Divider light className="mb-4" />

					<Title size={2}>Textarea</Title>
					<Paragraph className="mb-4">
						Samme stil som inputfelt, men har plass til flere rader med tekst. Brukes for eksempel i spørreskjemaer og for tilbakemelding og annen friere tekstinput.
					</Paragraph>

					<div className="row">
						<div style={{ marginLeft: 0, padding: '32px 18px' }} className="d-flex col-lg-6 justify-content-center flex-wrap component-wrapper">
							<TextArea label="Label" />
						</div>
						<div style={{ marginLeft: 0 }} className="d-flex col-lg-6 justify-content-center flex-wrap negative-wrapper">
							<TextArea negative label="Label" />
						</div>
						<div className="col-lg-12 mt-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeExampleError} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeExampleErrorHtml} language="html" />}
						</div>
					</div>

					<Divider light className="mb-4" />

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Input error</Title>
						<div className="col-lg-6">
							<Paragraph>
								Når en feil oppstår i et inputfelt, blir feltet endret til feilinformasjon.
								Rammen på feltet vil bli rød og fetere. Til høyre for feltet vil et feilikon vises.
								Under feltet vil det vises en feilmeldingstekst som forklarer hvordan man kan løse feilen.
							</Paragraph>
						</div>
						<div className="col-lg-6 divider-left d-flex flex-column align-items-center">
							<div className="d-flex justify-content-center mb-4 flex-wrap component-wrapper">
								<Input label="Label" error errorMessage="Her gikk det galt" />
							</div>
							<div className="d-flex justify-content-center flex-wrap negative-wrapper">
								<Input negative label="Label" error errorMessage="Her gikk det galt" />
							</div>
						</div>
						<div className="col-lg-12 mt-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeExampleError} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeExampleErrorHtml} language="html" />}
						</div>
					</div>
				</div>
			)}

			{activeTab === '/props' && (
				<div>
					<Title size={2}>Props</Title>
					<table className="col-lg-12 mb-4">
						<thead style={{ textAlign: 'left' }}>
							<tr>
								<th><Title size={3}>Prop name</Title></th>
								<th><Title size={3}>Type</Title></th>
								<th><Title size={3}>Description</Title></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><code>ariaLabel</code></td>
								<td>string</td>
								<td>Defines a string value that labels input element, use if label is not visible</td>
							</tr>
							<tr>
								<td><code>disabled</code></td>
								<td>bool</td>
								<td>Toggles disabled state</td>
							</tr>
							<tr>
								<td><code>error</code></td>
								<td>bool</td>
								<td>Changes design</td>
							</tr>
							<tr>
								<td><code>errorMessage</code></td>
								<td>string</td>
								<td>Renders an error message underneath input field</td>
							</tr>
							<tr>
								<td><code>handleChange</code></td>
								<td>func</td>
								<td>Callback function</td>
							</tr>
							<tr>
								<td><code>id</code></td>
								<td>string</td>
								<td>ID to connect label with input field</td>
							</tr>
							<tr>
								<td><code>label</code></td>
								<td>string</td>
								<td>Label text</td>
							</tr>
							<tr>
								<td><code>negative</code></td>
								<td>bool</td>
								<td>Changes design</td>
							</tr>
							<tr>
								<td><code>placeholder</code></td>
								<td>string</td>
								<td>Placeholder text</td>
							</tr>
							<tr>
								<td><code>searchField</code></td>
								<td>bool</td>
								<td>Ads search icon with click</td>
							</tr>
							<tr>
								<td><code>submitCallback</code></td>
								<td>func</td>
								<td>Callback for onSubmit</td>
							</tr>
							<tr>
								<td><code>type</code></td>
								<td>string</td>
								<td>Changes input type</td>
							</tr>
							<tr>
								<td><code>value</code></td>
								<td>string</td>
								<td>Input value. Can be initiated with a value</td>
							</tr>
						</tbody>
					</table>

					<Divider className="mb-4" light />

					<div>
						<Text>Depends on</Text>
						<ul>
							<li><Link href="https://github.com/statisticsnorway/ssb-component-library/tree/master/src/components/InputError" isExternal>Form error</Link></li>
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

export default InputInfo;
