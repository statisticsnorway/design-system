import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { FormError, Divider, LeadParagraph, Paragraph, Tabs, Title } from '@statisticsnorway/ssb-component-library';

const tabItems = [
	{
		title: 'Oversikt',
		path: '/oversikt',
	}, {
		title: 'Begrunnelse',
		path: '/begrunnelse',
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
const errors = ['error 1', 'error 2', 'error 3'];

<FormError errorMessages={errors} title="Some fields are not right:" />

<FormError negative errorMessages={errors} title="Some fields are not right!" />
`;

const codeHtml = `
<div class="ssb-form-error">
  <span class="error-icon" />
  <div>
    <span class="error-title">Some fields are not right:</span>
    <ul>
      <li>error 1</li>
      <li>error 2</li>
      <li>error 3</li>
    </ul>
  </div>
</div>

<div class="ssb-form-error negative">
  <span class="error-icon" />
  <div>
    <span class="error-title">Some fields are not right:</span>
    <ul>
      <li>error 1</li>
      <li>error 2</li>
      <li>error 3</li>
    </ul>
  </div>
</div>
`;

const errorMessages = [
	'Not a valid email',
	'Select a country',
	'Feed the dog',
];

const FormErrorInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Form error</Title>
			<LeadParagraph>
				Kommer snart
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-4" />

			{activeTab === '/oversikt' && (
				<div>
					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Form error</Title>
						<div className="col-lg-6">
							<Paragraph>
								Kommer snart
							</Paragraph>
						</div>
						<div className="col-lg-6 divider-left d-flex flex-column align-items-center">
							<div className="d-flex component-wrapper">
								<FormError errorMessages={errorMessages} title="Some fields are not right!" />
							</div>
							<div className="d-flex component-wrapper">
								<FormError negative errorMessages={errorMessages} title="Some fields are not right!" />
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
				<div className="row col-lg-12 ">
					<Title size={2}>Props</Title>
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
								<td><code>errorMessages</code></td>
								<td>array</td>
								<td>Renders list items</td>
							</tr>
							<tr>
								<td><code>negative</code></td>
								<td>Optional boolean</td>
								<td>Will change component style. Defaults to false</td>
							</tr>
							<tr>
								<td><code>title</code></td>
								<td>string</td>
								<td>Renders a title</td>
							</tr>
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default FormErrorInfo;
