import React, { useState } from 'react';
import CodeSnippet from '@atoms/CodeSnippet/CodeSnippet';
import Divider from '@atoms/Divider/Divider';
import LeadParagraph from '@atoms/LeadParagraph/LeadParagraph';
import Tabs from '@atoms/Tabs/Tabs';
import Button from '@atoms/Button/Button';
import Link from '@atoms/Link/Link';
import { ChevronDown } from 'react-feather';

const tabItems = [
	{
		title: 'Overview',
		path: '/overview',
	}, {
		title: 'Rationale',
		path: '/rationale',
	}, {
		title: 'Accessibility',
		path: '/accessibility',
	},
];

const codeExamplePrimary = `
<Button text="Primary" primary />
<Button text="Primary" primary disabled />
`;

const codeExampleSecondary = `
<Button text="Secondary" />
<Button text="Secondary" disabled />
`;

const codeExampleIcon = `
<Button text="Primary" primary icon={<ChevronDown size="18" />} />
<Button text="Secondary" icon={<ChevronDown size="18" />} />
`;

const codeExampleDisabled = `
<Button text="Primary" primary disabled />
<Button text="Secondary" disabled />
`;

const ButtonInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const tabClicked = e => {
		changeTab(e);
	};

	return (
		<div className="col-lg-12">
			<h1>Button</h1>
			<LeadParagraph>
				Buttons are used to communicate clear actions and help users to perform these actions.
				The button component consists of a label and sometimes an icon to communicate the action that the user is able to perform.
				The label should be as short as possible and not extend to two lines.
			</LeadParagraph>

			<ul className="mb-3 col-lg-8">
				<li>
					Primary and secondary buttons are not used to navigate the user to external pages outside of the solution.
					Use instead <Link href="/#/components/link" text="links" />.
				</li>
				<li>
					Buttons are generally used for performing actions and not for multiple-choices,
					try instead to use check box or radios buttons instead if possible.
				</li>
			</ul>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider />

			{activeTab === '/overview' && (
				<div className="mt-3">
					<div className="row mb-3">
						<h3 className="col-lg-12">Primary Button</h3>
						<div className="col-lg-6">
							<p>
								The primary button are used to indicate a primary action for the user, an action that is critical in a users workflow.
								This can be for example a primary action such as ”submit” on a form or ”Login” on the login page.
							</p>
						</div>
						<div className="col-lg-6 d-flex flex-row">
							<Button text="Primary" primary />
							<Button text="Primary" primary disabled />
						</div>
						<div className="col-lg-12">
							<CodeSnippet code={codeExamplePrimary} language="jsx" />
						</div>
					</div>

					<div className="row mb-3">
						<h3 className="col-lg-12">Secondary Button</h3>
						<div className="col-lg-6">
							<p>
								The secondary button is used to indicate actions that are important,
								but not as critical to the user as the primary button.
								It can be used together with a primary button to create hierarchy
								or together with other secondary buttons to indicate a similar hierarchy.
							</p>
						</div>
						<div className="col-lg-6 d-flex flex-row">
							<Button text="Secondary" />
							<Button text="Secondary" disabled />
						</div>
						<div className="col-lg-12">
							<CodeSnippet code={codeExampleSecondary} language="jsx" />
						</div>
					</div>

					<div className="row mb-3">
						<h3 className="col-lg-12">Button with an icon</h3>
						<div className="col-lg-6">
							<p>
								Both the primary and secondary button can be implemented with an icon,
								these buttons can be used when it is needed to use an icon to communicate an action
								or create further distinctions between the buttons.
							</p>
						</div>
						<div className="col-lg-6 d-flex flex-row">
							<Button text="Primary" primary icon={<ChevronDown size="18" />} />
							<Button text="Secondary" icon={<ChevronDown size="18" />} />
						</div>
						<div className="col-lg-12">
							<CodeSnippet code={codeExampleIcon} language="jsx" />
						</div>
					</div>

					<div className="row mb-3">
						<h3 className="col-lg-12">Disabled Button</h3>
						<div className="col-lg-6">
							<p>
								The disabled button is greyed out and can’t be clicked nor does it have a hover animation.
								This to indicate to the user that there are no actions available with it.
							</p>
						</div>
						<div className="col-lg-6 d-flex flex-row">
							<Button text="Primary" primary disabled />
							<Button text="Secondary" disabled />
						</div>
						<div className="col-lg-12">
							<CodeSnippet code={codeExampleDisabled} language="jsx" />
						</div>
					</div>

					<Divider />

					<div className="row">
						<h3 className="col-lg-12 mt-3 mb-3">Props</h3>
						<table className="col-lg-12">
							<thead style={{ textAlign: 'left' }}>
								<tr>
									<th><h5>Prop name</h5></th>
									<th><h5>Type</h5></th>
									<th><h5>Description</h5></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><code>disabled</code></td>
									<td>bool</td>
									<td>Decides if the button is disabled</td>
								</tr>
								<tr>
									<td><code>icon</code></td>
									<td>node</td>
									<td>Renders an icon</td>
								</tr>
								<tr>
									<td><code>onClick</code></td>
									<td>function</td>
									<td>Callback for button click</td>
								</tr>
								<tr>
									<td><code>primary</code></td>
									<td>bool</td>
									<td>Changes style to represent a primary button</td>
								</tr>
								<tr>
									<td><code>text</code></td>
									<td>string</td>
									<td>Text to be shown inside button</td>
								</tr>
								<tr>
									<td><code>type</code></td>
									<td>string</td>
									<td>
										Button type. Can be &apos;submit&apos;, &apos;reset&apos;, or &apos;button&apos;.
										Defaults to &apos;button&apos;.
									</td>
								</tr>
							</tbody>
						</table>
					</div>

				</div>
			)}

			{activeTab === '/rationale' && (
				<div className="mt-3">
					<div className="row mb-3">
						<h3 className="col-lg-4">Rounded corners</h3>
						<div className="col-lg-8">
							<span>
								The choice of going with a slightly rounded corners was based on conveying a more
								open and friendly branding for ssb.no and to create contrast with the other more squared
								components within the library to make buttons distinctive and stand out.
							</span>
						</div>
					</div>

					<div className="row mb-3">
						<h3 className="col-lg-4">Filled background</h3>
						<div className="col-lg-8">
							<span>
								For secondary buttons the background of the button is always filled,
								the reason behind this is to make sure the label inside of the button always has a
								good contrast and visible to the user. This way the placement of secondary buttons
								becomes more flexible and will always fulfill the UU requirements.
							</span>
						</div>
					</div>

					<div className="row mb-3">
						<h3 className="col-lg-4">Underline on hover</h3>
						<div className="col-lg-8">
							<span>
								All button variants have underline on hover in order to address WCAG2.0 Citerion 1.4.1.
								”1.4.1 Use of Color: Color is not used as the only visual means of conveying
								information, indicating an action, prompting a response, or distinguishing a visual element. (Level A)”
							</span>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ButtonInfo;
