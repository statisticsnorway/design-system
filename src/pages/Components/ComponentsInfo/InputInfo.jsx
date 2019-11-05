import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Divider, Input, LeadParagraph, Link, Paragraph, Tabs, Text, Title } from '@statisticsnorway/ssb-component-library';

const tabItems = [
	{
		title: 'Oversikt',
		path: '/overview',
	}, {
		title: 'Begrunnelse',
		path: '/rationale',
	},
];

const InputInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const tabClicked = e => {
		changeTab(e);
	};
	return (
		<div className="col-lg-12">
			<Title size={1}>Input</Title>
			<LeadParagraph>
				Input forms are an input element that allows the user to interact and input data into.
				Label text should be used to tell the user what kind of data the input form is looking for
				and should be short and concise and written in plain language.
			</LeadParagraph>

			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider />

			{activeTab === '/overview' && (
				<div className="mt-3">
					<div className="row mb-3">
						<Title size={3} className="col-lg-12">Input</Title>
						<div className="col-lg-6">
							<Paragraph>
								Input forms contains 3 different state: un-clicked, hover and clicked.
								When un-clicked the form is outlined by a grey rectangle outline.
								When hovered, this rectangle outline turns into green.
								When clicked by the user the blinking line indicates that it is ready for typing.
							</Paragraph>
						</div>
						<div className="col-lg-6 row">
							<div className="col-lg-7">
								<Input label="Label" />
							</div>
						</div>
						<div className="col-lg-12">
							<CodeSnippet code={'<Input label="Label" value={someValue} handleChange={handleChange} />'} language="jsx" />
						</div>
					</div>

					<Divider light className="mb-3" />

					<div className="row mb-3">
						<Title size={3} className="col-lg-12">Input error</Title>
						<div className="col-lg-6">
							<Paragraph>
								When an error occurs in the input form, the select form will change into a error state where the
								input form will change its border into a thicker border and color into red.
								At the right side of the input form an error icon will be displayed.
								Underneath the form an error message will be displayed in order to explain how to fix the error.
							</Paragraph>
						</div>
						<div className="col-lg-6 row">
							<div className="col-lg-7">
								<Input label="Label" error errorMessage="Her gikk det galt" />
							</div>
						</div>
						<div className="col-lg-12">
							<CodeSnippet code={'<Input error errorMessage="Her gikk det galt" label="Label" />'} language="jsx" />
						</div>
					</div>

					<Divider light className="mb-3" />

					<div className="row mb-3">
						<Title size={3} className="col-lg-12">Search</Title>
						<div className="col-lg-6">
							<Paragraph>
								Search form are an input element that combines an input form and a clickable search icon to allow
								the user to search for specific word or phrases by inputting the data into the search form.
							</Paragraph>
						</div>
						<div className="col-lg-6 row">
							<div className="col-lg-7">
								<Input searchField label="Label" />
							</div>
						</div>
						<div className="col-lg-12">
							<CodeSnippet code={'<Input searchField submitCallback={handleSubmit} label="Label" />'} language="jsx" />
						</div>
					</div>

					<Divider light className="mb-3" />

					<div>
						<Title size={3}>Props</Title>
						<table className="col-lg-12">
							<thead style={{ textAlign: 'left' }}>
								<tr>
									<th><Title size={5}>Prop name</Title></th>
									<th><Title size={5}>Type</Title></th>
									<th><Title size={5}>Description</Title></th>
								</tr>
							</thead>
							<tbody>
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

						<Divider className="mt-3 mb-3" />

						<div>
							<Text>Depends on</Text>
							<ul>
								<li><Link href="https://github.com/statisticsnorway/ssb-component-library/tree/master/src/components/InputError" isExternal>Form error</Link></li>
							</ul>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default InputInfo;
