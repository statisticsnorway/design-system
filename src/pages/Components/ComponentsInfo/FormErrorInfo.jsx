import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { FormError, Divider, LeadParagraph, Tabs, Title } from '@statisticsnorway/ssb-component-library';

const leadParagraphText = `
Kommer snart   
`;

const overviewText = `
Kommer snart   
`;

const tabItems = [
	{
		title: 'Oversikt',
		path: '/oversikt',
	}, {
		title: 'Begrunnelse',
		path: '/begrunnelse',
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

<FormError
  errorMessages={errors}
  title="Some fields are not right:"
/>
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
`;

const errorMessages = [
	'Not a valid email',
	'Select a country',
	'Feed the dog',
];

const FormErrorInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => {
		changeTab(e);
	};
	const tabCodeClicked = e => {
		changeCodeTab(e);
	};

	return (
		<div className="col-lg-12">
			<Title size={1}>Form error</Title>
			<LeadParagraph>
				{leadParagraphText}
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider />

			{activeTab === '/oversikt' && (
				<div className="mt-3">
					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Form error</Title>
						<div className="col-lg-6">
							<p>{overviewText}</p>
						</div>
						<div className="col-lg-6">
							<FormError errorMessages={errorMessages} title="Some fields are not right!" />
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeReact} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeHtml} language="html" />}
						</div>
					</div>

					<Divider light className="mb-3" />

					<div className="row col-lg-12 ">
						<Title size={2} className="mt-3">Props</Title>
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
									<td><code>title</code></td>
									<td>string</td>
									<td>Renders a title</td>
								</tr>
							</tbody>
						</table>
					</div>

				</div>
			)}
		</div>
	);
};

export default FormErrorInfo;
