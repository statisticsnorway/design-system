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

const codeExampleInput = `
<Input
  label="Label"
  handleChange={handleChange}
  value={someValue}
/>

<Input
  label="Label"
  negative
  handleChange={handleChange}
  value={someValue}
/>
`;

const codeExampleInputHtml = `
<div class="ssb-input">
  <label for="input1">Label</label>
  <div class="input-wrapper">
    <input id="input1" type="text" class="" value="">
  </div>
</div>

<div class="ssb-input negative">
  <label for="input1">Label</label>
  <div class="input-wrapper">
    <input id="input1" type="text" class="" value="">
  </div>
</div>
`;

const codeExampleTextarea = `
<TextArea label="Label" />

<TextArea negative label="Label" />

<TextArea label="Label" rows={20} cols={50} />
`;

const codeExampleTextareaHtml = `
<div class="ssb-text-area">
    <label for="textarea1">Label</label>
    <div class="text-area-wrapper">
        <textarea id="textarea1"></textarea>
    </div>
</div>

<div class="ssb-text-area negative">
    <label for="textarea1">Label</label>
    <div class="text-area-wrapper">
        <textarea id="textarea1"></textarea>
    </div>
</div>

<div class="ssb-text-area">
    <label for="textarea1">Label</label>
    <div class="text-area-wrapper">
        <textarea id="textarea1" rows="20" cols="20"></textarea>
    </div>
</div>
`;

const codeExampleError = `
<Input label="Passord" error errorMessage="Skriv inn passord, minimum 6 siffer" />

<Input negative label="Passord" error errorMessage="Skriv inn passord, minimum 6 siffer" />

`;

const codeExampleErrorHtml = `
<div class="ssb-input error ">
    <label for="input1">Passord</label>
    <div class="input-wrapper">
        <input id="input1" type="text" class=" with-icon" value="">
    </div>
    <div class="ssb-input-error ">
        <span>Skriv inn passord, minimum 6 siffer</span>
    </div>
</div>

<div class="ssb-input negative error ">
    <label for="input1">Passord</label>
    <div class="input-wrapper">
        <input id="input1" type="text" class=" with-icon" value="">
    </div>
    <div class="ssb-input-error negative">
        <span>Skriv inn passord, minimum 6 siffer</span>
    </div>
</div>
`;

const InputInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Input and Text Field</Title>
			<LeadParagraph>
				Input- og tekstfelt er en komponent som lar brukeren legge inn tekst.
				Placeholder (hjelpetekst) i input- og tekstfelt skal ikke brukes fordi den forsvinner ved klikk. Hjelpeteksten skal alltid plasseres over feltet og blir stående ved klikk.
			</LeadParagraph>

			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-4" />

			{activeTab === '/overview' && (
				<div>
					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Input</Title>
						<div className="col-lg-6">
							<Paragraph>
								Inputfelt har tre steg; ikke-valgt, hover og valgt. Når feltet ikke er valgt har det en tynn rektangulær mørk ramme.
								Når bruker peker over rammen med musepeker, blir rammen grønn og får en tykkere strek.
								Ved klikk vises en blinkende strek (cursor) i rammen for å kommunisere at brukeren kan fylle inn tekst.
							</Paragraph>
						</div>
						<div className="component-example col-lg-6 divider-left d-flex flex-column align-items-center">
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
							{activeCodeTab === '/react' && <CodeSnippet code={codeExampleInput} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeExampleInputHtml} language="html" />}
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
							{activeCodeTab === '/react' && <CodeSnippet code={codeExampleTextarea} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeExampleTextareaHtml} language="html" />}
						</div>
					</div>

					<Divider light className="mb-4" />

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Error</Title>
						<div className="col-lg-6">
							<Paragraph>
								Når en feil oppstår i et input- eller tekstfelt felt, endret feltets utseende.
								Rammen på feltet blir rød og tykkere for at brukeren skal se hvor det mangler noe / må rettes opp.
								Under input- eller tekstfeltet vil det vises en feilmelding som forklarer feilen og hvordan den kan løses.
								I tillegg skal det også komme opp en feilmeldingsboks som viser en oversikt over alle feil og hvordan de kan løses.
								Feilmeldingsboksen finner du stil og kode til her(lenke).
							</Paragraph>
						</div>
						<div className="component-example col-lg-6 divider-left d-flex flex-column align-items-center">
							<div className="d-flex justify-content-center mb-4 flex-wrap component-wrapper">
								<Input label="Passord" error errorMessage="Skriv inn passord, minimum 6 siffer" />
							</div>
							<div className="d-flex justify-content-center flex-wrap negative-wrapper">
								<Input negative label="Passord" error errorMessage="Skriv inn passord, minimum 6 siffer" />
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
					<Title size={2}>Props Input</Title>
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
								<td><code>ariaLabelSearchButton</code></td>
								<td>string</td>
								<td>Defines a string value that labels button element</td>
							</tr>
							<tr>
								<td><code>className</code></td>
								<td>string</td>
								<td>Optional container class</td>
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

					<Title size={2}>Props Textarea</Title>
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
								<td><code>className</code></td>
								<td>string</td>
								<td>Optional container class</td>
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
								<td><code>value</code></td>
								<td>string</td>
								<td>Input value. Can be initiated with a value</td>
							</tr>
							<tr>
								<td><code>rows</code></td>
								<td>number</td>
								<td>Specifies the visible height of a text area</td>
							</tr>
							<tr>
								<td><code>cols</code></td>
								<td>number</td>
								<td>Specifies the visible width of a text area</td>
							</tr>
						</tbody>
					</table>

					<Divider className="mb-4" light />

					<Title size={2}>Props InputError</Title>
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
								<td><code>className</code></td>
								<td>string</td>
								<td>Optional container class</td>
							</tr>
							<tr>
								<td><code>errorMessage</code></td>
								<td>string</td>
								<td>Renders an error message underneath input field</td>
							</tr>
							<tr>
								<td><code>negative</code></td>
								<td>bool</td>
								<td>Changes design</td>
							</tr>
						</tbody>
					</table>

					<Divider className="mb-4" light />

					<div>
						<Text>Depends on</Text>
						<ul>
							<li><Link href="https://github.com/statisticsnorway/ssb-component-library/tree/master/src/components/InputError" isExternal>Input Error</Link></li>
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

export default InputInfo;
