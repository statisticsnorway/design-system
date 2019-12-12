import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Divider, Input, LeadParagraph, Link, Paragraph, Tabs, Text, Title } from '@statisticsnorway/ssb-component-library';

const tabItems = [
	{
		title: 'Oversikt',
		path: '/oversikt',
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

const codeReact = `
<Input
  ariaLabel="Input field Search"
  placeholder="Search text"
  searchField
  submitCallback={handleSubmit}
  value={someValue}
/>
`;

const codeHtml = `
<div class="ssb-input ">
    <div class="input-wrapper">
        <input id="input1" type="text" placeholder="Search text" aria-label="Input field Search" class="with-icon" value="">
        <button class="icon-wrapper search-icon">
            {insert Search icon here}
        </button>
    </div>
</div>
`;

const SearchBoxInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Search</Title>
			<LeadParagraph>
				Søkefelt består av inputfelt og klikkbart ikon. Feltet gjør det mulig for brukeren å søke på spesielle ord eller setninger ved å skrive dem inn i søkefeltet.
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-4" />

			{activeTab === '/oversikt' && (
				<div>
					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Seach</Title>
						<div className="col-lg-6">
							<Paragraph>
								Søk er det eneste inputfeltet i designsystemet som har placeholder-tekst, fordi feltets funksjon er tydelig selv når teksten forsvinner ved klikk.
							</Paragraph>
						</div>
						<div className="component-example col-lg-6 divider-left d-flex flex-column align-items-center">
							<div className="d-flex justify-content-center mb-4 flex-wrap component-wrapper">
								<Input
									ariaLabel="Input field Search"
									placeholder="Search text"
									searchField
								/>
							</div>
							<div className="d-flex justify-content-center flex-wrap negative-wrapper">
								<Input
									ariaLabel="Input field Search"
									placeholder="Search text"
									searchField
									negative
								/>
							</div>
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeReact} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeHtml} language="html" />}
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

export default SearchBoxInfo;
